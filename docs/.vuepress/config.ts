import { defineUserConfig } from "vuepress";
import { defaultTheme } from 'vuepress'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { shikiPlugin } from '@vuepress/plugin-shiki'

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
                navbar: [
                    { text: "首页", link: "/" },
                    {
                        text: '快速开始🚀',
                        children: ['/zh/intro/intro.md', '/zh/builder/intro.md', '/zh/capabilities/intro.md', '/zh/editor/intro.md', '/zh/tools/intro.md'],
                    },
                ],
                sidebar: [
                    '/zh/intro/intro.md', //介绍
                    '/zh/builder/intro.md', //建筑模式
                    {
                        text: '功能',
                        link: '/zh/capabilities/intro.html',
                        children: [
                            '/zh/capabilities/tinker.md',
                            '/zh/capabilities/noupdates.md',
                            '/zh/capabilities/forceplace.md',
                            '/zh/capabilities/replacemode.md',
                            '/zh/capabilities/bulldozer.md',
                            '/zh/capabilities/enhancedflight.md',
                        ],
                    }, {
                        text: '编辑器模式',
                        link: '/zh/editor/intro.html',
                        children: [
                            '/zh/editor/mainmenubar.md',
                            '/zh/editor/clipboardandplacements.md',
                            '/zh/editor/selections.md',
                            '/zh/editor/gizmos.md',
                            '/zh/editor/blueprints.md',
                            '/zh/editor/views.md',
                            '/zh/editor/toolmasks.md',
                            '/zh/editor/activeblock.md',
                            '/zh/editor/targetinfo.md',
                            '/zh/editor/history.md',
                            '/zh/editor/worldproperties.md',
                        ],
                    }, {
                        text: '工具',
                        link: '/zh/tools/intro.html',
                        children: [
                            {
                                // text: 'github',
                                link: '/zh/tools/selection/intro.md',
                                children: [
                                    '/zh/tools/selection/boxselect.md',
                                    '/zh/tools/selection/magicselect.md',
                                    '/zh/tools/selection/freehandselect.md',
                                ],
                            }, {
                                link: '/zh/tools/painting/intro.md',
                                children: [
                                    '/zh/tools/painting/painter.md',
                                    '/zh/tools/painting/noisepainter.md',
                                    '/zh/tools/painting/biomepainter.md',
                                    '/zh/tools/painting/clentaminator.md',
                                ],
                            }, {
                                link: '/zh/tools/drawing/intro.md',
                                children: [
                                    '/zh/tools/drawing/freehanddraw.md',
                                    '/zh/tools/drawing/sculptdraw.md',
                                    '/zh/tools/drawing/rock.md',
                                    '/zh/tools/drawing/weld.md',
                                    '/zh/tools/drawing/melt.md',
                                    '/zh/tools/drawing/text.md',
                                ],
                            }, {
                                link: '/zh/tools/heightmap/intro.md',
                                children: [
                                    '/zh/tools/heightmap/elevation.md',
                                    '/zh/tools/heightmap/flatten.md',
                                    '/zh/tools/heightmap/slope.md',
                                ],
                            }, {
                                link: '/zh/tools/manipulation/intro.md',
                                children: [
                                    '/zh/tools/manipulation/smooth.md',
                                    '/zh/tools/manipulation/distort.md',
                                    '/zh/tools/manipulation/roughen.md',
                                    '/zh/tools/manipulation/shatter.md',
                                    '/zh/tools/manipulation/extrude.md',
                                ],
                            },
                            '/zh/tools/ruler.md',
                        ],
                    },


                ],
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
                navbar: [
                    { text: "Home", link: "/en/" },
                    {
                        text: 'Get Started🚀',
                        children: ['/en/intro/intro.md', '/en/builder/intro.md', '/en/capabilities/intro.md', '/en/editor/intro.md', '/en/tools/intro.md'],
                    },
                ],
                sidebar: [
                    '/en/intro/intro.md',
                    '/en/builder/intro.md',
                    {
                        text: 'Capabilities',
                        link: '/en/capabilities/intro.html',
                        children: [
                            '/en/capabilities/tinker.md',
                            '/en/capabilities/noupdates.md',
                            '/en/capabilities/forceplace.md',
                            '/en/capabilities/replacemode.md',
                            '/en/capabilities/bulldozer.md',
                            '/en/capabilities/enhancedflight.md',
                        ],
                    }, {
                        text: 'Editor Mode',
                        link: '/en/editor/intro.html',
                        children: [
                            '/en/editor/mainmenubar.md',
                            '/en/editor/clipboardandplacements.md',
                            '/en/editor/selections.md',
                            '/en/editor/gizmos.md',
                            '/en/editor/blueprints.md',
                            '/en/editor/views.md',
                            '/en/editor/toolmasks.md',
                            '/en/editor/activeblock.md',
                            '/en/editor/targetinfo.md',
                            '/en/editor/history.md',
                            '/en/editor/worldproperties.md',
                        ],
                    }, {
                        text: 'Tool',
                        link: '/en/tools/intro.html',
                        children: [
                            {
                                // text: 'github',
                                link: '/en/tools/selection/intro.html',
                                children: [
                                    '/en/tools/selection/boxselect.md',
                                    '/en/tools/selection/magicselect.md',
                                    '/en/tools/selection/freehandselect.md',
                                ],
                            }, {
                                link: '/en/tools/painting/intro.html',
                                children: [
                                    '/en/tools/painting/painter.md',
                                    '/en/tools/painting/noisepainter.md',
                                    '/en/tools/painting/biomepainter.md',
                                    '/en/tools/painting/clentaminator.md',
                                ],
                            }, {
                                link: '/en/tools/drawing/intro.html',
                                children: [
                                    '/en/tools/drawing/freehanddraw.md',
                                    '/en/tools/drawing/sculptdraw.md',
                                    '/en/tools/drawing/rock.md',
                                    '/en/tools/drawing/weld.md',
                                    '/en/tools/drawing/melt.md',
                                    '/en/tools/drawing/text.md',
                                ],
                            }, {
                                link: '/en/tools/heightmap/intro.html',
                                children: [
                                    '/en/tools/heightmap/elevation.md',
                                    '/en/tools/heightmap/flatten.md',
                                    '/en/tools/heightmap/slope.md',
                                ],
                            }, {
                                link: '/en/tools/manipulation/intro.html',
                                children: [
                                    '/en/tools/manipulation/smooth.md',
                                    '/en/tools/manipulation/distort.md',
                                    '/en/tools/manipulation/roughen.md',
                                    '/en/tools/manipulation/shatter.md',
                                    '/en/tools/manipulation/extrude.md',
                                ],
                            },
                            '/en/tools/ruler.md',
                        ],
                    },


                ],
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