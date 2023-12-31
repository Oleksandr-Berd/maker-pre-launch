import styled from "@emotion/styled";
import { IntroStyle } from "../../utils/types";

export const ContentWrapper = styled.div<IntroStyle>`
  padding-top: 281px;
  padding-bottom: 144px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    position: relative;

    padding-top: 51px;
    padding-bottom: 161px;
    padding-left: 155px;
    padding-right: 156px;

    background-image: url(${(props) => props.bg3});
    background-position: center;

    &::before {
      position: absolute;
      top: 0;
      left: 0;

      content: url(${(props) => props.bg});
    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;

      content: url(${(props) => props.bg2});
    }
  }

  @media (min-width: 1440px){
    padding-bottom: 202px;
  }
`;

export const Title = styled.h2`
  width: 308.8px;

  margin-left: auto;
  margin-right: auto;

  font-size: 32px;
  line-height: 1.25;

  & > span {
    color: #3ee9e5;
  }

  @media (min-width: 768px) {
    width: 357px;
  }

  @media (min-width: 1440px) {
    width: 530px;

    font-size: 48px;
    line-height: 1.67;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 23px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const Content = styled.p`
  margin-bottom: 32px;

  font-size: 15px;
  line-height: 1.67;

  @media (min-width: 1440px){
    width: 540px;

    margin-bottom: 64px;
    margin-left: auto;
    margin-right: auto;
  }
`;
