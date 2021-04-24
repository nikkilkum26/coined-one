import React ,{useEffect,useState,useContext}from 'react'
import { UserContext } from '../App'
import { DonutChart } from "@carbon/charts-react";
import './chart.css'


const colors = ['#2D82FE', "#FF9E57", "rgba(47, 237, 81, 0.76)", "#3c6df0"];
function Chart({dropDown,data}) {
  const { state, dispatch } = useContext(UserContext)
  const [flag,setFlag]=useState(true)
  const [label,setLabel]=useState('')
  
  
  
  useEffect(()=>{
 if(state&&state.dropdown){
   switch(state.dropdown){
     case 2: {
       let obj=JSON.parse(JSON.stringify(state.chartinfo))
       state.chart=obj
       state.chart.datasets[0].data.splice(2,2)
       state.chart.datasets[0].backgroundColors.splice(2,2)
       state.chart.labels.splice(2,2)
       console.log(state.chart,2)
       setFlag(!flag)
     } break;
     case 3:{
      let obj=JSON.parse(JSON.stringify(state.chartinfo))
      state.chart=obj
       state.chart.datasets[0].data.splice(1,1)
       state.chart.datasets[0].backgroundColors.splice(1,1)
       state.chart.labels.splice(1,1)
       state.chart.datasets[0].data.splice(2,1)
       state.chart.datasets[0].backgroundColors.splice(2,1)
       state.chart.labels.splice(2,1)
      //  state.chart.datasets[0].data.splice(1,1)
       console.log(state.chart,"3")
       setFlag(!flag)
     }break;
     case 4:{
      let obj=JSON.parse(JSON.stringify(state.chartinfo))
      state.chart=obj
       state.chart.datasets[0].data.splice(1,2)
       state.chart.datasets[0].backgroundColors.splice(1,2)
       state.chart.labels.splice(1,2)
      
       console.log(state.chart,"4")
       setFlag(!flag)
     }break;
     default: {
      
       console.log(state.chart,"def")
       
     }break;
   }}

if(state.dropdown===1&&state.chartinfo!==undefined&&Object.keys(state.chartinfo).length!==0){
  let obj=JSON.parse(JSON.stringify(state.chartinfo))
        state.chart=obj
         
        
         console.log(state.chart,"def")
         setFlag(!flag)
}

  },[state])



const demoDonutOptions = {
  accessibility: false,
  legendClickable: true,
  containerResizable: true,
  colors,
  center: {
    number: state.dropdown&&state.chartinfo&&state.chartinfo.datasets[0]?state.chartinfo.datasets[0].data[state.dropdown-1]+' min':"",
    label: state.dropdown&&state.chartinfo&&state.chartinfo.datasets[0]?state.chartinfo.labels[state.dropdown-1]:"",
  }
};
console.log("check here",state.chart)
  return (
    <div >
      <h2 style={{textAlign:'center'}}>{state.dropdown&&state.chartinfo&&state.chartinfo.datasets[0]?state.chartinfo.labels[state.dropdown-1]:""}</h2>
      
       <div className="wrap">  
       {state&&state.chart ? 
       <div className="">
       {flag?
        <DonutChart
          data={state.chart}
          options={demoDonutOptions}
          width={200}
          height={150}
          
      
        />:""}
       {!flag?
        <DonutChart
          data={state.chart}
          options={demoDonutOptions}
          width={200}
          height={150}
          
      
        />:""}
        
        </div>
        
        :""
      }
      </div>
      
    </div>
  );
}

export default Chart;
