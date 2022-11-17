/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import Header from '../../../organisums/header/Header'
import FooterTemplate from '../../../templates/footer/FooterTemplate'
import * as Css from './swichPageStyle';

const SwichPage = () => {
    return (
        <div>
            <Header />
            <div css={Css.PageSectionContainer}>
                <div css={Css.titleAreaContainer}>
                    <h2>Switch</h2>
                    <p>Switches toggle the state of a single setting on or off.</p>
                </div>
                
                
            </div>
            <FooterTemplate />
        </div>
    )
}

export default SwichPage