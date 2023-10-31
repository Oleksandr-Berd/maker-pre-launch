import * as SC from "./NotifiedFormStyled"

const NotifiedForm = () => {
    return (
      <SC.GeneralWrapper>
        <SC.Title>Get notified when we launch</SC.Title>
        <SC.FormStyled>
            <SC.InputStyled type="text" placeholder="Email address"/>
            <SC.SubmitButton>Get notified</SC.SubmitButton>
        </SC.FormStyled>
      </SC.GeneralWrapper>
    );
}
 
export default NotifiedForm;