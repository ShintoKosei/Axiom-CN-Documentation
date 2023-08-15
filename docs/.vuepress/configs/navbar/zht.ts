import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZht: NavbarConfig = [
    { text: 首頁", link: "/" },
    {
        text: '快速開始🚀',
        children: [
            '/zht/intro/intro.md',
            '/zht/builder/intro.md',
            '/zht/capabilities/intro.md',
            '/zht/editor/intro.md',
            '/zht/tools/intro.md'],
    },
]