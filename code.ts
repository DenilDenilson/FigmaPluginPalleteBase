// This plugin creates 5 rectangles on the screen.
const numberOfRectangles = 9

const grayPallete = [
  {
    name: 'gray/gray-100',
    color: {r:0.969, g:0.969, b:0.969} // #F7F7F7
  },
  {
    name: 'gray/gray-200',
    color: {r:0.937, g:0.937, b:0.937} // #EFEFEF
  },
  {
    name: 'gray/gray-300',
    color: {r:0.875, g:0.875, b:0.875} // #DFDFDF
  },
  {
    name: 'gray/gray-400',
    color: {r:0.792, g:0.792, b:0.792} // #CACACA
  },
  {
    name: 'gray/gray-500',
    color: {r:0.576, g:0.576, b:0.576} // #939393
  },
  {
    name: 'gray/gray-600',
    color: {r:0.420, g:0.420, b:0.420} // #6B6B6B
  },
  {
    name: 'gray/gray-700',
    color: {r:0.302, g:0.302, b:0.302} // #4D4D4D
  },
  {
    name: 'gray/gray-800',
    color: {r:0.212, g:0.212, b:0.212} // #363636
  },
  {
    name: 'gray/gray-900',
    color: {r:0.145, g:0.145, b:0.145} // #252525
  }
]

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

const nodes: SceneNode[] = [];
grayPallete.forEach((color, index) => {
  const rect = figma.createRectangle();
  
  rect.x = index * 60;
  rect.resize(60, 60)
  rect.fills = [{type: 'SOLID', color: color.color}];

  const paintStyle = figma.createPaintStyle()

  paintStyle.name = color.name;
  paintStyle.paints = [{type: 'SOLID', color: color.color}];

  figma.currentPage.appendChild(rect);
  nodes.push(rect);
})


// figma.currentPage.selection = nodes;
// figma.viewport.scrollAndZoomIntoView(nodes);


// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
