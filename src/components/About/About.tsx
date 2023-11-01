import * as SC from "./AboutStyled"

import aboutBg1 from "../../assets/images/about1.svg"
import aboutBg2 from "../../assets/images/about2.svg";
import aboutBg3 from "../../assets/images/about3.svg";
import aboutBg4 from "../../assets/images/about4.svg";


const About:React.FC = () => {
    return (
      <SC.List>
        <SC.Item>
          <SC.Figure bg={aboutBg1}></SC.Figure>
          <SC.ContentWrapper>
            <SC.Title>Indulge your passions</SC.Title>
            <SC.Content>
              Your passions shouldn't be just for the weekend. Earn a living
              doing what you love.
            </SC.Content>
          </SC.ContentWrapper>
        </SC.Item>
        <SC.Item>
          <SC.Figure bg={aboutBg2}></SC.Figure>
          <SC.ContentWrapper>
            <SC.Title>Gain financial freedom</SC.Title>
            <SC.Content>
              Start making money work for you. There’s nothing quite like
              earning while you sleep.
            </SC.Content>
          </SC.ContentWrapper>
        </SC.Item>
        <SC.Item>
          <SC.Figure bg={aboutBg3}></SC.Figure>
          <SC.ContentWrapper>
            <SC.Title>Choose your lifestyle</SC.Title>
            <SC.Content>
              Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
              your week.
            </SC.Content>
          </SC.ContentWrapper>
        </SC.Item>
        <SC.Item>
          <SC.Figure bg={aboutBg4}></SC.Figure>
          <SC.ContentWrapper>
            <SC.Title>Work from anywhere</SC.Title>
            <SC.Content>
              Selling online means not being pinned down. Want to work AND
              travel? Go for it!
            </SC.Content>
          </SC.ContentWrapper>
        </SC.Item>
      </SC.List>
    );
}
 
export default About;