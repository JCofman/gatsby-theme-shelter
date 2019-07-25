import React from 'react';
import { Styled, Flex, Box } from 'theme-ui';

import AnimalCard from './animalCard';
import Pagination from './pagination';

const AnimalList = ({ animals }) => {
  return (
    <>
      {' '}
      <Styled.h1>Adopt us</Styled.h1>
      <Styled.p>Because we are awesome</Styled.p>
      <Flex
        sx={{
          backgroundColor: 'background',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: ['100%'] }}>
          {animals.map(animal => (
            <AnimalCard animal={animal}></AnimalCard>
          ))}
        </Box>
      </Flex>
      <Pagination></Pagination>
    </>
  );
};

export default AnimalList;
