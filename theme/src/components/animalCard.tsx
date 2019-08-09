/** @jsx jsx */
import { useSpring, animated } from 'react-spring';
import { Styled, Box, Flex, jsx } from 'theme-ui';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import IconOrigin from '../assets/icons/icon-globe.inline.svg';
import IconWeight from '../assets/icons/icon-scale.inline.svg';
import IconColor from '../assets/icons/icon-paint.inline.svg';
import IconBirthday from '../assets/icons/icon-calendar-date.inline.svg';
import IconInCareSince from '../assets/icons/icon-hour-glass.inline.svg';
import IconShoulderHeight from '../assets/icons/icon-cheveron-up.inline.svg';

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
                fontSize: '0',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Styled.li>
                {' '}
                <IconBirthday sx={{ width: '24px' }}></IconBirthday>
                {birthday}
              </Styled.li>
              <Styled.li>
                <IconColor sx={{ width: '1.5rem' }}></IconColor>
                {color}
              </Styled.li>
              <Styled.li>
                <IconInCareSince sx={{ width: '1.5rem' }}></IconInCareSince>
                {inCareSince}
              </Styled.li>
              <Styled.li>
                <IconShoulderHeight
                  sx={{ width: '1.5rem' }}
                ></IconShoulderHeight>
                {shoulderHeight}
              </Styled.li>
              <Styled.li>
                <IconShoulderHeight
                  sx={{ width: '1.5rem' }}
                ></IconShoulderHeight>
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
