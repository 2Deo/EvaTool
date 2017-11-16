import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const FETCH_BATCHES = 'FETCH_BATCHES'
export const FETCH_A_BATCH = 'FETCH_A_BATCH'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.get('/batches')
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: FETCH_BATCHES,
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

export const fetchABatch=(batchId) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

  api.get(`/batches/${batchId}`)
    .then((result) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })

      dispatch({
        type: FETCH_A_BATCH,
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
