import * as yup from "yup";
import { patternEmail, patternPhone } from "./pattern";

const validateName = yup.string().required().min(2).max(60);

const validateEmail = yup
  .string()
  .min(2)
  .max(60)
  .required()
  .matches(
    patternEmail,
    "User email, must be a valid email according to RFC2822"
  );

const validatePhone = yup
  .string()
  .required()
  .matches(patternPhone, "+38 (XXX) XXX XXX");

export { validateName, validateEmail, validatePhone };
