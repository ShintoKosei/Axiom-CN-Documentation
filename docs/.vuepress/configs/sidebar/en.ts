import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = [
    '/en/intro/intro.md',
    {
        text: 'Builder Mode',
        collapsible: true,
        link: '/en/builder/intro.html',
        children: [
            '/en/builder/move.md',
            '/en/builder/clone.md',
            '/en/builder/stack.md',
            '/en/builder/smear.md',
            '/en/builder/extrude.md',
            '/en/builder/erase.md',
            '/en/builder/setupsymmetry.md',
        ],
    }, {
        text: 'Capabilities',
        collapsible: true,
        link: '/en/capabilities/intro.html',
        children: [
            '/en/capabilities/tinker.md',
            '/en/capabilities/noupdates.md',
            '/en/capabilities/forceplace.md',
            '/en/capabilities/replacemode.md',
            '/en/capabilities/bulldozer.md',
        ],
    }, {
        text: 'Editor Mode',
        collapsible: true,
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
            '/en/editor/toolpresets.md',
        ],
    }, {
        text: 'Tools',
        collapsible: true,
        link: '/en/tools/intro.html',
        children: [
            {
                text: 'Selection Tools',
                collapsible: true,
                link: '/en/tools/selection/intro.html',
                children: [
                    '/en/tools/selection/boxselect.md',
                    '/en/tools/selection/magicselect.md',
                    '/en/tools/selection/freehandselect.md',
                ],
            }, {
                text: 'Painting Tools',
                collapsible: true,
                link: '/en/tools/painting/intro.html',
                children: [
                    '/en/tools/painting/painter.md',
                    '/en/tools/painting/noisepainter.md',
                    '/en/tools/painting/biomepainter.md',
                    '/en/tools/painting/clentaminator.md',
                    '/en/tools/painting/gradientpainter.md',
                    '/en/tools/painting/scriptbrush.md',
                ],
            }, {
                text: 'Drawing Tools',
                collapsible: true,
                link: '/en/tools/drawing/intro.html',
                children: [
                    '/en/tools/drawing/freehanddraw.md',
                    '/en/tools/drawing/sculptdraw.md',
                    '/en/tools/drawing/rock.md',
                    '/en/tools/drawing/weld.md',
                    '/en/tools/drawing/melt.md',
                    '/en/tools/drawing/text.md',
                    '/en/tools/drawing/shape.md',
                ],
            }, {
                text: 'Heightmap Tools',
                collapsible: true,
                link: '/en/tools/heightmap/intro.html',
                children: [
                    '/en/tools/heightmap/elevation.md',
                    '/en/tools/heightmap/slope.md',
                ],
            }, {
                text: 'Manipulation Tools',
                collapsible: true,
                link: '/en/tools/manipulation/intro.html',
                children: [
                    '/en/tools/manipulation/smooth.md',
                    '/en/tools/manipulation/distort.md',
                    '/en/tools/manipulation/roughen.md',
                    '/en/tools/manipulation/shatter.md',
                    '/en/tools/manipulation/extrude.md',
                    '/en/tools/manipulation/modify.md',
                ],
            },
            '/en/tools/ruler.md',
            '/en/tools/path.md',
        ],
    }, {
            text: 'Advanced',
            collapsible: true,
            link: '/en/advanced/intro.html',
            children: [
                '/en/advanced/commands.md',
                '/en/advanced/configuration.md',
            ],
        },
]