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
        title:'Create and explore your sn repository',
        link: ''
      },
      {
        title:'About on premise installation',
        link: ''
      },
      {
        title:'Getting started with sn and React',
        link: ''
      },
      {
        title:'Getting started with the .NET client',
        link: ''
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
        title:'What is CMS as a service',
        link: ''
      },
      {
        title:'sensenet as a service overview',
        link: '/concepts/introduction/04-what-is-snaas'
      },
      {
        title:'Content',
        link: '/concepts/basics'
      },
    ],
    link: '/concepts/introduction',
    img: '../images/concepts.png'
  },
  {
    name: 'guides',
    title: 'Admin-ui guides',
    description: 'Here you find how to work with the admin-ui. You can learn about the dashboards, command palette, etc.',
    links: [
      {
        title:'Dashboard',
        link: '/guides/customization/05-dashboard-customization'
      },
      {
        title:'Command palette',
        link: '/guides/search/03-command-palette'
      },
      {
        title:'Personal settings',
        link: '/guides/customization/00-personal-settings'
      },
      {
        title:'Managing users and groups',
        link: ''
      },
    ],
    link: '/guides/index',
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
