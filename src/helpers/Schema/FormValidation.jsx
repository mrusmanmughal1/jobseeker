import * as Yup from "yup";

export const LoginSchema = Yup.object({
  login: Yup.string()
    .min(4)
    .max(25)
    .required("Enter Your User Name or E-mail !"),
  password: Yup.string().required("Please Enter Your Password !"),
});

export const RegisterSchema = Yup.object({
  Account_type: Yup.string().required("Please Select Account Type !"),
  UserName: Yup.string().min(4).max(25).required("Enter Your User name  !"),
  Email: Yup.string().email().required("Please Enter Your Email !"),
  Password: Yup.string().min(6).required("Please Enter Your Password !"),
  ConfirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("Password"), null], "Passwords must be the Match"),
  FirstName: Yup.string().max(45).required("Please Enter Your Password !"),
  LastName: Yup.string().max(45).required("Please Enter Your Password !"),
  Specialization: Yup.string().required("Please Enter Your Password !"),
});

export const ContractType = Yup.object({
  Contract_type: Yup.string().required("Please Select A Contract Type !"),
  JobTitle: Yup.string().required("Please Write Job Title  !"),
  JobAddress: Yup.string().required("Please Provide Job Address!"),
  JobCity: Yup.string().required("Please Provide Job City  !"),
  ZipCode: Yup.string().required("Please Provide Zip Code  !"),
  JobDuration: Yup.string().required("Please Provide Duration !"),
  JobRate: Yup.string().required("Please  Provide Job rate  !"),
  JobDescription: Yup.string().required("Please  Provid Description !"),
  WorkAuthority: Yup.string().required("Please Provide Work Authority  !"),
  OtherWorkAuthority: Yup.string().required(
    "Please  Provide Other Authority  !"
  ),
  Specilization: Yup.string().required("Please Provide Specilization!"),
  JobDeadLine: Yup.string().required("Please Provide Job DeadLine !"),
});
