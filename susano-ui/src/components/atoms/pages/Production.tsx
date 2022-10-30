/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'

import * as Css from './productionStyle';

const Production = () => {
  return (
      <div css={Css.pagePartsStyle}>
          <div />
          <h4>Page Template Title</h4>
          <p>Admin & Dashboard</p>
    </div>
  )
}

export default Production
