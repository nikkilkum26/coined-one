import React ,{useEffect,useState,useContext}from 'react'
import { UserContext } from '../App'
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
const ByDevices = () => {
    const { state, dispatch } = useContext(UserContext)
    const [value,setValue]=useState([])
    useEffect(()=>{
        let newArr=[]
        if(state&&state.data&&(state.data.deviceUsage))
            { 
            newArr=Object.keys(state.data.deviceUsage)
            console.log('keys',newArr)
            setValue(newArr)
            }
    },[state])
    return (
        <div className="container" style={{
            height: 260,
            width: 433, backgroundColor: 'white'
                }}>
            <h2 style={{textAlign:'center'}}>By Devices</h2>

            <div className="phone" style={{display:'flex'}}>
               <PhoneAndroidIcon style={{width:"100px",height:'100px',marginLeft:"40px"}}/>
               <div style={{marginTop:"20px"}}> Adi's Phone</div> 
               <div style={{marginTop:"45px" ,color:'#3D7FE0'}}> {
                   state&&state.data&&state.data.deviceUsage&&state.data.deviceUsage[value[state.dropdown-1]]?
               state.data.deviceUsage[value[state.dropdown-1]].mobile+'min':"loading.."
               }</div> 
            </div>

            <div className="laptop" style={{display:'flex' ,marginTop:"10px",marginLeft:"40px"}}>
            <LaptopMacIcon style={{width:"100px",height:'100px'}}/>
            <div style={{marginTop:"20px"}}> Adi's Laptop</div>
            <div style={{marginTop:"45px" ,color:'#3D7FE0'}}>{
                state&&state.data&&state.data.deviceUsage&&state.data.deviceUsage[value[state.dropdown-1]]?
                state.data.deviceUsage[value[state.dropdown-1]].laptop+'min':"loading.."
}
            </div> 
            </div>
            
        </div>
    )
}

export default ByDevices
