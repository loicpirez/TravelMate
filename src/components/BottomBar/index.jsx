import { loadCSS } from 'fg-loadcss'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import clsx from 'clsx'
import Icon from '@material-ui/core/Icon'
import React from 'react'
import { toggleLocationAction } from '../../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
}))

export function BottomBar (props) {
  const classes = useStyles()
  const [value, setValue] = React.useState('recents')

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css')
    )
  }, [])

  function handleChange (event, newValue) {
    props.toggleLocationAction(props.location.town, newValue)
    setValue(newValue)
  }

  // town type
  return (
    <BottomNavigation value={props.location.selectedType} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Beauté" value="Beauté — Bien-être" icon={<Icon className={clsx(classes.icon, 'fa fa-kiss-beam')} />} />
      <BottomNavigationAction label="Maison" value="Maison — déco" icon={<Icon className={clsx(classes.icon, 'fa fa-home')} />} />
      <BottomNavigationAction label="Transports" value="Transports — voyages" icon={<Icon className={clsx(classes.icon, 'fa fa-plane')} />} />
      <BottomNavigationAction label="Restaurants" value="Restaurants" icon={<Icon className={clsx(classes.icon, 'fa fa-utensils')} />} />
      <BottomNavigationAction label="Hébergements" value="Hébergements" icon={<Icon className={clsx(classes.icon, 'fa fa-hotel')} />} />
      <BottomNavigationAction label="Shopping" value="Shopping" icon={<Icon className={clsx(classes.icon, 'fa fa-shopping-bag')} />} />
      <BottomNavigationAction label="Sortir" value="Sortir" icon={<Icon className={clsx(classes.icon, 'fa fa-cocktail')} />} />
      <BottomNavigationAction label="Sport" value="Sport — loisirs" icon={<Icon className={clsx(classes.icon, 'fa fa-futbol')} />} />
      <BottomNavigationAction label="Services" value="Services (pense-futé)" icon={<Icon className={clsx(classes.icon, 'fa fa-concierge-bell')} />} />
      <BottomNavigationAction label="Visites" value="Visites" icon={<Icon className={clsx(classes.icon, 'fa fa-map')} />} />
      <BottomNavigationAction label="Coquin" value="Coquin" icon={<Icon className={clsx(classes.icon, 'fa fa-heart')} />} />
    </BottomNavigation>
  )
}

BottomBar.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar)
