import React,{useState} from 'react'

import PackageContext from './context'


const Provider = props=>{
    const [mission ,setMission] = useState({
        name :"Go  to  USA",
        agent :"007",
        accept:"Not accepted"
    })
    return (
        <PackageContext.Provider value={{
              data:mission,
              isAccepted :()=>{
                  setMission({...mission,accept:"Accepted"}) // ... for accessing all  the values
              }
        }}>
             {props.children}
        </PackageContext.Provider>
    )
}

export default Provider
 