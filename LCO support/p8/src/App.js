import React,{useState} from 'react'
import Header from './Components/Header';
import Hero from './Components/Hero';
import Theme from './Context/Theme'

const App = () =>{

  const themeHook = useState("light")

  return(
    <Theme.Provider value={themeHook}>
      <div>
        <Header></Header>
        <Hero> </Hero>
      </div>
     </Theme.Provider> 
  )


}

export default App;

