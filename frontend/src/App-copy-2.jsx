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

  const c = {
    id: 'CollapsibleTree',
    chartLoadFunction: CollapsibleTreeLoad,
    chartDrawFunction: CollapsibleTreeDraw,
    chartResizeFunction: CollapsibleTreeDraw,
  }

  // const c = {
  //   id: 'CirclePacking',
  //   options: {
  //     value: d => d.size, // size of each node (file); null for internal nodes (folders)
  //     label: (d, n) => [...d.name.split(/(?=[A-Z][a-z])/g), n.value.toLocaleString("en")].join("\n"),
  //     title: (d, n) => `${n.ancestors().reverse().map(({data: d}) => d.name).join(".")}\n${n.value.toLocaleString("en")}`,
  //     link: (d, n) => n.children
  //       ? `https://github.com/prefuse/Flare/tree/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}`
  //       : `https://github.com/prefuse/Flare/blob/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}.as`,
  //   },
  //   chartLoadFunction: CirclePackingLoad,
  //   chartDrawFunction: CirclePackingDraw,
  //   chartResizeFunction: CirclePackingDraw,
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


  return (
    <>
      <div className='chartAndControlsFlex'>
         <div id='chartGrid' className='chartGrid' >   {/*removed red from here check later */}
              <D3Chart
                id={`chart-${c.id}`}
                key={c.id}
                width="1200"
                height="700"
                resize={false}
                reload={false}
                options={c.options}
                chartLoadFunction={c.chartLoadFunction}
                chartDrawFunction={c.chartDrawFunction}
                chartResizeFunction={c.chartResizeFunction}
              />
        </div>
      </div>
    </>
  )
}

export default App
