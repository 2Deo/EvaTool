import { FETCH_BATCHES } from '../actions/batch/fetch'

export default (state = [], { type, payload } = {}) => {
  // based on the action type we will return a new state
  switch(type) {
    // some actions include a payload that we can use to update the state
    // in this case the payload will contain a new recipe
    case 'FETCH_BATCHES':
      console.log(payload)
      return [...payload]

    // optionally some other cases
    // ...

    // by default we return the existing state
    default :
      return state
  }
}
