import styled from "@emotion/styled";
import { IntroStyle } from '../../utils/types';


export const List = styled.ul`
padding-left: 24px;
padding-right: 24px;
padding-bottom: 144px;

text-align: center;
`

export const Item = styled.li`

&:not(:last-child){
    margin-bottom: 56px;
}
`

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
`;

export const Title = styled.h3`
margin-bottom: 11px;

font-size: 18px;
`

export const Content = styled.p`
font-size: 15px;
line-height: 1.67;
`