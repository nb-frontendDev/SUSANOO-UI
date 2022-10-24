/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React, { FC } from 'react'
import ComponentArea from "../organisums/componentArea/ComponentArea";

import * as Css from './componentsIntroductionStyle';



const ComponentsIntroduction :FC= () => {
  return (
      <div css={Css.PageContainer}>
          <div css={Css.DocumentContainer}>
              <h3>Susanoo's Document</h3>
              <p>
                  Susanoo UI is a modern Japanese style component composed of <span>React/typescript</span>.
                  <br />
                  Developed from scratch by a young Japanese designer.
              </p>
          </div>


          <div css={Css.PageTitleContainer}>
              <h3>SUSANOO Components</h3>
              <p>Susanoo UI provides various template components.</p>
          </div>
          <div css={Css.ConponentsContaoner}>
              <ComponentArea label='Toggle' />
              <ComponentArea label='Toggle' />
              <ComponentArea label='Toggle' />
              <ComponentArea label='Toggle' />
              <ComponentArea label='Toggle' />
          </div>
    </div>
  )
}

export default ComponentsIntroduction
