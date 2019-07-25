/** @jsx jsx */
import { useSpring, animated } from 'react-spring';
import { Styled, Box, Flex, jsx } from 'theme-ui';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { ReactComponent as IconOrigin } from '../assets/icons/icon-globe.svg';
import { ReactComponent as IconWeight } from '../assets/icons/icon-scale.svg';
import { ReactComponent as IconInCareSince } from '../assets/icons/icon-calendar-date.svg';
import { ReactComponent as IconColor } from '../assets/icons/icon-view-visible.svg';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const AnimalCard = ({ animal }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const {
    birthday,
    color,
    countryOfOrigin,
    id,
    images,
    inCareSince,
    name,
    shoulderHeight,
    slug,
    text,
    thumbnailSrc,
    weight,
  } = animal;
  return (
    <Flex
      sx={{
        boxShadow: 'xl',
        overflow: 'hidden',
        borderRadius: '.5rem',
        backgroundColor: '#fff',
        marginBottom: '32px',
        height: ['auto', '300px'],
        flexDirection: ['column', 'row'],
      }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
    >
      <animated.div
        sx={{
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          height: '300px',
          width: '70%',
          overflow: 'hidden',
        }}
        class="card"
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img
          sx={{
            objectFit: 'cover',
            width: '100%',
            flex: 'none',
          }}
          src={animal.thumbnailSrc}
          alt=""
        />
      </animated.div>

      <Box sx={{ width: ['100%'] }}>
        <Box sx={{ width: ['100%'], padding: '3' }}>
          <p>
            {' '}
            <strong>{name}</strong>
          </p>
          <p>{text.substring(0, 100)}</p>
        </Box>
        <Box
          sx={{
            backgroundColor: 'gray.4',
          }}
        >
          <Flex>
            <Styled.ul
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Styled.li>{birthday}</Styled.li>
              <Styled.li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  sx={{ width: '1.5rem' }}
                >
                  <path
                    class="primary"
                    d="M11 6.39L6.32 7.95a1 1 0 0 1-.64 0l-3-1a1 1 0 0 1 .64-1.9l2.68.9 5-1.67V3a1 1 0 0 1 2 0v1.28l5 1.67 2.68-.9a1 1 0 0 1 .64 1.9l-3 1a1 1 0 0 1-.64 0L13 6.39V18c0 1.1.9 2 2 2h1v2H8v-2h1a2 2 0 0 0 2-2V6.39z"
                  />
                  <path
                    class="secondary"
                    d="M17.05 6.68a1 1 0 0 1 1.9 0l3 9a1 1 0 0 1-.4 1.15A6.36 6.36 0 0 1 18 18c-1.2 0-2.4-.4-3.55-1.17a1 1 0 0 1-.4-1.15l3-9zM19.61 15L18 10.16 16.39 15h3.22zM5.05 6.68a1 1 0 0 1 1.9 0l3 9a1 1 0 0 1-.4 1.15A6.36 6.36 0 0 1 6 18c-1.2 0-2.4-.4-3.55-1.17a1 1 0 0 1-.4-1.15l3-9zM7.61 15L6 10.16 4.39 15H7.6z"
                  />
                </svg>
                {color}
              </Styled.li>
              <Styled.li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  sx={{ width: '1.5rem' }}
                >
                  <path
                    class="primary"
                    d="M11 6.39L6.32 7.95a1 1 0 0 1-.64 0l-3-1a1 1 0 0 1 .64-1.9l2.68.9 5-1.67V3a1 1 0 0 1 2 0v1.28l5 1.67 2.68-.9a1 1 0 0 1 .64 1.9l-3 1a1 1 0 0 1-.64 0L13 6.39V18c0 1.1.9 2 2 2h1v2H8v-2h1a2 2 0 0 0 2-2V6.39z"
                  />
                  <path
                    class="secondary"
                    d="M17.05 6.68a1 1 0 0 1 1.9 0l3 9a1 1 0 0 1-.4 1.15A6.36 6.36 0 0 1 18 18c-1.2 0-2.4-.4-3.55-1.17a1 1 0 0 1-.4-1.15l3-9zM19.61 15L18 10.16 16.39 15h3.22zM5.05 6.68a1 1 0 0 1 1.9 0l3 9a1 1 0 0 1-.4 1.15A6.36 6.36 0 0 1 6 18c-1.2 0-2.4-.4-3.55-1.17a1 1 0 0 1-.4-1.15l3-9zM7.61 15L6 10.16 4.39 15H7.6z"
                  />
                </svg>

                {inCareSince}
              </Styled.li>
              <Styled.li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  sx={{ width: '1.5rem' }}
                >
                  <path
                    class="primary"
                    d="M11 6.39L6.32 7.95a1 1 0 0 1-.64 0l-3-1a1 1 0 0 1 .64-1.9l2.68.9 5-1.67V3a1 1 0 0 1 2 0v1.28l5 1.67 2.68-.9a1 1 0 0 1 .64 1.9l-3 1a1 1 0 0 1-.64 0L13 6.39V18c0 1.1.9 2 2 2h1v2H8v-2h1a2 2 0 0 0 2-2V6.39z"
                  />
                  <path
                    class="secondary"
                    d="M17.05 6.68a1 1 0 0 1 1.9 0l3 9a1 1 0 0 1-.4 1.15A6.36 6.36 0 0 1 18 18c-1.2 0-2.4-.4-3.55-1.17a1 1 0 0 1-.4-1.15l3-9zM19.61 15L18 10.16 16.39 15h3.22zM5.05 6.68a1 1 0 0 1 1.9 0l3 9a1 1 0 0 1-.4 1.15A6.36 6.36 0 0 1 6 18c-1.2 0-2.4-.4-3.55-1.17a1 1 0 0 1-.4-1.15l3-9zM7.61 15L6 10.16 4.39 15H7.6z"
                  />
                </svg>

                {shoulderHeight}
              </Styled.li>
              <Styled.li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  sx={{ width: '1.5rem' }}
                >
                  <path
                    class="primary"
                    d="M11 6.39L6.32 7.95a1 1 0 0 1-.64 0l-3-1a1 1 0 0 1 .64-1.9l2.68.9 5-1.67V3a1 1 0 0 1 2 0v1.28l5 1.67 2.68-.9a1 1 0 0 1 .64 1.9l-3 1a1 1 0 0 1-.64 0L13 6.39V18c0 1.1.9 2 2 2h1v2H8v-2h1a2 2 0 0 0 2-2V6.39z"
                  />
                  <path
                    class="secondary"
                    d="M17.05 6.68a1 1 0 0 1 1.9 0l3 9a1 1 0 0 1-.4 1.15A6.36 6.36 0 0 1 18 18c-1.2 0-2.4-.4-3.55-1.17a1 1 0 0 1-.4-1.15l3-9zM19.61 15L18 10.16 16.39 15h3.22zM5.05 6.68a1 1 0 0 1 1.9 0l3 9a1 1 0 0 1-.4 1.15A6.36 6.36 0 0 1 6 18c-1.2 0-2.4-.4-3.55-1.17a1 1 0 0 1-.4-1.15l3-9zM7.61 15L6 10.16 4.39 15H7.6z"
                  />
                </svg>
                {weight}
              </Styled.li>
              <Styled.li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  sx={{ width: '1.5rem' }}
                >
                  <circle cx="12" cy="12" r="10" class="primary" />
                  <path
                    class="secondary"
                    d="M2.05 11A10 10 0 0 1 15 2.46V6a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-1 1.73V12h2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v2.14A9.97 9.97 0 0 1 12 22v-4h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1-2-2v-1H2.05z"
                  />
                </svg>
                {countryOfOrigin}
              </Styled.li>
            </Styled.ul>
            <button
              sx={{
                fontSize: '2',
                paddingTop: '.75rem',
                paddingBottom: '.75rem',
                color: 'white',
                boxShadow: 'md',
                fontWeight: 'bold',
                borderRadius: '0.5rem',
                backgroundColor: 'secondary',
              }}
            >
              <AniLink fade to={slug}>
                Get to know {name}
              </AniLink>
            </button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default AnimalCard;
