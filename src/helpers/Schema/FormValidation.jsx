import * as Yup from "yup";

// login

export const LoginSchema = Yup.object({
  username_or_email: Yup.string()
    .min(4)
    .max(25)
    .required("Enter Your User Name or E-mail !"),
  password: Yup.string().required("Please Enter Your Password !"),
});

// Registration

export const RegisterSchema = Yup.object({
  account_type: Yup.string().required("Please Select Account Type !"),
  username: Yup.string().min(4).max(25).required("Enter Your User name  !"),
  email: Yup.string().email().required("Please Enter Your Email !"),
  password: Yup.string().min(6).required("Please Enter Your Password !"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must be  Match"),
  first_name: Yup.string().max(45).required("Please Enter Your Password !"),
  last_name: Yup.string().max(45).required("Please Enter Your Password !"),
  phone: Yup.string().required("Please Enter Your Password !"),
  // specialization: Yup.array()
  //   .min(1, "At least one specialization is required")
  //   .required("Specialization is required"),
});

// Employer Job Posting

export const JobPost = Yup.object().shape({
  contract_type: Yup.string().required("Contract type is required"),
  title: Yup.string().required("Job title is required"),
  remote_work: Yup.boolean(),
  addresses: Yup.array()
    .of(
      Yup.object().shape({
        state: Yup.string().required("State is required"),
        city: Yup.string().required("City is required"),
        zip_code: Yup.string().required("Zip code is required"),
      })
    )
    .min(1, "At least one address is required"),
  duration: Yup.string().required("Duration is required"),
  rate: Yup.string().required("Rate is required"),
  job_description: Yup.string().required("Job description is required"),
  work_authorization: Yup.array().of(Yup.string()),
  other_work_authorization: Yup.string(),
  specializations_skills: Yup.array().of(Yup.string()),
  job_posting_deadline: Yup.date()
    .required("Job posting deadline is required")
    .min(new Date(), "Deadline must be in the future"),
});

// forget Password

export const ForgetPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email !"),
});

// ManageProfile candidate

export const ManageProfileCandidate = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  gender: Yup.string()
    .oneOf(["male", "female"], "Invalid gender")
    .required("Gender is required"),
  date_of_birth: Yup.string().required("Date of Birth is required"),
  job_profession: Yup.string().required("Enter Your Profession "),
  address_1: Yup.string().required("Address 1 is required"),
  address_2: Yup.string(),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  phone: Yup.string().required("Phone number is required"),
  about: Yup.string(),
  cover_letter: Yup.string(),
  job_interest: Yup.mixed()
    .nullable()
    .required("please Add Your Job Interest "),
  minimum_salary: Yup.number()
    .min(0, "Minimum Salary must be a positive number")
    .required("Minimum Salary is required"),
  // avatar_image: Yup.mixed().required("Avatar Image is required"),
  // cv_file: Yup.mixed().required("CV File is required"),
  new_password: Yup.string().min(8, "Password must be at least 8 characters"),

  confirm_password: Yup.string().oneOf(
    [Yup.ref("new_password"), null],
    "Passwords must match"
  ),
});

// manage profile employer

export const ManageProfileEmployer = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),

  address1: Yup.string().required("Address 1 is required"),
  address2: Yup.string(),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  phone: Yup.string().required("Phone number is required"),
  website: Yup.string(),
  about: Yup.string(),
  // specialisms: Yup.string(),
  vacancies: Yup.string(),
  // avatarImage: Yup.mixed().required("Avatar Image is required"),
  newPassword: Yup.string().min(8, "Password must be at least 8 characters"),

  confirmPassword: Yup.string().oneOf(
    [Yup.ref("newPassword"), null],
    "Passwords must match"
  ),
});
