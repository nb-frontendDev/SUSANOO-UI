/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React, { useState } from 'react'
import * as Css from './switchStyle';

type Props = {
    show: boolean;
    onClickSwitch: () => void;
}

const Switch = ({show, onClickSwitch }: Props) => {
    if (show) {
        return (
            <div css={Css.switchButtonContainer}>
                <div></div>
                <button onClick={onClickSwitch} />
            </div>
        )
    } else { 
        return (
            <div css={Css.clickedSwitchButtonContainer}>
                <div></div>
                <button onClick={onClickSwitch} />
            </div>
        )
    }
  
}

export default Switch
