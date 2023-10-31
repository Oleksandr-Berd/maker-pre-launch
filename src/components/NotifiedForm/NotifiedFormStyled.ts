import styled from "@emotion/styled";

export const GeneralWrapper = styled.div`
  padding-bottom: 164px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;
`;

export const Title = styled.h3`
  width: 220px;

  margin-bottom: 31px;
  margin-left: auto;
  margin-right: auto;

  font-size: 24px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
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
`;


export const ErrorStyled = styled.p`
  color: #ff2965;

  font-size: 12px;
  line-height: 2.08;
`;