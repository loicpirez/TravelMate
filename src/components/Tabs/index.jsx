import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Container from '../AppContainer'
import { getTowns } from '../../utils/api'
import { toggleLocationAction } from '../../actions'
import { connect } from 'react-redux'

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

export function TabsWrappedLabel (props) {
  const classes = useStyles()
  const initialTown = getTowns().shift()
  const [value, setValue] = React.useState(initialTown)

  function handleChange (event, newValue) {
    props.toggleLocationAction(newValue, props.location.selectedType)
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          {getTowns().map((town) => { return <Tab value={town} key={town} label={town} wrapped /> })}
        </Tabs>
      </AppBar>
      {value === props.location.town && <TabContainer><Container /></TabContainer>}
    </div>
  )
}

TabsWrappedLabel.propTypes = {
  toggleLocationAction: PropTypes.func,
  location: PropTypes.object
}

const mapDispatchToProps = dispatch => {
  return {
    toggleLocationAction: (town, selectedType) => {
      dispatch(toggleLocationAction(town, selectedType))
    }
  }
}

function mapStateToProps (state) {
  const { location } = state
  return { location }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsWrappedLabel)
