import React from "react";
import OfferDto from "../offer-dto";
import OfferItem from "../offer-item/offer-item";
import './offer-list.scss';
import OfferDetail from "../offer-detail/offer-detail";

export interface Props {
    list: OfferDto[]
}

interface State {
    dto?: OfferDto,
}

export default class OfferList extends React.Component<Props> {

    state: State = {}
    select = (id: number) => {
        console.log(id);
        let dto: OfferDto | undefined = this.props.list.find(x => x.id === id)
        this.setState({ dto })
    }

    render() {
        let items: JSX.Element[] = this.props.list.map(x => <OfferItem key={x.name} item={x} select={this.select} />);
        return <div className="offer">
            {items}
            <OfferDetail dto={this.state.dto} />
        </div>;
    }
}