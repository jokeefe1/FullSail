import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}



/* Custom Global Styles  */

* {
	box-sizing: border-box;
}

html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
}

img {
  background-repeat: no-repeat;
  /* width: auto; */
}

h1 {
    font-size: 2.4rem;
}

h2 {
    font-size: 2.2rem;
}

h3 {
    font-size: 1.8rem;
}

h4 {
    font-size: 1.6rem;
}

h5 {
    font-size: 1.2rem;
}

h6 {
    font-size: 1rem;
}

`;

export default GlobalStyle;

//Container Styles

export const ContainerHead = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const ContainerLarge = styled.div`
    justify-content: space-between;
    max-width: 1070px;
    margin: 0 auto;
`;


