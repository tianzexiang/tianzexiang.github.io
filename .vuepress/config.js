var title = 'boya blog'
module.exports = {
  theme: 'reco',
  title,
  description: '你经历的每一天日常，都是奇迹，今天，又一个奇迹发生了',

  // 插件
  plugins: [


    ['@vuepress-reco/kan-ban-niang', {
      theme: ['haru2','shizuku', 'haru1',  'haruto', 'koharu', 'wanko', 'z16', 'blackCat', 'whiteCat'],
      messages: {
        welcome: '欢迎来到 ——— boya blog ( σ\'ω\')σ !',
        home: '欢迎回来~(≧∇≦)ﾉ!!',
        close: '下次再来哦~ (>▽<) ',
        theme: '好吧...希望你能喜欢我的其他小伙伴 つ﹏⊂',
        info: '想深入~了解我吗 (′▽`〃)~~'
      },
      modelStyle: {
        left: '90px',
        bottom: '0',
        opacity: '0.8'
      },
      messageStyle: {
        left: '60px',
        bottom: '190px'
      },
      btnStyle: {
        left: '60px',
        bottom: '20px'
      }
    }],

    [
      'cursor-effects',
      {
        size: 2,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
  ],

  themeConfig: {
    type: 'blog',
    mode: 'dark',
    author: 'boya',
    authorAvatar: '/avatar.jpg',
    head: [
      ['link', {
        rel: 'icon',
        href: '/hero.png'
      }],
      ['meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }]
    ],
    logo: '/hero.png',
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认文案 “标签”
      }
    },

    // 顶部导航
    nav: [{
        text: 'Home',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: "reco-date"
      },
    ],

    // 友情链接
    friendLink: [{
      title: 'vuepress-theme-reco',
      desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      link: 'https://vuepress-theme-reco.recoluan.com'
    }, ]
  },


}