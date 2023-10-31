
import * as SC from "./IntroStyled"

import introBgMob from "../../assets/images/intro_bg_mob.svg"
import {ReactComponent as IntroIcon} from "../../assets/images/intro_icon.svg"

const Intro:React.FC = () => {
    return (
      <SC.ContentWrapper bg={introBgMob}>
        <SC.TitleWrapper>
          <SC.Title>
            Get paid for the work you <span>love</span>
          </SC.Title>
          <SC.Title>to do.</SC.Title>
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