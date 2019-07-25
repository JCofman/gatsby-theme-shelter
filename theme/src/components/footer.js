/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Footer as ThemeUIFooter } from 'theme-ui';
import Logo from '../assets/logo_transparent.png';

const Footer = props => {
  return (
    <ThemeUIFooter {...props}>
      <img width={'250px'} sx={{}} src={Logo} alt="Logo" />
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>....</li>
        <li></li>
      </ul>
      <ul>
        <li>Adress</li>
        <li>Number</li>
        <li>Instagram</li>
        <li>....</li>
        <li></li>
      </ul>
      <div>google maps</div>
    </ThemeUIFooter>
  );
};

export default Footer;
