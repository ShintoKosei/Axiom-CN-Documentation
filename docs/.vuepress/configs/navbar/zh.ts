import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
    { text: "首页", link: "/" },
    {
        text: '快速开始🚀',
        children: [
            '/intro/intro.md',
            '/builder/intro.md',
            '/capabilities/intro.md',
            '/editor/intro.md',
            '/tools/intro.md'
            '/advanced/intro.md'],
    },
]