import styled from "@emotion/styled";
import { IntroStyle } from "../../utils/types";

export const List = styled.ul`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 144px;

  text-align: center;

  @media (min-width: 768px) {
    padding-left: 97px;
    padding-right: 98px;
    padding-bottom: 141px;
  }

  @media (min-width: 1440px){
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    padding-bottom: 202px;
    padding-left: 165px;
    padding-right: 165px;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 56px;

    @media (min-width: 1440px) {
      margin-bottom: 0;
      margin-right: 30px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (min-width: 1440px) {
      flex-direction: column;
      align-items: flex-start;
    }

    &:nth-child(1),
    &:nth-child(3) {
      margin-left: 58px;

      @media (min-width: 1440px) {
        margin-left: 0;
      }
    }
  }

  @media (min-width: 1440px) {
    :nth-child(2), &:nth-child(4){
        margin-top: 48px;
    }
  }
`;

export const Figure = styled.div<IntroStyle>`
  width: 120px;
  height: 124px;

  display: inline-block;

  margin-bottom: 32px;

  background-color: #093f68;

  border-radius: 45px;

  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 1440px){
width: 160px;
height: 164px;

    margin-bottom: 48px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 11px;

  font-size: 18px;

  @media (min-width: 1440px){
    margin-bottom: 23px;
  }
`;

export const Content = styled.p`
  font-size: 15px;
  line-height: 1.67;
`;

export const ContentWrapper = styled.div`
  @media (min-width: 768px) {
    width: 340px;

    margin-left: 55px;

    text-align: left;
  }

  @media (min-width: 1440px){
    width: 255px;

    margin-left: 0;
  }
`;
