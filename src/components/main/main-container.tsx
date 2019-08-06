import React from "react";
import Sidebar from "../sidebar/sidebar";
import OfferList from "../offer/offer-list/offer-list";
import OfferDto from "../offer/offer-dto";
import "./main-container.scss"
import Faker from 'faker';

export default class MainContainer extends React.Component {

    render() {

        let testlist = Array.from(Array(20)).map((x, idx) => new OfferDto(
            idx,
            Faker.name.jobTitle(),
            Faker.commerce.color(),
            Faker.image.business(),
            Faker.company.companyName(),
            Faker.address.streetAddress(),
            Math.floor(Math.random() * 10) + 4,
            Faker.lorem.paragraphs(3)
        ));

        return <>

            <div className="main">
                <OfferList list={testlist} />
                <Sidebar />
            </div>
        </>;
    }
}