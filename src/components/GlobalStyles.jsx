import { Global, css } from '@emotion/react';
import fontStyles from '../css/fonts.css';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${fontStyles}

      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Open Sans', Arial, sans-serif;
      }

      ul,
      ol {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    `}
  />
);

export { GlobalStyles };
