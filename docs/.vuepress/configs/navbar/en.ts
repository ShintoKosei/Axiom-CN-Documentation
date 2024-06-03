import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
    { text: "Home", link: "/en/" },
    {
        text: 'Get Started🚀',
        children: [
            '/en/intro/intro.md',
            '/en/builder/intro.md',
            '/en/capabilities/intro.md',
            '/en/editor/intro.md',
            '/en/tools/intro.md',
            '/en/advanced/intro.md',
            ],
    },
]