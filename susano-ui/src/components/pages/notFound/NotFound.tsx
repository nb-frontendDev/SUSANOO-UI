/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import Header from '../../organisums/header/Header'
import FooterTemplate from '../../templates/footer/FooterTemplate'

const NotFound = () => {
    return (
        <div>
            <Header />
            <h2>404 Page</h2>
            <FooterTemplate />
        </div>
    )
}

export default NotFound