
import React from 'react'


import Container from './components/react_redux/Container'
import store from './components/react_redux/reduxFolder/store'

import { Provider } from 'react-redux'





function App() {

  return (
    <Provider store = {store} >
    <div className="App"  >
      
       <Container  />
          
    </div>
    </Provider>
  );
}

export default App;
