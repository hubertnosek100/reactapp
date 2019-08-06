import React from "react";
import './offer-item.scss';
import OfferDto from "../offer-dto";

export interface Props {
    item: OfferDto,
    select: (n: number) => void
}

export default class OfferItem extends React.Component<Props> {

    onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        this.props.select(this.props.item.id);
    }

    render() {
        let item = this.props.item;
        return <>
            <div className="offer-item">
                <div className="offer-item__container" onClick={this.onClick}>
                    <div className="offer-item__indicator" style={{ backgroundColor: item.color }}>
                    </div>
                    <div className="offer-item__content">
                        <img className="offer-item__image" alt="img" src={item.image}></img>
                        <div className="offer-item__info">
                            <div className="offer-item__title">
                                {item.name}
                            </div>
                            <div className="offer-item__more">
                                <div className="offer-item__company">
                                    {item.company}
                                </div>
                                ,
                                <div className="offer-item__address">
                                    {item.address}
                                </div>
                            </div>
                        </div>
                        <div className="offer-item__salary">
                            {item.getSalary()}
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }
}