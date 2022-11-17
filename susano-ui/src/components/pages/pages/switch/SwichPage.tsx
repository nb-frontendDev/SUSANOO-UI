/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React, { useState } from 'react'
import Switch from "../../../atoms/switch/Switch";
import Header from '../../../organisums/header/Header'
import FooterTemplate from '../../../templates/footer/FooterTemplate'
import * as Css from './swichPageStyle';

const SwichPage = () => {
    const [onOff, setOnOff] = useState<boolean>(false);

    const onClickSwitch = () => { 
        setOnOff(!onOff);
        
    }
    
    return (
        <div>
            <Header />
            <div css={Css.PageSectionContainer}>
                <div css={Css.titleAreaContainer}>
                    <h2>Switch</h2>
                    <p>Switches toggle the state of a single setting on or off.</p>
                </div>

                <div css={Css.componentsAreaStyle}>
                    <h3>Basic switches</h3>
                    <div css={Css.componentsContainer}>
                        <Switch show={!onOff} onClickSwitch={() => onClickSwitch()} />
                    </div>
                </div>
                
                
            </div>
            <FooterTemplate />
        </div>
    )
}

export default SwichPage