import React ,{useEffect,useState,useContext}from 'react'
import './activities.css'
import DropDown from './dropdown'
import Grid from './Grid'
import axios from 'axios'
import { UserContext } from '../App'
const Activities = () => {
    const { state, dispatch } = useContext(UserContext)
    const [value,setValue]=useState({})
    const [dropDownData,setDropDownData]=useState()
    const checkOP=(x)=>{
        console.log(x)
        setDropDownData(x)
    }
    useEffect(()=>{
        const getApi=async()=>{
            try {
                const data = await axios(
                   `https://api.mocklets.com/mock68182/screentime`,
                    {
                        method: "GET",
                        
                    }
                );
    
    
                if (data.status === 200) {
                    
                    console.log(data, "attribute check");
                    setValue(data.data[0])
                    dispatchAction(data)
                    
                }
            } catch (error) {
                console.log(error)
            }
        }
        getApi();
        const dispatchAction=(data)=>{
            dispatch({
                type:'DATA',payload:data.data[0]
            })
            let arr=[]
            if(Object.keys(data).length!==0){
             arr.push(Number(data.data[0].chartData.totalTime.total))
             arr.push(Number(data.data[0].chartData.classTime.total))
             arr.push(Number(data.data[0].chartData.studyTime.total))
             arr.push(Number(data.data[0].chartData.freeTime.total))
            }
            console.log(arr,"here")
            dispatch({
                type:'CHART',
                payload:{
                    labels: [
                      "Total Time",
                      "Class Time",
                      "Study Time",
                      "Free Time"
                    ],
                    datasets: [
                      {
                        label: "time",
                        backgroundColors: ['#8D8D8D', "#FF9E57", "rgba(47, 237, 81, 0.76)", "#3c6df0"],
                        data: arr
                      }
                    ]
                  }
            })
            dispatch({
                type:'CHARTINFO',
                payload:{
                    labels: [
                      "Total Time",
                      "Class Time",
                      "Study Time",
                      "Free Time"
                    ],
                    datasets: [
                      {
                        label: "time",
                        backgroundColors: ['#8D8D8D', "#FF9E57", "rgba(47, 237, 81, 0.76)", "#3c6df0"],
                        data: arr
                      }
                    ]
                  }
            })
            dispatch({
                type:'CHART',
                payload:{
                    labels: [
                      "Total Time",
                      "Class Time",
                      "Study Time",
                      "Free Time"
                    ],
                    datasets: [
                      {
                        label: "time",
                        backgroundColors: ['#8D8D8D', "#FF9E57", "rgba(47, 237, 81, 0.76)", "#3c6df0"],
                        data: arr
                      }
                    ]
                  }
            })
        }
        
    },[])
    console.log(state)
    return (
        <div className="activities" >
            <h1 style={{fontWeight:"700",fontSize:"25px"}}>
             Activities summary</h1>
            <div className='firstblock'>
                <div style={{marginLeft:'15px'}}>
                <DropDown sendOp={checkOP}/>
                </div>
            </div>
            <div className="cardplacer" >
           
            <Grid data={value} dropDownData={dropDownData}/>
        
            </div>

        </div>
    )
}

export default Activities
