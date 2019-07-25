# Gatsby Theme Jam Submission Example

This repo is an example and potential starting point for theme creators.

It includes:

- a bare-bones theme (located in `theme/`) that includes basic setup
- a demo site (located in `demo/`) that installs the theme
- a Yarn workspaces configuration so the theme and demo can be worked on simultaneously

what is planned:

- unified data source load animals from wordpress, netlify, contentful sanity
-
- dark theme

## How to use this repo

**NOTE:** Make sure to replace `USERNAME` with your GitHub username and `THEMENAME` with your theme name.

1.  Fork this repo.

2.  Rename the forked repo `gatsby-theme-THEMENAME`. (Make sure to replace `THEMENAME` with your chosen name.)

3.  Get the theme set up locally.

    ```sh
    # clone the repo
    git clone git@github.com:USERNAME/gatsby-theme-THEMENAME.git

    # move into the directory
    cd gatsby-theme-THEMENAME

    # install dependencies
    yarn
    ```

4.  Update `theme/package.json` with your info.

    ```diff
      {
    +   "name": "gatsby-theme-THEMENAME",
    +   "author": "Your Name <name@example.com>",
        "repository": {
          "type": "git",
    +     "url": "https://github.com/USERNAME/gatsby-theme-THEMENAME.git"
        },
    ```

5.  Start the demo site.

    ```sh
    yarn workspace demo develop
    ```

    The demo will start at http://localhost:8000

    **NOTE:** If you’re new to Yarn workspaces, check out [this post](https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/) for details.

6.  Start editing the theme! The demo site is configured to use the local theme, so any changes you make to the local `theme` directory will be reflected on the demo site for easy local development.

7.  Follow the [submission checklist](./theme/README.md#submission-checklist) to make sure your theme qualifies to win!

8.  [Submit your theme](https://themejam.gatsbyjs.org/submit) to win!

## More information

For contest rules and more information, see [the Theme Jam website](https://themejam.gatsbyjs.org).

# here goes the image / gif / logo for the project

live demo link

logo generator

demo with example installation and link to repo and docs

### Theme options

1. Theme options

- names
- types
- description

| Key           | Default value     | Description                                                                                               |
| ------------- | ----------------- | --------------------------------------------------------------------------------------------------------- |
| `basePath`    | `/`               | Root url for all blog posts                                                                               |
| `contentPath` | `/content/posts`  | Location of blog posts                                                                                    |
| `assetPath`   | `/content/assets` | Location of assets                                                                                        |
| `mdx`         | `true`            | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
};
```

### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `My Blog Title`,
    // Used to provide alt text for your avatar
    author: `My Name`,
    // Used for SEO
    description: `My site description...`,
    // Used for social links in the root footer
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
};
```

2. Exported components

- Component APIS
- props
- defaults
- how to use Component shadowing with this

### How do shadow a component example

If you want to use [component shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/)

different example component overriding , query overriding, and add some stuff to it
