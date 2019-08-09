const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);

const standardBasePath = `/`;
const standardPagesPath = `src/pages`;
const standardAnimalsPath = `src/data/animals`;

// 1. make sure that the animal and page directories exist
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState();

  const animalsPath = themeOptions.animalsPath || standardAnimalsPath;
  const pagesPath = themeOptions.pagesPath || standardPagesPath;

  const dirs = [
    path.join(program.directory, animalsPath),
    path.join(program.directory, pagesPath),
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.info(`Creating the "${dir}" directory`);
      mkdirp.sync(dir);
    }
  });
};

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  });
  return result;
};

// 2. define event type
exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions;

  createTypes(`
    type AnimalsYaml implements Node @dontInfer {
        id: ID!
        name: String!
        countryOfOrigin: String! @proxy(from: "country_of_origin")
        shoulderHeight: String! @proxy(from: "shoulder_height")
        weight: String!
        birthday: Date! @dateformat
        color: String!
        inCareSince: Date! @dateformat @proxy(from: "in_care_since")
        text: String!
        thumbnailSrc: String! @proxy(from: "thumbnail_src")
        images: [String!]!
        slug: String!
    }
    `);
  const typeDefs = [
    schema.buildObjectType({
      name: `Page`,
      fields: {
        slug: { type: `String` },
        title: { type: `String` },
        cover: { type: `File`, extensions: { fileByRelativePath: {} } },
        excerpt: {
          type: `String`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 160,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        body: {
          type: `String`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`],
      extensions: {
        infer: false,
      },
    }),
  ];

  createTypes(typeDefs);
};
// 3. define resolvers for custom fields (slug)
exports.createResolvers = ({ createResolvers }, themeOptions) => {
  const basePath = themeOptions.basePath || standardBasePath;
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    return `/${basePath}/${slug}/`.replace(/\/\/+/g, '/');
  };

  createResolvers({
    AnimalsYaml: {
      slug: {
        resolve: source => {
          return slugify(source.name);
        },
      },
    },
  });
};

exports.onCreateNode = (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const { createNode, createParentChildLink } = actions;

  const pagesPath = themeOptions.pagesPath || standardPagesPath;

  if (node.internal.type !== `Mdx`) {
    return;
  }

  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  // Check for "pages" and create the "Page" type
  if (node.internal.type === `Mdx` && source === pagesPath) {
    const fieldData = {
      title: node.frontmatter.title,
      slug: node.frontmatter.slug,
      cover: node.frontmatter.cover,
    };

    createNode({
      ...fieldData,
      id: createNodeId(`${node.id} >>> Page`),
      parent: node.id,
      children: [],
      internal: {
        type: `Page`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Pages`,
      },
    });

    createParentChildLink({ parent: fileNode, child: node });
  }
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  // 4. query for animals and create pages
  const basePath = options.basePath || standardBasePath;

  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/animalsTemplate.tsx'),
  });

  const result = await graphql(`
    query {
      allAnimalsYaml {
        nodes {
          id
          slug
        }
      }
      allPage {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(`error loading animals or pages`, reporter.errors);
    return;
  }

  const animals = result.data.allAnimalsYaml.nodes;
  // generate animal pages
  animals.forEach(animal => {
    const slug = animal.slug;
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/animalTemplate.tsx'),
      context: {
        eventId: animal.id,
      },
    });
  });

  const pages = result.data.allPage.nodes;

  if (pages.length > 0) {
    pages.forEach(page => {
      createPage({
        path: page.slug,
        component: require.resolve(`./src/templates/pageTemplate.tsx`),
        context: {
          slug: page.slug,
        },
      });
    });
  }
};
