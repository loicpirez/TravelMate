import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { getPlaces } from '../../utils/api'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  card: {
    minHeight: '350px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  } }))

export function AppContainer (props) {
  const classes = useStyles()
  const data = getPlaces(props.location.town, props.location.selectedType)
  console.log(props)

  const singleCard = (place) => {
    if (!place) { return <div className="undefined"/> }
    const mapUrl = `https://open.mapquestapi.com/staticmap/v4/getmap?key=${process.env.REACT_APP_MAPQUEST_API_KEY}&size=470,150&zoom=13&center=${place.lat},${place.lon}&mcenter=${place.lat},${place.lon},0,0`

    return <Grid item xs>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {place.cat_finale_label}
          </Typography>
          <Typography variant="h5" component="h2">
            {place.nom}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {place.avis_petitfute ? place.avis_petitfute.replace(/<(.|\n)*?>/g, '').substring(0, 300) + '...' : ''}
          </Typography>
          <Typography variant="body1" component="p">
            {place.adresse_1}
            {place.adresse_2}
            {place.adresse_3}
          </Typography>
          <Typography variant="body2" component="p">
            {place.recommande === 1 ? 'Recommandé !' : ''}
          </Typography>
        </CardContent>
        <CardActions>
          <img alt='Map' src={mapUrl}/>
        </CardActions>
      </Card>
    </Grid>
  }

  const createCards = () => {
    return data.map((place, index) => {
      if (index % 3 === 0) {
        return <Grid key={index} container spacing={3}>
          { singleCard(data[index]) }
          { singleCard(data[index + 1]) }
          { singleCard(data[index + 2]) }
        </Grid>
      } else {
        return <div className="end" />
      }
    })
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{ height: '90vh' }}>
        {createCards()}
      </Container>
    </React.Fragment>
  )
}

AppContainer.propTypes = {
  location: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  const { location } = state
  return { location }
}

export default connect(mapStateToProps)(AppContainer)
