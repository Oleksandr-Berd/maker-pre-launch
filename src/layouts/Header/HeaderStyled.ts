import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
padding-top: 40px;
padding-bottom: 66px;

@media (min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding-top: 48px;
    padding-left: 39px;
    padding-bottom: 77px;
}

@media (min-width: 1440px){
    padding-top: 81px;
    padding-bottom: 114px;
    padding-left: 165px;
}
`