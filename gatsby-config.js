module.exports = {
  siteMetadata: {
    title: 'My Blog',
    author: 'Ratnadeep Bhattacharyya',
    siteUrl: 'demo.example.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidht: 750,
                linkImagesToOriginal: false,
              },
            },
            {
              resolve: 'gatsby-remark-responsive-iframe',
            },
            'gatsby-remark-prismjs',
            'gatsby-remark-copy-linked-files',
            'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
  ],
};
