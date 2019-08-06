import {
    OfferState,
    OfferActionTypes,
    Offer,
} from './offer-types'

const initialState: OfferState = {
    id: 0,
    show: false
}

export function offerReducer(
    state = initialState,
    action: OfferActionTypes
): OfferState {
    switch (action.type) {
        case Offer.Select:
            return {
                id: action.payload.id,
                show: true
            }
        case Offer.Close:
            return {
                show: false
            }
        default:
            return state
    }
}