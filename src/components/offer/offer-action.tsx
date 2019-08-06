import { Offer, OfferActionTypes } from './offer-types'

export function select(id: number): OfferActionTypes {
    return {
        type: Offer.Select,
        payload: {
            id
        }
    }
}