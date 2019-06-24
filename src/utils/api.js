import places from './places.json'
import _ from 'lodash'

const getArrayValue = (arr) => { return Object.keys(arr).map((item) => { return _.keys(arr[item]).shift() }) }

const getTowns = () => {
  return _.keys(places)
}

const getAttractionsTypes = (town) => {
  return getArrayValue(places[town])
}

const getPlaces = (town, type) => {
  console.log(town, type)
  let result = []
  Object.keys(places[town]).forEach((t) => {
    if (type === (Object.keys(Object.values(places[town])[t]).shift())) {
      result = places[town][t][type]
    } else {
      console.log(town, type)
    }
  })
  return result
}

export { getTowns, getAttractionsTypes, getPlaces }
