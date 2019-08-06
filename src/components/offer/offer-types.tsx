


export const Offer = {
    Select : "OFFER_SELECT",
    Close : "OFFER_CLOSE"
}

export interface OfferState {
  id?: number,
  show: boolean
}

interface SelectAction {
    type: typeof Offer.Select
    payload: {
      id: number
    }
  }
  
  export type OfferActionTypes = SelectAction