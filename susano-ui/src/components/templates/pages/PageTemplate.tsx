/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import Production from "../../atoms/pages/Production";
import * as Css from './pageTemplateStyle'

const PageTemplate = () => {
    return (
        <div css={Css.pageLibraryContainer}>
            <div css={Css.mainTitleStyle}>
                <h2>Pages Template<br />with my Susanoo UI</h2>
                <p>
                    A collection of the best React templates and tools curated by SUSANOO's creators.
                </p>
            </div>
            <div css={Css.pageTemplateContainer}>
                <Production />
                <Production />
                <Production />
                <Production />
            </div>
        </div>
    )
};

export default PageTemplate
