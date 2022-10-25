/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import React, { FC } from 'react'
import * as Css from './footerTitleStyle';

const FooterTitle = () => {
  return (
      <div css={Css.FooterTitleStyle}>
      <h4>SUSANOO UI</h4>
      <p>
        Susanoo UI realizes free customization.
      </p>
    </div>
  )
}

export default FooterTitle