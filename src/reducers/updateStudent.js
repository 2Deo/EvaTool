import { UPDATE_STUDENT } from '../actions/students/update'

export default (state = {}, { type, payload } = {}) => {
  switch(type) {
    case UPDATE_STUDENT:
      return {...payload}

    default :
      return state
  }
}
