import React from 'react'
import { BarchartHorizontalLoad, BarchartHorizontalDraw } from './charts/BarchartHorizontal'
import { D3Chart } from './D3Chart'


function App() {

  const c = {
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
  }

  
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
