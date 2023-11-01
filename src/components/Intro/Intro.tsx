
import * as SC from "./IntroStyled"

import introBgMob from "../../assets/images/intro_bg_mob.svg"
import introBgTab1 from "../../assets/images/intro_bg_tab1.svg"
import introBgTab2 from "../../assets/images/intro_bg_tab2.svg";
import introBgTab3 from "../../assets/images/intro_bg_tab3.svg";

import {ReactComponent as IntroIcon} from "../../assets/images/intro_icon.svg"
import { useMediaQuery } from "usehooks-ts";

const Intro:React.FC = () => {

const isTablet = useMediaQuery("(min-width:768px) and (max-width:1439px)")

    return (
      <SC.ContentWrapper
        bg={isTablet ? introBgTab1 : introBgMob}
        bg2={introBgTab3}
        bg3={introBgTab2}
      >
        <SC.TitleWrapper>
          {isTablet ? (
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
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </SC.Content>
        <IntroIcon />
      </SC.ContentWrapper>
    );
}
 
export default Intro;