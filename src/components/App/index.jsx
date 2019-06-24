import React from 'react'
// import { getTowns, getAttractionsTypes, getPlaces } from '../../utils/api'
import Tabs from '../Tabs'
import theme from '../../utils/theme'
import { ThemeProvider } from '@material-ui/styles'
import BottomBar from '../BottomBar'
import Navbar from '../NavBar'

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Tabs/>
        <BottomBar/>
      </ThemeProvider>
    </div>
  )
}

export default App
