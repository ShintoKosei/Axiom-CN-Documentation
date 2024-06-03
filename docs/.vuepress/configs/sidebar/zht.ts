import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZht: SidebarConfig = [
  '/zht/intro/intro.md', //介绍
  '/zht/builder/intro.md', //建造者模式
  {
    text: '功能',
    collapsible: true,
    link: '/zht/capabilities/intro.html',
    children: [
      '/zht/capabilities/tinker.md',
      '/zht/capabilities/noupdates.md',
      '/zht/capabilities/forceplace.md',
      '/zht/capabilities/replacemode.md',
      '/zht/capabilities/bulldozer.md',
      '/zht/capabilities/enhancedflight.md',
    ],
  },
  {
    text: '編輯器模式',
    collapsible: true,
    link: '/zht/editor/intro.html',
    children: [
      '/zht/editor/mainmenubar.md',
      '/zht/editor/clipboardandplacements.md',
      '/zht/editor/selections.md',
      '/zht/editor/gizmos.md',
      '/zht/editor/blueprints.md',
      '/zht/editor/views.md',
      '/zht/editor/toolmasks.md',
      '/zht/editor/activeblock.md',
      '/zht/editor/targetinfo.md',
      '/zht/editor/history.md',
      '/zht/editor/worldproperties.md',
    ],
  },
  {
    text: '工具',
    collapsible: true,
    link: '/zht/tools/intro.html',
    children: [
      {
        text: '選擇工具',
        collapsible: true,
        link: '/zht/tools/selection/intro.md',
        children: [
          '/zht/tools/selection/boxselect.md',
          '/zht/tools/selection/magicselect.md',
          '/zht/tools/selection/freehandselect.md',
        ],
      },
      {
        text: '繪畫工具',
        collapsible: true,
        link: '/zht/tools/painting/intro.md',
        children: [
          '/zht/tools/painting/painter.md',
          '/zht/tools/painting/noisepainter.md',
          '/zht/tools/painting/biomepainter.md',
          '/zht/tools/painting/clentaminator.md',
        ],
      },
      {
        text: '繪圖工具',
        collapsible: true,
        link: '/zht/tools/drawing/intro.md',
        children: [
          '/zht/tools/drawing/freehanddraw.md',
          '/zht/tools/drawing/sculptdraw.md',
          '/zht/tools/drawing/rock.md',
          '/zht/tools/drawing/weld.md',
          '/zht/tools/drawing/melt.md',
          '/zht/tools/drawing/text.md',
        ],
      },
      {
        text: '高度工具',
        collapsible: true,
        link: '/zht/tools/heightmap/intro.md',
        children: [
          '/zht/tools/heightmap/elevation.md',
          '/zht/tools/heightmap/flatten.md',
          '/zht/tools/heightmap/slope.md',
        ],
      },
      {
        text: '操作工具',
        collapsible: true,
        link: '/zht/tools/manipulation/intro.md',
        children: [
          '/zht/tools/manipulation/smooth.md',
          '/zht/tools/manipulation/distort.md',
          '/zht/tools/manipulation/roughen.md',
          '/zht/tools/manipulation/shatter.md',
          '/zht/tools/manipulation/extrude.md',
        ],
      },
      '/zht/tools/ruler.md',
    ],
  },
]
