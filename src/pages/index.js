import React from 'react'
import Helmet from 'react-helmet'

import { Card, CardTitle, CardDetail, CardContent } from '../styles/Card';
import Chips from '../styles/Misc';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <Card key={post.id}>
              <CardTitle to={post.frontmatter.path}>
                {post.frontmatter.title}
                <Chips>
                  {post.frontmatter.author}
                </Chips>
              </CardTitle>
              <CardContent>
                {post.frontmatter.detail}
              </CardContent>
              <CardDetail>
                <Chips>{post.frontmatter.date}</Chips>
                <Chips>{post.frontmatter.tag}</Chips>
              </CardDetail>
            </Card>
          );
        })}
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false } }}
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node { 
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tag
            detail
            author
          }
        }
      }
    }
  }
`;
