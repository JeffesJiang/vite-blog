import {defineConfig, type DefaultTheme} from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  title: '博客',
  head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
  description: '姜金甫的个人网站，前端学习，算法学习，GIS，Mapbox学习，Mapbox离线版本，Mapbox离线版本部署，Webgl,three.js',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/front-end/': [{base: '/front-end/', items: sidebarFrontend()}],
      '/back-end/': [{base: '/back-end/', items: sidebarBackend()}],
      '/gis/': [{base: '/gis/', items: sidebarGis()}
      ]
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/JeffesJiang/vite-blog'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Jeffes Jiang'
    },

    outline: {
      level: 'deep',
      label: '页面导航'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {text: '指南', link: '/guide/'},
    {text: '前端', link: '/front-end/introduction/', activeMatch: '/front-end/'},
    {text: '后端', link: '/back-end/database/', activeMatch: '/back-end/'},
    {text: '网络', link: '/network/'},
    {text: '算法', link: '/algorithm/'},
    {text: 'GIS', link: '/gis/mapbox', activeMatch: '/gis/'},
    {text: 'Webgl', link: '/webgl/'},
    {text: 'Docker', link: '/docker/'}
  ]
}

function sidebarFrontend(): DefaultTheme.SidebarItem[] {
  return [
    {text: '介绍', link: 'introduction/'},
    {text: 'HTML', link: 'html/'},
    {text: 'CSS', link: 'css/'},
    {text: 'JS基础', link: 'js/base'},
    {text: 'JS进阶', link: 'js/advanced'},
    {text: 'TS基础', link: 'ts/base'},
    {text: 'TS进阶', link: 'ts/advanced'},
    {text: 'Vue', link: 'vue/'},
    {
      text: 'Node',
      items: [
        {text: '配置', link: 'node/config/'}
      ]
    },
    {text: '前端性能', link: 'performance/'},
    {text: '面试', link: 'interview/'}
  ]
}

function sidebarBackend(): DefaultTheme.SidebarItem[] {
  return [
    {text: '数据库', link: 'database/'}
  ]
}

function sidebarGis(): DefaultTheme.SidebarItem[] {
  return [
    {text: 'mapbox', link: 'mapbox'}
  ]
}
