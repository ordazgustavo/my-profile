import { createGlobalStyle } from 'styled-components'

// eslint-disable-next-line
export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Ubuntu', sans-serif;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /**
    * CUSTOM
    */

  :root {
    --maastrischt-blue: #031926;
    --teal-blue: #468189;
    --green-sheen: #77aca2;
    --cambridge-blue: #9dbebb;
    --azureish-white: #dbe9ee;

    --light-grey: #595959;
    --dark-grey: #424242;
  }

  html {
    background: var(--maastrischt-blue);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    margin: 10px 0;
    color: var(--dark-grey);
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 18px;
  }

  p {
    font-size: 20px;
    color: var(--light-grey);
    line-height: 28px;
    margin: 20px 0;
  }

  strong {
    font-weight: bold;
    color: var(--dark-grey);
  }

  small {
    font-size: 12px;
  }

  a {
    font-size: 20px;
    color: var(--green-sheen);
    text-decoration: none;
    transition: color 0.5s ease;
  }
  a:hover {
    color: var(--teal-blue);
  }

  @media (max-width: 700px) {
    p {
      font-size: 16px;
    }
    a {
      font-size: 16px;
    }
  }
`
