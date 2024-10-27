import {defineConfig, type DefaultTheme} from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  title: 'Blog',
  head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
  description: '姜金甫的个人网站，前端学习，算法学习，GIS，Mapbox学习，Mapbox离线版本，Mapbox离线版本部署，Webgl,three.js',
})
