/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'

import * as Css from './componentsIntroductionStyle';

const ComponentsIntroduction = () => {
  return (
      <div css={Css.PageContainer}>
          <div css={Css.DocumentContainer}>
              <h3>Susanoo's Document</h3>
              <p>
                  Susanoo UI is a modern Japanese style component composed of React/typescript.
                  <br />
                  Developed from scratch by a young Japanese designer.
              </p>
          </div>


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
