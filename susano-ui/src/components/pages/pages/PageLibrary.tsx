/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import Header from '../../organisums/header/Header'
import FooterTemplate from '../../templates/footer/FooterTemplate'

import * as Css from './pageLibraryStyle';

const PageLibrary = () => {
    return (
        <div>
            <Header />
            <div css={Css.pageLibraryContainer}>
                <div css={Css.mainTitleStyle}>
                    <h2>
                        Pages Template
                        <br />
                        with my Susanoo UI
                    </h2>    
                    <p>
                        A collection of the best React templates and tools curated by SUSANOO's creators.
                    </p>
                </div> 
                <div>
                    
                </div>
            </div>
            <FooterTemplate />
        </div>
    )
}

export default PageLibrary