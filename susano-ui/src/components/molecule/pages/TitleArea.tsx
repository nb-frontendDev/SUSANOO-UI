/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'

import * as Css from './titleAreaStyle';


const TitleArea = () => {
  return (
      <div css={Css.mainTitleStyle}>
          <h2>Pages Template<br />with my Susanoo UI</h2>
          <p>
              A collection of the best React templates and tools curated by SUSANOO's creators.
          </p>
      </div>
  )
}

export default TitleArea
