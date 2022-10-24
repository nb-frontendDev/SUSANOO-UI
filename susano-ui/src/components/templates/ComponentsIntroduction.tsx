/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'

import * as Css from './componentsIntroductionStyle';

const ComponentsIntroduction = () => {
  return (
      <div css={Css.PageContainer}>
          <div css={Css.PageTitleContainer}>
              <h3>SUSANOO Components</h3>
              <p>Susanoo UI provides various template components.</p>
          </div>
          <div css={Css.ConponentsContaoner}>
              <div css={Css.ComponentsParts}>
                  <p>Toggle</p>
              </div>
              <div css={Css.ComponentsParts}>
                  <p>Toggle</p>
              </div>
              <div css={Css.ComponentsParts}>
                  <p>Toggle</p>
              </div>
          </div>
    </div>
  )
}

export default ComponentsIntroduction
