import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = [
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
]