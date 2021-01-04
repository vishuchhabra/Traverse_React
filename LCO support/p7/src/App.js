import React,{Fragment} from 'react'
import Provider from './provider'
import Context from './context'

const AgentTwo = ()=>{
  return (
    <Context.Consumer>
      {
        (context)=>(
          <Fragment>
            <h3>Agent Information</h3>
            <p>Mission Name:{context.data.mname}</p>
            <p>
              Agent Name: {context.data.agent}
            </p>
            <p>Status: {context.data.accept}</p>
            <button onClick={context.isMissionAccepted}>Change Level</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}


const AgentOne = ()=>{
  return <AgentTwo/>
}

const Agents = () =>{
  return <AgentOne />
}

const App = () =>{
    return(
      <div>
        <h1>
          Context API
        </h1>
        <Provider>
          <Agents/>
        </Provider>

      </div>
    )
}

export default App