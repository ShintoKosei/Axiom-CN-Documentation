import { defineUserConfig } from "vuepress";
import { defaultTheme } from 'vuepress'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { shikiPlugin } from '@vuepress/plugin-shiki'
import {
    navbarZh,
    navbarZht,
    navbarEn,
    sidebarZh,
    sidebarZht,
    sidebarEn,
  } from './configs/index.ts'

export default defineUserConfig({
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Axiom 中文文档',
            description: 'Axiom 中文文档。提供Axiom 官方文档页面的中文翻译，使在遇到难以解决的问题时有解决方案可寻',
        },
        '/zht/': {
            lang: 'zh-hant',
            title: 'Axiom 中文文檔',
            description: 'Axiom 中文文檔。提供Axiom 官方文檔頁面的中文翻譯，使在遇到難以解決的問題時有解決方案可尋',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Axiom Chinese Documentation',
            description: 'Axiom Chinese Documentation. Provides a Chinese translation of the official documentation page for the Axiom, offering solutions when encountering challenging issues',
        },
    },
    head: [
        ['meta', { name: 'keywords', content: 'Axiom,MOD,AxiomMOD,Minecraft,MC,Wiki,Docs,公理,公理模组,文档,文库,百科,维基,我的世界' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        ["link", { rel: "icon", href: "/images/axiom_icon.svg" }],
        ['meta', { name: 'msvalidate.01', content: 'F0CB8A76E937BF0133C54D35F5D60107' }], //Bing
    ],
    theme: defaultTheme({
        // 默认主题配置
        colorMode: 'dark',
        colorModeSwitch: false,
        logo: "/images/axiom_icon.svg",
        repo: 'ShintoKosei/Axiom-CN-Documentation',
        editLink: false,
        contributors: false,
        
        locales: {
            '/': {
                selectLanguageName: '简体中文',
                home: '/',
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

            '/zht/': {
                selectLanguageName: '繁體中文',
                home: '/zht/',
                navbar: navbarZht,
                sidebar: sidebarZht,
                lastUpdatedText: '最後更新',
                contributorsText: '貢獻者列表',
                tip: '提示',
                warning: '警告',
                danger: '危險',
                notFound: [
                    '你來到了沒有文字的荒野',
                    '頁面不見了',
                    '這裡什麼都沒有',
                    '我們怎麼到這來了？',
                    '這是一個 404 頁面',
                    '看起來我們進入了錯誤的鏈接',
                ],
                backToHome: '返回首頁',
                openInNewWindow: '在新窗口打開',
                toggleColorMode: '切換顏色模式',
                toggleSidebar: '切換側邊欄',
                selectLanguageText: '選擇語言',
                selectLanguageAriaLabel: '選擇語言',
            },

            '/en/': {
                selectLanguageName: 'English',
                home: '/en/',
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