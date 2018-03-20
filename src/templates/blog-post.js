import React from 'react';
import Helmet from 'react-helmet';

import { Card, CardTitleNoLink, CardContentBlog } from '../styles/Card';
import Chips from '../styles/Misc';

export default function Template({
  data,
}) {
  const { markdownRemark: post } = data;
  return (
    <Card>
      <Helmet title={`My Blog -  ${post.frontmatter.title}`} />
      <div>
        <CardTitleNoLink>
          {post.frontmatter.title}
          <Chips>{post.frontmatter.author}</Chips>
        </CardTitleNoLink>
        <CardContentBlog>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </CardContentBlog>
      </div>
    </Card>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`;