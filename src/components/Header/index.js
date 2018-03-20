import React from 'react'
import Link from 'gatsby-link'

import Container from '../../styles/Container'

// const Header = () => (
//   <div
//     style={{
//       background: 'rgb(146, 153, 163)',
//       marginBottom: '1.45rem',
//       paddingBottom: '1rem'
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1rem 1rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//             float: 'left'
//           }}
//         >
//           Gatsby
//         </Link>
//       </h1>        
//     </div>
//     <Link
//       to="/"
//       style={{
//         color: 'white',
//         textDecoration: 'none',
//         padding: '1.45rem 1.45rem'
//       }}
//     >
//       Home
//     </Link>
//     <Link
//       to="/profile"
//       style={{
//         color: 'white',
//         textDecoration: 'none',
//         padding: '1rem 1rem'
//       }}
//     >
//       Profile
//     </Link>
//   </div>
// )

import styled from 'styled-components';

const HeaderStyle = styled.div`
  background-color: rgb(146, 153, 163);
  height: 9vh;
`;

const HeaderBrand = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.9rem 1rem 0 0;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: white;
  margin: 9px 3px 0 3px;
  &:hover {
    border: 1px solid white;
    border-radius: 2px;
    background: black;
  }
`;

const Header = () => (
  <HeaderStyle>
    <Container>
      <HeaderBrand to="/">
        My Blog
      </HeaderBrand>
      <LinkTo to="/">
        Home
      </LinkTo>
      <LinkTo to="/profile">
        Profile
      </LinkTo>
    </Container>
  </HeaderStyle>
)

export default Header
