import styled from "@emotion/styled";
import { IntroStyle } from "../../utils/types";

export const GeneralWrapper = styled.div<IntroStyle>`
  padding-bottom: 164px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  @media (min-width: 768px) {
    padding-bottom: 105px;

    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
  }
`;

export const Title = styled.h3`
  width: 220px;

  margin-bottom: 31px;
  margin-left: auto;
  margin-right: auto;

  font-size: 24px;

  @media (min-width: 768px) {
    width: auto;

    margin-bottom: 29px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const InputWrapper = styled.div`
  @media (min-width: 768px) {
    width: 320px;

    margin-right: 16px;
  }
`;

export const InputStyled = styled.input`
  width: calc(100% - 18px);

  padding-top: 12px;
  padding-bottom: 11px;
  padding-left: 18px;

  background-color: #093f68;
  color: #fff;

  font-family: "ManropeBold";
  font-size: 15px;
  line-height: 1.67;

  border: none;
  border-radius: 24px;

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding-top: 12px;
  padding-bottom: 11px;

  color: #093f68;
  background-color: #3ee9e5;

  font-family: "ManropeBold";
  font-size: 15px;
  line-height: 1.67;

  border: none;
  border-radius: 24px;

  @media (min-width: 768px) {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const ErrorStyled = styled.p`
  color: #ff2965;

  font-size: 12px;
  line-height: 2.08;
`;
