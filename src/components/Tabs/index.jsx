import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Container from '../AppContainer'
import { getTowns } from '../../utils/api'

function TabContainer (props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}))

export default function TabsWrappedLabel () {
  const classes = useStyles()
  const initialTown = getTowns().shift()
  const [value, setValue] = React.useState(initialTown)

  function handleChange (event, newValue) {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          {getTowns().map((town) => { return <Tab value={town} key={town} label={town} wrapped /> })}
        </Tabs>
      </AppBar>
      {value === initialTown && <TabContainer><Container /></TabContainer>}
    </div>
  )
}
