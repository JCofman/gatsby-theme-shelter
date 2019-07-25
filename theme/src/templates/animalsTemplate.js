import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import AnimalList from '../components/animalList';

const AnimalsTemplate = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allAnimalsYaml {
          nodes {
            birthday
            color
            countryOfOrigin
            id
            images
            inCareSince
            name
            shoulderHeight
            slug
            text
            thumbnailSrc
            weight
          }
        }
      }
    `
  );
  const animals = data.allAnimalsYaml.nodes;
  return (
    <Layout>
      <AnimalList animals={animals}></AnimalList>
    </Layout>
  );
};

export default AnimalsTemplate;
