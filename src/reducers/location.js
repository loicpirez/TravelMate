import {
  TOGGLE_LOCATION
} from '../actions'

const initialState = {
  town: 'Beijing',
  selectedType: 'Visites'
}
export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case TOGGLE_LOCATION: {
      return {
        town: action.town,
        selectedType: action.selectedType
      }
    }
    default:
      return state
  }
}
