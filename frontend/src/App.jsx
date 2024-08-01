import React from 'react'
import { MultiSeriesLineLoad, MultiSeriesLineDraw } from './charts/MultiSeriesLine'
import { ZoomableSunburstLoad, ZoomableSunburstDraw } from './charts/ZoomableSunburst'
import { BarchartHorizontalLoad, BarchartHorizontalDraw } from './charts/BarchartHorizontal'
import { BollingerChartLoad, BollingerChartDraw } from './charts/BollingerChart'
import { SankeyChartLoad, SankeyChartDraw } from './charts/SankeyChart'
import { StackedSteamgraphLoad, StackedSteamgraphDraw } from './charts/StackedSteamgraph'
import { TreemapLoad, TreemapDraw } from './charts/Treemap'
import { CirclePackingLoad, CirclePackingDraw } from './charts/CirclePacking'
import { CollapsibleTreeLoad, CollapsibleTreeDraw } from './charts/CollapsibleTree'

import { D3Chart } from './D3Chart'


function App() {

  const charts = [
    {
      id: 'BarchartHorizontal', 
      options: {
        x: d => d.frequency,
        y: d => d.letter,
        xFormat: "%",
        xLabel: "Frequency →",
        color: "steelblue"
      },
      chartLoadFunction: BarchartHorizontalLoad,
      chartDrawFunction: BarchartHorizontalDraw,
      chartResizeFunction: BarchartHorizontalDraw,
    },
    {
      id: 'MultiSeriesLine',
      options: {
        x: d => d.date,
        y: d => d.unemployment,
        z: d => d.division,
        yLabel: "↑ Unemployment (%)",
        color: "steelblue",
        voronoi: false // if true, show Voronoi overlay
      },
      chartLoadFunction: MultiSeriesLineLoad,
      chartDrawFunction: MultiSeriesLineDraw,
      chartResizeFunction: MultiSeriesLineDraw,
    },
    // {
    //   id: 'ZoomableSunburst',
    //   chartLoadFunction: ZoomableSunburstLoad,
    //   chartDrawFunction: ZoomableSunburstDraw,
    //   chartResizeFunction: ZoomableSunburstDraw,
    // },
    {
      id: 'BollingerChart',
      options: {
        x: d => d.date,
        y: d => d.close,
        N: 24, // number of periods, per input above (in Observables)
        K: 2.5, // number of standard deviations, per input above (in Observables)
        yLabel: "↑ Daily close ($)",
      },
      chartLoadFunction: BollingerChartLoad,
      chartDrawFunction: BollingerChartDraw,
      chartResizeFunction: BollingerChartDraw,
    },
    {
      id: 'SankeyChart',
      options: {
        nodeAlign: 'justify', // e.g., d3.sankeyJustify; set by input above (in Observables)
        linkColor: 'source-target', // e.g., "source" or "target"; set by input above (in Observables)
        // MDM moved to within chart code so we don't have to import D3 here
        // nodeGroup: d => d.id.split(/\W/)[0], // take first word for color
        // format: (f => d => `${f(d)} TWh`)(d3.format(",.1~f")),
      },
      chartLoadFunction: SankeyChartLoad,
      chartDrawFunction: SankeyChartDraw,
      chartResizeFunction: SankeyChartDraw,
    },
    {
      id: 'StackedSteamgraph',
      options: {
        x: d => d.date,
        y: d => d.unemployed,
        z: d => d.industry,
        yLabel: "↑ Unemployed persons",
      },
      chartLoadFunction: StackedSteamgraphLoad,
      chartDrawFunction: StackedSteamgraphDraw,
      chartResizeFunction: StackedSteamgraphDraw,
    },
    {
      id: 'Treemap',
      options: {
        path: d => d.name.replace(/\./g, "/"), // e.g., "flare/animate/Easing"
        value: d => d?.size, // size of each node (file); null for internal nodes (folders)
        group: d => d.name.split(".")[1], // e.g., "animate" in "flare.animate.Easing"; for color
        label: (d, n) => [...d.name.split(".").pop().split(/(?=[A-Z][a-z])/g), n.value.toLocaleString("en")].join("\n"),
        title: (d, n) => `${d.name}\n${n.value.toLocaleString("en")}`, // text to show on hover
        link: (d, n) => `https://github.com/prefuse/Flare/blob/master/flare/src${n.id}.as`,
        // tile, // e.g., d3.treemapBinary; set by input above (in Observables)
      },
      chartLoadFunction: TreemapLoad,
      chartDrawFunction: TreemapDraw,
      chartResizeFunction: TreemapDraw,
    },
    {
      id: 'CirclePacking',
      options: {
        value: d => d.size, // size of each node (file); null for internal nodes (folders)
        label: (d, n) => [...d.name.split(/(?=[A-Z][a-z])/g), n.value.toLocaleString("en")].join("\n"),
        title: (d, n) => `${n.ancestors().reverse().map(({data: d}) => d.name).join(".")}\n${n.value.toLocaleString("en")}`,
        link: (d, n) => n.children
          ? `https://github.com/prefuse/Flare/tree/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}`
          : `https://github.com/prefuse/Flare/blob/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}.as`,
      },
      chartLoadFunction: CirclePackingLoad,
      chartDrawFunction: CirclePackingDraw,
      chartResizeFunction: CirclePackingDraw,
    },    
    // {
    //   id: 'CollapsibleTree',
    //   chartLoadFunction: CollapsibleTreeLoad,
    //   chartDrawFunction: CollapsibleTreeDraw,
    //   chartResizeFunction: CollapsibleTreeDraw,
    // },
    // Needs responsive work, see charts/VoroniLabels.jsx
    // {
    //   id: 'VoroniLabels',
    //   chartLoadFunction: VoroniLabelsLoad,
    //   chartDrawFunction: VoroniLabelsDraw,
    //   chartResizeFunction: VoroniLabelsDraw,
    // },
  ];
 


  // const c = {
  //   id: 'BarchartHorizontal', 
  //   options: {
  //     x: d => d.frequency,
  //     y: d => d.letter,
  //     xFormat: "%",
  //     xLabel: "Frequency →",
  //     color: "steelblue"
  //   },
  //   chartLoadFunction: BarchartHorizontalLoad,
  //   chartDrawFunction: BarchartHorizontalDraw,
  //   chartResizeFunction: BarchartHorizontalDraw,
  // }

  
  // const id=`chart-${c.id}`
  // key=c.id
  // width=400
  // height=300
  // resize=false
  // reload=false
  // options=c.options
  // chartLoadFunction=c.chartLoadFunction
  // chartDrawFunction=c.chartDrawFunction
  // chartResizeFunction=c.chartResizeFunction



  return <div className="">
    <div id='chartGrid' className='chartGrid' >
          { charts.map( c =>
              <D3Chart
                id={`chart-${c.id}`}
                key={c.id}
                width="800"
                height="450"
                resize={false}
                reload={false}
                options={c.options}
                chartLoadFunction={c.chartLoadFunction}
                chartDrawFunction={c.chartDrawFunction}
                chartResizeFunction={c.chartResizeFunction}
              />
          )}
      </div>
  </div>
  


  // return (
  //   <>
  //     <div className='chartAndControlsFlex'>
  //        <div id='chartGrid' className='chartGrid' >   {/*removed red from here check later */}
  //             <D3Chart
  //               id={`chart-${c.id}`}
  //               key={c.id}
  //               width="1200"
  //               height="700"
  //               resize={false}
  //               reload={false}
  //               options={c.options}
  //               chartLoadFunction={c.chartLoadFunction}
  //               chartDrawFunction={c.chartDrawFunction}
  //               chartResizeFunction={c.chartResizeFunction}
  //             />
  //       </div>
  //     </div>
  //   </>
  // )
}

export default App
