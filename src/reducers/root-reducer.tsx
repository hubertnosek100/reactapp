import { combineReducers } from 'redux'
import { offerReducer } from '../components/offer/offer-reducer'

const rootReducer = combineReducers({
  offer: offerReducer,
})

export default rootReducer;