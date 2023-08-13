import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
    { text: "首页", link: "/zh/" },
    {
        text: '快速开始🚀',
        children: [
            '/zh/intro/intro.md',
            '/zh/builder/intro.md',
            '/zh/capabilities/intro.md',
            '/zh/editor/intro.md',
            '/zh/tools/intro.md'],
    },
]