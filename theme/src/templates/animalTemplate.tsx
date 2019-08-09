import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Animal from '../components/animal';

export const query = graphql`
  query($animalID: String) {
    animalsYaml(id: { eq: $animalID }) {
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
`;

const AnimalTemplate = ({ data: { animalsYaml } }) => (
  <Layout>
    <Animal animal={animalsYaml}></Animal>
  </Layout>
);

export default AnimalTemplate;
