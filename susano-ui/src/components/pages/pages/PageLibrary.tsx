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
            <div css={Css.PageLibraryContainer}>
                <div css={Css.MainTitleStyle}>
                    <h2>
                    Pages Template
                    <br />
                    with my Susanoo UI
                </h2>    
                <p>
                    A collection of the best React templates and tools curated by SUSANOO's creators.
                </p>

                </div>
                
                
            </div>
            
            <FooterTemplate />
        </div>
    )
}

export default PageLibrary