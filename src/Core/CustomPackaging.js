import React, {useState, useEffect} from "react"


export default function CustomPackaging({returner,toggleCustomDetails, getCustomDetails}){
    let [custom,setCustom]=useState({fname:'', lname:'', description:'',image:''})
    const [loading, setLoading] = useState(false)
    const setValues = ()=>{
        setLoading(true)
        const values = getCustomDetails()
        setCustom(values)
        console.log(custom)
        setLoading(false)
    }
    returner(setValues)
    // useEffect(()=>{
    //     returner(setValues)
    // },[])
    return(
    <div>
        {loading?"Loading...":
        <div >
            {custom.fname}<br/>
            {custom.lname}<br/>
            {custom.description}<br/>
            {custom.image}
        </div>
        }
        <button onClick={()=>{toggleCustomDetails(false)}}>X</button>
    </div>
    )
}