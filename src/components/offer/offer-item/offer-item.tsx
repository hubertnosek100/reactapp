import React from "react";
import './offer-item.scss';
import OfferDto from "../offer-dto";

export interface Props {
    item: OfferDto
}

export default class OfferItem extends React.Component<Props> {
    render() {
        let item = this.props.item;
        return <>
            <div className="offer-item">
                <div className="offer-item__container">
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