/** @jsx jsx */
import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Styled, Flex, Box, jsx } from 'theme-ui';
import SEO from '../components/seo';

const Item = ({ name, content }) => (
  <Flex
    sx={{
      flexDirection: `column`,
      '&:not(:last-of-type)': {
        mr: 5,
      },
      mb: 2,
    }}
  >
    <div
      sx={{
        textTransform: `uppercase`,
        color: `primary`,
        letterSpacing: `wider`,
        fontWeight: `semibold`,
      }}
    >
      {name}
    </div>
    <div sx={{ fontSize: 2 }}>{content}</div>
  </Flex>
);

const Animal = ({ animal }) => {
  const {
    birthday,
    color,
    countryOfOrigin,
    // id,
    images,
    inCareSince,
    name,
    shoulderHeight,
    slug,
    text,
    thumbnailSrc,
    weight,
  } = animal;

  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, -30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  });
  const infoProps = useSpring({
    config: config.slow,
    delay: 500,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  const contentProps = useSpring({
    config: config.slow,
    delay: 1000,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        backgroundColor: '#fff',
        boxShadow: 'xl',
        borderRadius: '.5rem',
      }}
    >
      <SEO
        title={animal.title}
        description={animal.excerpt}
        pathname={animal.slug}
        image={animal.thumbnailSrc}
      >
        <meta name="twitter:label1" value="Client" />
        <meta name="twitter:label2" value="Date" />
        <meta name="twitter:data1" value={animal.client} />
        <meta name="twitter:data2" value={animal.date} />
      </SEO>

      <Flex>
        <img
          sx={{
            objectFit: 'cover',
            width: '50%',
            flex: 'none',
            clipPath: 'polygon(0% 0%, 75% 0%, 100% 100%, 25% 100%)',
          }}
          src={animal.thumbnailSrc}
          alt=""
        />

        <Flex
          sx={{
            bottom: 0,
            left: 0,
            right: 0,
            maxWidth: `5xl`,
            margin: `0 auto`,
            padding: 4,
            zIndex: 2,
            flexDirection: `column`,
          }}
        >
          <animated.div style={titleProps}>
            <Styled.h1>{animal.name}</Styled.h1>
          </animated.div>
          <animated.div style={infoProps}>
            <div sx={{ mt: 4, mb: [2, 4], flexWrap: `wrap` }}>
              <Item name="Shoulder height" content={shoulderHeight} />
              <Item name="Birthday" content={birthday} />
              <Item name="Weight" content={weight} />
              <Item name="Country of origin" content={countryOfOrigin} />
              <Item name="Color" content={color} />
              <Item name="In care since" content={inCareSince} />
            </div>
          </animated.div>
        </Flex>
        <Box></Box>
      </Flex>

      <animated.div style={contentProps}>
        <p>{text}</p>
      </animated.div>
    </Flex>
  );
};

export default Animal;
