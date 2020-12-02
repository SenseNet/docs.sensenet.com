const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://docs.sensenet.com",
		"gaTrackingId": process.env.GA_TRACKING_ID
	},
	"header": {
    "logo": "",
		"logoLink": "/",
		"title": `<div style="font-family: Roboto"><strong style="font-family: Roboto">sense</strong>net</div><div style="font-family: 'Roboto';font-size:16px">docs</div>`,
		"githubUrl": "https://github.com/SenseNet/sensenet",
		"helpUrl": "https://gitter.im/SenseNet/sensenet",
		"tweetText": "Check out the sensenet docs for developers by @sensenet https://docs.sensenet.com",
		"links": [
      { "text": "API Docs", "link": "/api-docs/basic-concepts", "name": "api-docs"},
      { "text": "Example Apps", "link": "/example-apps", "name": "example-apps"},
      { "text": "Tutorials", "link": "/tutorials/getting-started/getting-started-dotnet", "name": "tutorial"},
      { "text": "Concepts", "link": "/concepts/introduction", "name": "concepts"},
      { "text": "Admin-ui Guides", "link": "/guides/getting-started", "name": "guides"},
      { "text": "Integrations", "link": "/", "name": "integrations"}
		],
		"search": {
			"enabled": true,
			"indexName": "Docs",
      "algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.GATSBY_ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"links": [
      { "text": "Contact", "link": "https://sensenet.com/contact-us"},
      { "text": "Blog", "link": "https://blog.sensenet.com"},
      { "text": "Community", "link": "https://community.sensenet.com"},
      { "text": "Careers", "link": "https://jobs.sensenet.com"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "sensenet | Documentation",
		"description": "sensenet Documentation for developers",
		"ogImage": null,
		"docsLocation": "https://github.com/sensenet/docs.sensenet.com/tree/master/content",
		"favicon": "https://www.sensenet.com/favicon-32x32.png"
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "sensenet Documentation",
			"short_name": "sndocs",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/images/sensenet-logo.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
