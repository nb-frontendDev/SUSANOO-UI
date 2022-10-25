/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import SocialMedia from "../../organisums/footer/social/SocialMedia";
import FooterTitle from "../../organisums/footer/title/FooterTitle";
import * as Css from './footerTemplateStyle';

const FooterTemplate = () => {
  return (
      <footer css={Css.FooterContainer}>
          <FooterTitle />
          <SocialMedia />
      </footer>
  )
}

export default FooterTemplate;