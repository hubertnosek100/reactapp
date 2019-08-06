import React from "react";
import OfferDto from "../offer-dto";
import OfferItem from "../offer-item/offer-item";
import './offer-list.scss';
import OfferDetail from "../offer-detail/offer-detail";

export interface Props {
    list: OfferDto[]
}

export default class OfferList extends React.Component<Props> {
    render() {
        let items: JSX.Element[] = this.props.list.map(x => <OfferItem key={x.name} item={x} />);
        return <div className="offer">
             {items}
             <OfferDetail/>
        </div>;
    }
}