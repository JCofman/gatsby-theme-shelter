/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  space: [
    0,
    '0.25rem',
    '0.5rem',
    '1rem',
    '2rem',
    '4rem',
    '8rem',
    '16rem',
    '32rem',
  ],

  fonts: {
    sans:
      '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    body:
      '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    heading: 'inherit',
    monospace:
      'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
  shadows: {
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
  },
  fontSizes: [
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem',
    '4rem',
    '4.5rem',
  ],
  lineHeights: {
    none: '1',
    tight: '1.25',
    relaxed: '1.625',
    loose: '2',
    body: '1.625',
    heading: '1.25',
  },
  letterSpacings: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  colors: {
    gray: ['#fafafa', '#ddd', '#333', '#22222D', '#e2e8f0'],
    background: '#fafafa',
    primary: '#02CA7A',
    secondary: '#25E778',
  },
  sizes: {
    default: '90vw',
    max: '800px',
  },
  styles: {
    Layout: {
      color: 'gray.2',
      fontFamily: 'body',
      fontSize: 1,
      lineHeight: 'body',
      backgroundColor: 'background',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%2302CA7A' fill-opacity='0.05' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E")`,
    },
    Header: {
      backgroundColor: 'primary',
      color: 'background',
      fontWeight: 'bold',
      margin: '0 auto',
      maxWidth: 'max',
      width: 'default',
    },

    Main: {
      margin: '0 auto',
      maxWidth: 'max',
      width: 'default',
      color: 'gray.',
    },
    Container: {
      padding: 3,
      marginTop: 80,
    },
    Footer: {
      backgroundColor: 'primary',
      color: 'background',
      fontWeight: 'bold',
      margin: '0 auto',
      maxWidth: 'max',
      paddingTop: 3,
      paddingBottom: 3,
      width: 'default',
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    h1: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 6,
      mt: 2,
    },
    h2: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 5,
      mt: 2,
    },
    h3: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 4,
      mt: 3,
    },
    h4: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 3,
    },
    h5: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 2,
    },
    h6: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 2,
      fontSize: 1,
    },
    code: {},
    pre: {},
    hr: {
      bg: 'muted',
      border: 0,
      height: '1px',
      m: 3,
    },
    ul: {
      borderColor: 'gray.0',
      listStyle: 'none',
      padding: 0,
    },
    li: {
      listStyle: 'none',
      padding: 2,
    },
    button: {
      fontSize: 'lg',
      padding: '2',
      color: 'white',
      boxShadow: 'md',
      fontWeight: 'bold',
      borderRadius: '0.5rem',
      backgroundColor: 'secondary',
    },
  },
};
