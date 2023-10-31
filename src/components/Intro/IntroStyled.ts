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
`;

export const TitleWrapper = styled.div`
  margin-bottom: 23px;
`;

export const Content = styled.p`
  margin-bottom: 32px;

  font-size: 15px;
  line-height: 1.67;
`;
