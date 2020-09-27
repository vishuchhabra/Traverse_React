import React,{Fragment} from  'react'
import Provider from "./provider"
import Context from  './context'



const Agents = () =>{
  return <AgentOne/>
}
const AgentOne = () =>{
  return <AgentBond/>
}

const AgentBond = () =>{
  return (
    <Context.Consumer>
      {
        (context)=>(
          <Fragment>
            <h3>Agent information</h3>
            <p>Mission name:{context.data.name}</p>
            <p>status:{context.data.accept}</p>
            <button onClick={context.isAccepted}>Choose to  Aceept</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}


const App = ()=>{
  return(
    <div>
      <h1>Context API </h1>
        <Provider>
        <Agents />
        </Provider>
      
    </div>
  )
}

export default App