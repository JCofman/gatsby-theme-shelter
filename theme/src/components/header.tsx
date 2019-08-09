/** @jsx jsx */
import { jsx, Header as ThemeUIHeader } from 'theme-ui';
import Logo from '../assets/logo_transparent.png';
import { useSpring, animated } from 'react-spring';
import { useWindowScrollPosition } from '../hooks/useWindowScrollPosition';

// import Navigation from './navigation';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const trans = s => `scale(${s})`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const Header = () => {
  const { y } = useWindowScrollPosition();

  const { x } = useSpring({
    from: { x: 0 },
    x: y === 0 ? 1 : 0,
    config: { duration: 500 },
  });

  console.log(y);
  return (
    <ThemeUIHeader>
      <ul
        sx={{
          // values referencing scales defined in a theme
          display: 'flex',
          padding: '0',
          listStyle: 'none',
          width: 'max',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          backgroundColor: 'primary',
          zIndex: '1000000',
          height: '70px',
          margin: '0',
          color: 'rgb(247, 250, 252)',
        }}
        role="navigation"
      >
        <li
          sx={{
            ml: 3,
          }}
        >
          {' '}
          <AniLink
            sx={{
              color: 'secondary',
              '&.active': {
                color: 'secondary',
              },
            }}
            fade
            to="/"
          >
            Home
          </AniLink>
        </li>
        <li></li>
        <li
          sx={{
            // values referencing scales defined in a theme
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <animated.div
            sx={{
              // values referencing scales defined in a theme
              marginTop: '70px',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
            }}
            style={{
              transform: x
                .interpolate({
                  range: [0, 1],
                  output: [1, 1.2],
                })
                .interpolate(x => `scale(${x})`),
            }}
          >
            <img width="250px" src={Logo} alt="Logo" />
          </animated.div>
        </li>
        <li>
          <AniLink to="/about">About</AniLink>
        </li>
      </ul>
      {/* <Navigation nav={}></Navigation> */}
      {/* <span>{data.site.siteMetadata.title}</span> */}
    </ThemeUIHeader>
  );
};

export default Header;
