import React from 'react';
import { css, Global } from '@emotion/core';
import { Layout as StyledLayout, Main, Container } from 'theme-ui';

import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <SEO />
      <Global
        styles={css`
          body {
            margin: 0;
          }
          .primary {
            fill: #a5b3bb;
          }

          .secondary {
            fill: #0d2b3e;
          }
        `}
      />
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
