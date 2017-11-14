import { push } from 'react-router-redux'



dispatch({
   type: USER_SIGNED_IN,
   payload: response.data
 })

 dispatch(push('/'))

 
