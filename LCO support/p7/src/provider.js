import React ,{useState} from 'react'

import PackageContext  from './context'


// creating the provodrr

const Provider = props =>{
    const [mission , setMission] = useState({
        mname: "Go to Russia",
        agent: "007",
        accept : "Not accepted"
    })
    return (
        <PackageContext.Provider value ={{
                data:mission,
                isMissionAccepted :()=>{
                    setMission({...mission,accept:"ACCEPTED"})
                }
        }}>
            {props.children}
        </PackageContext.Provider>
    )
}


// exporting the provoder

export default Provider


