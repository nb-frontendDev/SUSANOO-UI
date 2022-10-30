/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import Header from '../../organisums/header/Header'
import FooterTemplate from '../../templates/footer/FooterTemplate'
import PageTemplate from "../../templates/pages/PageTemplate";

const PageLibrary = () => {
    return (
        <div>
            <Header />
            <PageTemplate />
            <FooterTemplate />
        </div>
    )
}

export default PageLibrary