/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'

import * as Css from './componentAreaStyle';

const ComponentArea = (props) => {
    const { label } = props;
    return (
            <div css={Css.ComponentsParts}>
                <p>{label}</p>
            </div>
  )
}

export default ComponentArea