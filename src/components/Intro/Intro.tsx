import { useMediaQuery } from "usehooks-ts";

import * as SC from "./IntroStyled";

import introBgMob from "../../assets/images/intro_bg_mob.svg";
import introBgTab1 from "../../assets/images/intro_bg_tab1.svg";
import introBgTab2 from "../../assets/images/intro_bg_tab2.svg";
import introBgTab3 from "../../assets/images/intro_bg_tab3.svg";
import introBgDesk1 from "../../assets/images/intro_bg_desk1.svg"
import introBgDesk2 from "../../assets/images/intro_bg_desk2.svg"
import introBgDesk3 from "../../assets/images/intro_bg_desk3.svg"


import { ReactComponent as IntroIcon } from "../../assets/images/intro_icon.svg";

const Intro: React.FC = () => {
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1439px)");
  const isDesktop = useMediaQuery("(min-width: 1440px)")

  return (
    <SC.ContentWrapper
      bg={isTablet ? introBgTab1 : isDesktop ? introBgDesk1 : introBgMob}
      bg2={isDesktop ? introBgDesk3 : introBgTab3}
      bg3={isDesktop ? introBgDesk2 : introBgTab2}
    >
      <SC.TitleWrapper>
        {isTablet || isDesktop ? (
          <>
            <SC.Title>
              Get paid for the work you <span>love</span> to do
            </SC.Title>
          </>
        ) : (
          <>
            <SC.Title>
              Get paid for the work you <span>love</span>
            </SC.Title>
            <SC.Title>to do.</SC.Title>
          </>
        )}
      </SC.TitleWrapper>
      <SC.Content>
        The 9-5 grind is so last century. We believe in living life on your own
        terms. Whether you’re looking to escape the rat race or set up a side
        hustle, we’ve got you covered.
      </SC.Content>
      <IntroIcon />
    </SC.ContentWrapper>
  );
};

export default Intro;
