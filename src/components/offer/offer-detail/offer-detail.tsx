import React from "react";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import OfferDrawer from './offer-drawer'
import OfferDto from "../offer-dto";

export interface Props {
    dto?: OfferDto
}


export default class OfferDetail extends React.Component<Props> {
    state = {
        show: false,
    }

    componentWillReceiveProps(props: Props) {
        this.setState({ show: true })
    }
    render() {

        const toggleDrawer = (open: boolean) => (event: any) => {
            if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }

            this.setState({ ...this.state, show: open });
        };

        return <>
            <SwipeableDrawer
                anchor="bottom"
                open={this.state.show}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <OfferDrawer dto={this.props.dto} />
            </SwipeableDrawer>
        </>;
    }
}