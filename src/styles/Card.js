import styled from 'styled-components';
import Link from 'gatsby-link'

const Card = styled.div`
  box-shadow: 2px 2px 3px black;
  border-radius: 10px;
  border: 1px solid black;
  padding: 0.9rem;
  margin: 0.6rem 0 0 0;
  width: inherit;
  &:hover {
    box-shadow: 3px 3px 4px black;
  }
  &:last-child {
    margin-bottom: 0.6rem;
  }
`;

const CardTitle = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardTitleNoLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.2rem;
`;

const CardDetail = styled.div`
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
`

const CardContent = styled.div`
  font-size: 1rem;
  display: flex;
  margin: 0.3rem 0 0.3rem 0;
`

const CardContentBlog = styled.div`
  font-size: 1.2rem;
  display: flex;
  margin: 0.3rem 0 0.3rem 0;
  justify-content: space-evenly;
`

export default {
  Card,
  CardTitle,
  CardDetail,
  CardContent,
  CardTitleNoLink,
  CardContentBlog
}