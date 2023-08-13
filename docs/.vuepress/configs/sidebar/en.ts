import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = [
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
]