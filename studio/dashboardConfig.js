export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1ebf83bd54487bdd7b4567',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ccgu8qs3',
                  apiId: '1e24a92b-62fd-4450-84cf-b2a66d4ecfc6'
                },
                {
                  buildHookId: '5e1ebf835079a8dcc9847f25',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jwiun5ww',
                  apiId: '5f3065de-50ce-4cc8-a79d-b558bc52d777'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Robert250560/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jwiun5ww.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
