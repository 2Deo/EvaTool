import { ADD_STUDENT } from '../actions/students/add'

export default (state = {}, { type, payload } = {}) => {
  switch(type) {
    case ADD_STUDENT:
      return {...payload}

    default :
      return state
  }
}
