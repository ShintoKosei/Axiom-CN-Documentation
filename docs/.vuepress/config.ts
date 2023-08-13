import { defineUserConfig } from "vuepress";
import { defaultTheme } from 'vuepress'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { shikiPlugin } from '@vuepress/plugin-shiki'
import {
    navbarZh,
    navbarEn,
    sidebarZh,
    sidebarEn,
  } from './configs/index.ts'

export default defineUserConfig({
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Axiom 中文文档',
            description: 'Minecraft Axiom MOD 公理模组中文文档。提供Axiom MOD官方文档页面的中文翻译，使在遇到难以解决的问题时有解决方案可寻',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Axiom Chinese Documentation',
            description: 'Minecraft Axiom MOD Chinese Documentation. Provides a Chinese translation of the official documentation page for the Axiom MOD, offering solutions when encountering challenging issues',
        },
    },
    head: [
        ['meta', { name: 'keywords', content: 'Axiom,MOD,AxiomMOD,Minecraft,MC,Wiki,Docs,公理,公理模组,文档,文库,百科,维基,我的世界' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        ["link", { rel: "icon", href: "/images/axiom_icon.svg" }],
    ],
    theme: defaultTheme({
        // 默认主题配置
        colorMode: 'dark',
        colorModeSwitch: false,
        home: '/',
        logo: "/images/axiom_icon.svg",
        locales: {
            '/': {
                selectLanguageName: '简体中文',
                navbar: navbarZh,
                sidebar: sidebarZh,
                lastUpdatedText: '最后更新',
                contributorsText: '贡献者列表',
                tip: '提示',
                warning: '警告',
                danger: '危险',
                notFound: [
                    '你来到了没有文字的荒野',
                    '页面不见了',
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',
                openInNewWindow: '在新窗口打开',
                toggleColorMode: '切换颜色模式',
                toggleSidebar: '切换侧边栏',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
            },

            '/en/': {
                selectLanguageName: 'English',
                navbar: navbarEn,
                sidebar: sidebarEn,
                editLinkText: 'Edit this page on GitHub',
            },
        },
    }),

    plugins: [
        searchProPlugin({
            // 配置选项
        }),
        shikiPlugin({
            // 配置项
            theme: 'github-dark',
        }),
    ],

    // Dev 配置项
    host: '0.0.0.0',
    port: 9364,
});