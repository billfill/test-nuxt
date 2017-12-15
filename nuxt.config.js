let routerBase;
switch(process.env.DEPLOY_ENV){
  case 'GH_PAGES':
    routerBase = {
      router: {
        base: '/test-nuxt/'
      }
    }
    break;
  case 'udn':
    routerBase = {
      router: { 
        base: '/upf/newmedia/2017_data/test-nuxt/'
      }
    }
    break;
}
module.exports = {
  head: {
    title: '這是一個練習',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      // for Facebook
      // (static) don't modified
      {	property: "og:type", content: "website"},
      {	property: "og:site_name", content: "聯合報"},
      { property: "fb:admins", content: "671188086"},
      {	property: "fb:app_id", content: "1010324812347164"},
      {	property: "article:author", content: "https://www.facebook.com/udnplus"},
      {	property: "article:publisher", content: "https://www.facebook.com/udnplus"},
      // (static) End   -------
      { 
      	property: "og:title",
      	content: "讓家準備好 與你一起變老"
      },
      {	
      	property: "og:url",
      	content: "https://udn.com/upf/newmedia/2017_data/elderhome/index.html"
      },
      {	
      	property: "og:image",
      	content: "https://udn.com/upf/newmedia/2017_data/elderhome/meta.jpg"
      },
      {	
      	property: "og:description",
      	content: "大人樂活撇步，報你知！國健署統計，每年「三個老人一個跌」。 打造適合高齡居住的「大人宅」，成為迎接高齡社會關鍵。"
      },
      // for Google 
      { name: "copyright", content: "聯合報"},
      {
      	name: "application-name",
      	content: "讓家準備好 與你一起變老"
      },
      {
      	name: "description",
      	content: "大人樂活撇步，報你知！國健署統計，每年「三個老人一個跌」。 打造適合高齡居住的「大人宅」，成為迎接高齡社會關鍵。"
      },
    ],
    link: [
      	{ 
        	rel: 'icon',
        	type: 'image/ico',
        	href: 'https://udn.com/upf/newmedia/image/udn-icon.ico' 
        },
      	{ 	
      		rel: "stylesheet",
      		href: "https://udn.com/upf/newmedia/css/font-awesome.min.css"
      	},
      	{
      		rel: "stylesheet",
      		href: "https://udn.com/upf/newmedia/css/bootstrap.min.css"
      	},
      	{
      		rel: "stylesheet",
      		href: "https://udn-newmedia.github.io/udn-newmedia-css/css/style.css"
      	}
    ],
    script: [
    	{
    		id: "etu-recommender",
    		type: "text/javascript",
    		innerHTML: `
				var erUrlPrefix='https://rec.udn.com/';
				var _qevents = _qevents || [];
				_qevents.push({
					group:'udn',
					cid : 'udn_soft',
					act : 'view',
					cat : ['news','cms','','',''],
					uid : '',
					bid : '',
					pid : '',
					page:'ARTICLE',
					Rank_cat:'10',
					Rank_pid:'10',
					title: document.querySelector('title').innerHTML,
					tag:[],
					referral: document.referrer
				});
				(function() {
					var er = document.createElement('script');
					er.type = 'text/javascript';
					er.async = true;
					er.src = erUrlPrefix + 'er.js?' + (new Date().getTime());
					var currentJs = document.getElementById('etu-recommender');
					currentJs.parentNode.insertBefore(er, currentJs);
				})();
    		`
    	},
      {
        src: 'https://cdn.jsdelivr.net/npm/vue'
      }
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },
  loading: { color: '#3B8070' },
  build: {
    publicPath: '/_nuxt/',
    vendor: ['axios', 'babel-polyfill'],
    postcss: [
	    require('postcss-nested')(),
	    require('postcss-responsive-type')(),
	    require('postcss-hexrgba')(),
	    require('autoprefixer')({
	        browsers: [
		        "> 1%",
		        "last 5 versions",
		        "not ie <= 8"
	        ]
      	})      
    ],
  },
  plugins: [
    { 
    	src: '~/plugins/ga.js',
    	ssr: false
    },
    {
    	src: '~/plugins/fb.js',
    	ssr: false
    }
  ],
  ...routerBase
}
