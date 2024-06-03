import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = [
  '/intro/intro.md', //介绍
  {
    text: '建造者模式',
    collapsible: true,
    link: '/builder/intro.html',
    children: [
      '/builder/move.md',
      '/builder/clone.md',
      '/builder/stack.md',
      '/builder/smear.md',
      '/builder/extrude.md',
      '/builder/erase.md',
      '/builder/setupsymmetry.md',
    ],
  },
  {
    text: '功能',
    collapsible: true,
    link: '/capabilities/intro.html',
    children: [
      '/capabilities/tinker.md',
      '/capabilities/noupdates.md',
      '/capabilities/forceplace.md',
      '/capabilities/replacemode.md',
      '/capabilities/bulldozer.md',
    ],
  },
  {
    text: '编辑器模式',
    collapsible: true,
    link: '/editor/intro.html',
    children: [
      '/editor/mainmenubar.md',
      '/editor/clipboardandplacements.md',
      '/editor/selections.md',
      '/editor/gizmos.md',
      '/editor/blueprints.md',
      '/editor/views.md',
      '/editor/toolmasks.md',
      '/editor/activeblock.md',
      '/editor/targetinfo.md',
      '/editor/history.md',
      '/editor/worldproperties.md',
      '/editor/toolpresets.md',
    ],
  },
  {
    text: '工具',
    collapsible: true,
    link: '/tools/intro.html',
    children: [
      {
        text: '选择工具',
        collapsible: true,
        link: '/tools/selection/intro.md',
        children: [
          '/tools/selection/boxselect.md',
          '/tools/selection/magicselect.md',
          '/tools/selection/freehandselect.md',
        ],
      },
      {
        text: '绘画工具',
        collapsible: true,
        link: '/tools/painting/intro.md',
        children: [
          '/tools/painting/painter.md',
          '/tools/painting/noisepainter.md',
          '/tools/painting/biomepainter.md',
          '/tools/painting/clentaminator.md',
          '/tools/painting/gradientpainter.md',
          '/tools/painting/scriptbrush.md',
        ],
      },
      {
        text: '绘图工具',
        collapsible: true,
        link: '/tools/drawing/intro.md',
        children: [
          '/tools/drawing/freehanddraw.md',
          '/tools/drawing/sculptdraw.md',
          '/tools/drawing/rock.md',
          '/tools/drawing/weld.md',
          '/tools/drawing/melt.md',
          '/tools/drawing/text.md',
          '/tools/drawing/shape.md',
        ],
      },
      {
        text: '高度工具',
        collapsible: true,
        link: '/tools/heightmap/intro.md',
        children: [
          '/tools/heightmap/elevation.md',
          '/tools/heightmap/slope.md',
        ],
      },
      {
        text: '操作工具',
        collapsible: true,
        link: '/tools/manipulation/intro.md',
        children: [
          '/tools/manipulation/smooth.md',
          '/tools/manipulation/distort.md',
          '/tools/manipulation/roughen.md',
          '/tools/manipulation/shatter.md',
          '/tools/manipulation/extrude.md',
          '/tools/manipulation/modify.md',
        ],
      },
      '/tools/ruler.md',
      '/tools/path.md',
    ],
  },
  {
    text: '高级',
    collapsible: true,
    link: '/advanced/intro.html',
    children: ['/advanced/commands.md', '/advanced/configuration.md'],
  },
]
