import React from 'react';
import { Link } from 'gatsby';
import { css, Styled, Flex } from 'theme-ui';

const Navigation = ({ nav }) => (
  <Flex
    as="nav"
    css={css({
      flex: 1,
      justifyContent: `flex-start`,
      order: [2, 1],
      fontSize: 'sm',
      padding: `1.5rem`,
    })}
    aria-label="Primary Navigation"
  >
    {nav.map(n => (
      <Styled.a
        as={Link}
        css={css({
          color: `text`,
          color: '#b2f5ea',

          ':hover': { color: `primary`, textDecoration: `none` },
        })}
        key={n.slug}
        to={n.slug}
      >
        {n.title}
      </Styled.a>
    ))}
  </Flex>
);

export default Navigation;
