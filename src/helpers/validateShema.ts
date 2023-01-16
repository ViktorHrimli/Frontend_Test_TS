import * as yup from "yup";
import { patternEmail, patternPhone } from "./pattern";

// const shema = yup.object({
//   name: yup.string().required().min(2).max(60),
//   email: yup
//     .string()
//     .min(2)
//     .max(60)
//     .required()
//     .matches(patternEmail, "Email should be (yourmail@mail.domen)"),
//   phone: yup.string().required().matches(patternPhone, "+38 (XXX) XXX XXX"),
//   position: yup.string().required(),
//   // files: yup.object({
//   //   FileList: yup.object({
//   //     File: yup.object({
//   //       name: yup.string().required(),
//   //     }),
//   //   }),
//   // }),
// });

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
