const content = [
  {
    name: 'api-docs',
    title: 'API docs',
    description: 'Learn about API clients and frameworks',
    links: [],
    link: '/api-docs/index',
    img: '../images/api-docs.png'
  },
  {
    name: 'example-apps',
    title: 'Example apps',
    description: 'Discover example apps',
    links: [
      {
        title:'Image gallery',
        link: '/example-apps#imagegallery'
      },
      {
        title:'Todo app',
        link: '/example-apps#todoapp'
      },
      {
        title:'DMS demo',
        link: '/example-apps#dmsdemo'
      },
      {
        title:'Memo app',
        link: '/example-apps#memoeditor'
      },
    ],
    link: '/example-apps',
    img: '../images/example-apps.png'
  },
  {
    name: 'tutorials',
    title: 'Tutorials',
    description: 'Get a jump start with our tutorials',
    links: [
      {
        title:'Getting started with sensenet and React',
        link: '/tutorials/getting-started/getting-started-with-react'
      },
      {
        title:'Getting started with sensenet and Next.js',
        link: '/tutorials/getting-started/getting-started-nextjs'
      },
      {
        title:'Getting started with the .NET client',
        link: '/tutorials/getting-started/getting-started-dotnet'
      },
      {
        title:'Authentication from a React application',
        link: '/tutorials/authentication/how-to-authenticate-react'
      },
    ],
    link: '',
    img: '../images/tutorials.png'
  },
  {
    name: 'concepts',
    title: 'Concepts',
    description: 'This is the place, where you can learn about sensenet basics.',
    links: [
      {
        title:'What is headless CMS',
        link: '/concepts/introduction/02-what-is-headless-cms'
      },
      {
        title:'sensenet as a service overview',
        link: '/concepts/introduction/04-what-is-snaas'
      },
      {
        title:'sensenet basics',
        link: '/concepts/basics'
      },
      {
        title:'Content repository',
        link: '/concepts/basics/02-content-tree'
      },
    ],
    link: '/concepts/introduction',
    img: '../images/concepts.png'
  },
  {
    name: 'guides',
    title: 'Admin-ui guides',
    description: 'Here you find how to work with the admin-ui. You can learn about the dashboards, searching, etc.',
    links: [
      {
        title:'Content management',
        link: '/guides/content-management'
      },
      {
        title:'Search',
        link: '/guides/search'
      },
      {
        title:'Versioning',
        link: '/guides/content-management/08-versioning'
      },
      {
        title:'Managing users and groups',
        link: '/guides/users-and-groups'
      },
    ],
    link: '/guides/getting-started',
    img: '../images/guides.png'
  },
  {
    name: 'usecases',
    title: 'Use cases and best practices',
    description: 'Try it yourself!',
    links: [
      {
        title:'1000 content demo',
        link: ''
      },
      {
        title:'25000 content demo',
        link: ''
      },
    ],
    link: '',
    img: '../images/best-practice.png'
  },
]

module.exports = content;
