import React from "react";
import logo from './logo.svg'
import "./logo.scss"

export default class AppLogo extends React.Component {
    render() {
        return <>
            <img src={logo} alt="logo" className="logo" />
        </>;
    }
} 