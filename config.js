const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://docs.sensenet.com",
		"gaTrackingId": null
	},
	"header": {
    "logo": "",
		"logoLink": "/",
		"title": "Documentation",
		"githubUrl": "https://github.com/SenseNet/sensenet",
		"helpUrl": "https://gitter.im/SenseNet/sensenet",
		"tweetText": "Check out the sensenet docs for developers by @sensenet https://docs.sensenet.com",
		"links": [
      { "text": "API Docs", "link": "/api-docs/basic-concepts"},
      { "text": "Example Apps", "link": "/example-apps/index"},
      { "text": "Tutorials", "link": "/tutorials/index"},
      { "text": "Concepts", "link": "/concepts/index"},
      { "text": "Admin-ui Guides", "link": "/guides/index"},
      { "text": "Integrations", "link": "/integrations/index"}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"links": [
      { "text": "Contact", "link": "https://sensenet.com/contact"},
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
		"docsLocation": "https://github.com/herflis/docs-temp/tree/master/content",
		"favicon": "https://www.sensenet.com/Root/Skins/sncom/images/favicon-32x32.png"
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
