import { FETCH_A_BATCH } from '../actions/batch/fetch'

export default (state = {}, { type, payload } = {}) => {
  switch(type) {
    case FETCH_A_BATCH:
      return {...payload}

    default :
      return state
  }
}
