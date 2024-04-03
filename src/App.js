import React from 'react'
import Body from './component/body/Body'
import { Provider } from 'react-redux'
import { store } from './component/utils/redux/appstore'

const App = () => {
  return (
    <>
    <Provider store={store}>
    <Body/>

    </Provider>
   
    </>
  )
}

export default App
