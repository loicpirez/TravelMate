export const TOGGLE_LOCATION = 'TOGGLE_LOCATION'

export const toggleLocationAction = (town, selectedType) => ({
  type: TOGGLE_LOCATION,
  town,
  selectedType
})
