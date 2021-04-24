import React ,{useReducer,createContext} from 'react'
import HomeScreen from './Pages/HomeScreen'
import { reducer } from './Reducer/reducer'
export var UserContext = createContext()
const App = () => {
  const [state, dispatch] = useReducer(reducer, {})
  return (
    <UserContext.Provider value={{ state, dispatch }}>
    <HomeScreen/>
    </UserContext.Provider>
  )
}

export default App

