/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import Header from '../../organisums/header/Header'
import FooterTemplate from '../../templates/footer/FooterTemplate'

import * as Css from './homeStyle';

const Home = () => {
  return (
      <div>
          <Header />
          <div>
              <div css={Css.mainTitleComtainer}>
                  <h1>
                      Even if it's a <span>big problem</span>, <br />
                      there's nothing you can't solve.
                  </h1>
                  <p>
                      SUSANOO UI is a component library application <br />
                      using modern front-end technology.
                  </p>
                  <div css={Css.buttonContainer}>
                      <button>To browser</button>
                      <button>To components</button>
                  </div>
                  <div>
                      {/* ここにプログラミング言語のロゴ */}
                  </div>
              </div>

              <div css={Css.featureContainer}>
                  <div css={Css.featureItemStyle}>
                      <div></div>
                      <h4>texttexttexttext</h4>
                      <p>samplesamplesamplesamplesamplesamplesample</p>
                  </div>
                  <div  css={Css.featureItemStyle}>
                      <div></div>
                      <h4>texttexttexttext</h4>
                      <p>samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample</p>
                  </div>
                  <div  css={Css.featureItemStyle}>
                      <div></div>
                      <h4>texttexttexttext</h4>
                      <p>samplesamplesamplesamplesamplesamplesample</p>
                  </div>
              </div>
          </div>
              <FooterTemplate />
  
    </div>
  )
}

export default Home
