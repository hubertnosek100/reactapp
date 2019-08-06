import React from "react";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

export default class OfferDetail extends React.Component {

    state = {
        bottom: true,
    }
    render() {

        const toggleDrawer = (side: string, open: boolean) => (event: any) => {
            if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }

            this.setState({ ...this.state, [side]: open });
        };

        return <>
            <SwipeableDrawer
                anchor="bottom"
                open={this.state.bottom}
                onClose={toggleDrawer('bottom', false)}
                onOpen={toggleDrawer('bottom', true)}
            >
                <div style={{ height: "100px", width: "100vw" }}></div>
            </SwipeableDrawer>
        </>;
    }
}