/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import Production from "../../atoms/pages/Production";
import TitleArea from "../../molecule/pages/TitleArea";
import * as Css from './pageTemplateStyle'

const PageTemplate = () => {
    return (
        <div css={Css.pageLibraryContainer}>
            <TitleArea />
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
