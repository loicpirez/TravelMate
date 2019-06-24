import { loadCSS } from 'fg-loadcss'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import clsx from 'clsx'
import Icon from '@material-ui/core/Icon'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
}))

export default function BottomBar () {
  const classes = useStyles()
  const [setValue] = React.useState('recents')

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css')
    )
  }, [])

  function handleChange (event, newValue) {
    setValue(newValue)
  }

  return (
    <BottomNavigation value={'Visites'} onChange={handleChange} className={classes.root}>
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
