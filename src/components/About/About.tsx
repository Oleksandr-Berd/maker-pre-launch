import { useMediaQuery } from "usehooks-ts";

import * as SC from "./AboutStyled";

import aboutBg1 from "../../assets/images/about1.svg";
import aboutBg2 from "../../assets/images/about2.svg";
import aboutBg3 from "../../assets/images/about3.svg";
import aboutBg4 from "../../assets/images/about4.svg";
import aboutBgDesk1 from "../../assets/images/about_desk1.svg";
import aboutBgDesk2 from "../../assets/images/about_desk2.svg";
import aboutBgDesk3 from "../../assets/images/about_desk3.svg";
import aboutBgDesk4 from "../../assets/images/about_desk4.svg";

const About: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width-1440px)");

  return (
    <SC.List>
      <SC.Item>
        <SC.Figure bg={isDesktop ? aboutBgDesk1 : aboutBg1}></SC.Figure>
        <SC.ContentWrapper>
          <SC.Title>Indulge your passions</SC.Title>
          <SC.Content>
            Your passions shouldn't be just for the weekend. Earn a living doing
            what you love.
          </SC.Content>
        </SC.ContentWrapper>
      </SC.Item>
      <SC.Item>
        <SC.Figure bg={isDesktop ? aboutBgDesk2 : aboutBg2}></SC.Figure>
        <SC.ContentWrapper>
          <SC.Title>Gain financial freedom</SC.Title>
          <SC.Content>
            Start making money work for you. There’s nothing quite like earning
            while you sleep.
          </SC.Content>
        </SC.ContentWrapper>
      </SC.Item>
      <SC.Item>
        <SC.Figure bg={isDesktop ? aboutBgDesk3 : aboutBg3}></SC.Figure>
        <SC.ContentWrapper>
          <SC.Title>Choose your lifestyle</SC.Title>
          <SC.Content>
            Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
            your week.
          </SC.Content>
        </SC.ContentWrapper>
      </SC.Item>
      <SC.Item>
        <SC.Figure bg={isDesktop ? aboutBgDesk4 : aboutBg4}></SC.Figure>
        <SC.ContentWrapper>
          <SC.Title>Work from anywhere</SC.Title>
          <SC.Content>
            Selling online means not being pinned down. Want to work AND travel?
            Go for it!
          </SC.Content>
        </SC.ContentWrapper>
      </SC.Item>
    </SC.List>
  );
};

export default About;
