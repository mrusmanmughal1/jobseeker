import * as Yup from "yup";

// login

export const LoginSchema = Yup.object({
  username_or_email: Yup.string().required("Enter Your User Name or E-mail !"),
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
  first_name: Yup.string().max(45).required("Please Enter Your First Name !"),
  last_name: Yup.string().max(45).required("Please Enter Your Last Name !"),
  phone: Yup.string().required("Please Enter Your Phone Number !"),
  // specialization: Yup.array()
  //   .min(1, "At least one specialization is required")
  //   .required("Specialization is required"),
});

// Employer Job Posting

export const JobPost = Yup.object().shape({
  contract_type: Yup.string().required("Contract type is required"),
  title: Yup.string().required("Job title is required"),
  remote_work: Yup.boolean(),
  // addresses: Yup.array().when("remote_work", {
  //   is: false, // only validate when remote_work is false
  //   then: Yup.array()
  //     .of(
  //       Yup.object().shape({
  //         state: Yup.string().required("State is required"),
  //         city: Yup.string().required("City is required"),
  //         zip_code: Yup.string().required("Zip code is required"),
  //       })
  //     )
  //     .min(1, "At least one address is required") // Ensure at least one address is provided
  //     .required("Addresses are required"), // Required when remote_work is false
  //   otherwise: Yup.array().notRequired(), // If remote_work is true, addresses are not required
  // }),
  duration: Yup.string().required("Duration is required"),
  minimum_experience: Yup.string().required(
    "Please Provide  Minimun Experience"
  ),
  rate: Yup.number()
    .required("Rate is required")
    .integer("Rate must be an integer") // Ensures that rate must be an integer
    .positive("Rate must be a positive number"), // Optionally ensure it's po
  skill_level: Yup.string().required("Select Skills Level"),
  job_description: Yup.string().required("Job description is required"),
  work_authorization: Yup.array()
    .of(Yup.string())
    .required("Please Provide Work Authorizations"),
  // other_work_authorization: Yup.string(),
  working_hours: Yup.string().required("Please Provide Working Hours"),
  specializations_skills: Yup.array()
    .of(Yup.string())
    .required("Please provide Specializations "),
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
  experience: Yup.string().required("Enter Experience  in Years"),
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

  address_1: Yup.string().required("Address 1 is required"),
  address_2: Yup.string(),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  phone: Yup.string().required("Phone number is required"),
  website: Yup.string()
    .url("Enter a valid website URL") // Checks if the string is a valid URL
    .required("Enter Your Website"),
  about: Yup.string(),
  // specialisms: Yup.string(),
  vacancies: Yup.string(),
  // avatarImage: Yup.mixed().required("Avatar Image is required"),
  newPassword: Yup.string().min(6, "Password must be at least 8 characters"),

  confirmPassword: Yup.string().oneOf(
    [Yup.ref("newPassword"), null],
    "Passwords must match"
  ),
});

// Interview Module

export const IntervireOnCall = Yup.object({
  interview_type: Yup.string().required("Select Interview Type required"),
  interviewer_name: Yup.string().required("Enter Interviewer Name"),
  interviewer_phone: Yup.string().required("Enter Interviewer Phone Number"),
  // date_time_start: Yup.string().required(" Start Time is Required"),
  // date_time_end: Yup.string().required("End Time is Requird"),
});
export const InterviewOnVideos = Yup.object({
  interview_type: Yup.string().required("Select Interview Type required"),
  interviewer_name: Yup.string().required("Enter Interviewer Name"),
  video_meeting_link: Yup.string().required("Enter Meeting Link"),
  date_time_start: Yup.string().required(" Start Time is Required"),
  date_time_end: Yup.string().required("End Time is Requird"),
});

export const IntervireOnsite = Yup.object({
  interview_type: Yup.string().required("Select Interview Type required"),
  interviewer_name: Yup.string().required("Enter Interviewer Name"),
  interviewer_phone: Yup.string().required("Enter Interviewer Phone Number"),
  location: Yup.string().required("Enter Location required"),
  // date_time_start: Yup.date()
  //   .required(" Start Time is Required")
  //   .min(new Date(), "Deadline must be in the future"),
  // date_time_end: Yup.date()
  //   .required(" Start Time is Required")
  //   .min(new Date(), "Deadline must be in the future"),
});
