import React from "react";
import './offer-drawer.scss'
import OfferDto from "../offer-dto";
import { Button } from "react-bootstrap"


export interface Props {
    dto?: OfferDto
}


export default class OfferDrawer extends React.Component<Props> {

    render() {

        if (!this.props.dto) return <></>
        let dto = this.props.dto as OfferDto;
        return <>
            <div className="drawer">
                <div className="drawer__hero">
                    <div className="drawer__bg" style={{ backgroundImage: `linear-gradient(${dto.color}, lightgray)` }}>
                    </div>
                    <div className="drawer__hero-content">
                        <img alt="company" className="drawer__company-image" src={dto.image} />
                        <div className="drawer__name">
                            {dto.name}
                        </div>
                        <div>
                            {dto.company}
                        </div>
                        <div>
                            {dto.address}
                        </div>
                        <div className="drawer__salary">
                            {dto.getSalary()}
                        </div>
                        <div className="drawer__join">
                            <Button variant="outline-info">Join us</Button>

                        </div>
                    </div>
                </div>
                <div className="drawer__block">
                    <div className="drawer__block-content">
                        <div className="drawer__more-info">More info</div>
                        <div className="drawer__desc">{dto.desc}</div>
                    </div>
                </div>
            </div>
        </>;
    }
}