import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const ADD_BATCH = 'ADD_BATCH'

const api = new API()

export default (Batch) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

  api.post('/batches', Batch)
    .then((result) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })

      dispatch({
        type: ADD_BATCH,
        payload: result.body
      })
    })
    
    .catch((error) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({
        type: LOAD_ERROR,
        payload: error.message
      })
    })
  }
}
