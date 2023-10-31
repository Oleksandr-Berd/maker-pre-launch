import * as Yup from "yup";
import { useFormik } from "formik";

import * as SC from "./NotifiedFormStyled";
import { FormType } from '../../utils/types';
import { ChangeEvent } from "react";

const NotifiedForm:React.FC<FormType> = ({formSubmit}) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Oops! That doesn’t look like an email address")
      .required("Oops! Please add your email"),
  });

const formik = useFormik({
    initialValues:{
        email:""
    },
    validationSchema: validationSchema,
    onSubmit:(value) => {
        console.log(value);
        
    }
})

const handleSubmit = (evt:ChangeEvent<HTMLFormElement>):void => {
    evt.preventDefault()

    formSubmit(formik.values.email)

    formik.resetForm()
}

const handleChange = (
  evt: ChangeEvent<HTMLInputElement>
): void => {
  formik.handleChange(evt);
};

  return (
    <SC.GeneralWrapper>
      <SC.Title>Get notified when we launch</SC.Title>
      <SC.FormStyled onSubmit={handleSubmit}>
        <div>
          <SC.InputStyled
          name="email"
            type="text"
            placeholder="Email address"
            value={formik.values.email}
            onChange={handleChange}
          />
          {formik.errors.email ? <SC.ErrorStyled>{formik.errors.email}</SC.ErrorStyled> : <SC.ErrorStyled style={{visibility:"hidden"}}>just an empty space</SC.ErrorStyled>}
        </div>
        <SC.SubmitButton>Get notified</SC.SubmitButton>
      </SC.FormStyled>
    </SC.GeneralWrapper>
  );
};

export default NotifiedForm;
