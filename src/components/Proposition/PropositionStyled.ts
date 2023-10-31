import styled from "@emotion/styled";
import { IntroStyle } from "../../utils/types";

export const List = styled.ul`
  padding-bottom: 144px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Item = styled.li<IntroStyle>`
  position: relative;

  padding-top: 49px;
  padding-bottom: 32px;
  padding-left: 30px;
  padding-right: 29px;

  border-radius: 8px;

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
