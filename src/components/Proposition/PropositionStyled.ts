import styled from "@emotion/styled";
import { IntroStyle } from "../../utils/types";

export const MainTitleWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  margin-bottom: 79px;

  text-align: center;

  @media (min-width: 768px) {
    padding-left: 97px;
    padding-right: 98px;
  }

  @media (min-width: 1440px){
    margin-bottom: 105px;
  }
`;

export const MainTitle = styled.h3`
  margin-bottom: 27px;

  font-size: 24px;

  @media (min-width: 1440px) {
    margin-bottom: 24px;

    font-size: 32px;
  }
`;

export const MainContent = styled.p`
  font-size: 15px;
  line-height: 1.67;

  @media (min-width: 1440px) {
    width: 540px;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const List = styled.ul`
  padding-bottom: 144px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    padding-bottom: 119px;
    padding-left: 161px;
    padding-right: 162px;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-bottom: 203px;
    padding-left: 260px;
    padding-right: 260px;
  }
`;

export const Item = styled.li<IntroStyle>`
  position: relative;

  padding-top: 49px;
  padding-bottom: 32px;
  padding-left: 30px;
  padding-right: 29px;

  border-radius: 8px;

  @media (min-width: 768px) {
    padding-bottom: 48px;
    padding-left: 38px;
    padding-right: 38px;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    transform: translateX(37px) translateY(-32px);

    content: url(${(props) => props.bg});
  }

  &:first-child {
    margin-bottom: 55px;

    background-color: #093f68;

    @media (min-width: 1440px) {
      width: 445px;
      height: 425px;

      margin-bottom: 0;
      margin-right: 30px;
    }

    & > h5,
    & p,
    & h4 {
      color: #fff;
    }

    & svg {
      fill: #3ee9e5;
    }
  }

  &:last-child {
    background-color: #3ee9e5;

    @media (min-width: 1440px) {
      width: 445px;
      height: 449px;
    }

    & > h5,
    & p,
    & h4 {
      color: #080c20;
    }

    & svg {
      fill: #093f68;
    }
  }
`;

export const Title = styled.h5`
  margin-bottom: 19px;

  font-size: 18px;
  line-height: 1.39;
`;

export const Content = styled.p`
  margin-bottom: 26px;

  color: #777f98;

  font-size: 15px;
  line-height: 1.67;
`;

export const SubTitle = styled.h4`
  margin-bottom: 19px;

  font-size: 40px;
`;

export const SubItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  & > p {
    margin-left: 15px;

    font-size: 15px;
    line-height: 1.67;
  }
`;

export const PaymentPropositionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 19px;

  & > h4 {
    margin-right: 8px;

    font-size: 40px;
  }

  & > p {
    font-size: 15px;
    line-height: 1.67;
  }
`;
