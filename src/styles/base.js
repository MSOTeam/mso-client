// base-styles.js
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

const baseStyles = () => injectGlobal`
  ${reset}
  * {
    font-family: 'Nunito Sans', sans-serif !important;
    font-size: 14px;
  }
  .ReactModal__Body--open{
    overflow: hidden;
  }
`;

export default baseStyles;
