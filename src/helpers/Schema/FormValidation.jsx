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
  specialization: Yup.array()
    .min(1, "At least one specialization is required")
    .required("Specialization is required"),
});

// Employer Job Posting

export const JobPost = Yup.object({
  contract_type: Yup.string().required("Please Select A Contract Type !"),
  title: Yup.string().required("Please Write Job Title  !"),
  remote_work: Yup.boolean()
    .required("The isRemote field is required")
    .oneOf([true, false], "The isRemote field must be true or false"),
  addresses: Yup.string().required("Please Provide Job Address!"),
  // JobCity: Yup.string().required("Please Provide Job City  !"),
  // ZipCode: Yup.string().required("Please Provide Zip Code  !"),
  duration: Yup.string().required("Please Provide Duration !"),
  rate: Yup.string().required("Please  Provide Job rate  !"),
  job_description: Yup.string().required("Please  Provid Description !"),
  // WorkAuthority: Yup.string().required("Please Provide Work Authority  !"),
  // OtherWorkAuthority: Yup.string().required(
  //   "Please  Provide Other Authority  !"
  // ),
  // Specilization: Yup.string().required("Please Provide Specilization!"),
  job_posting_deadline: Yup.string().required("Please Provide Job DeadLine !"),
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
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  gender: Yup.string()
    .oneOf(["Male", "Female"], "Invalid gender")
    .required("Gender is required"),
  dateOfBirth: Yup.string().required("Date of Birth is required"),
  address1: Yup.string().required("Address 1 is required"),
  address2: Yup.string(),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  phone: Yup.string().required("Phone number is required"),
  website: Yup.string(),
  about: Yup.string(),
  coverLetter: Yup.string(),
  jobInterests: Yup.string(),
  minimumSalary: Yup.number()
    .min(0, "Minimum Salary must be a positive number")
    .required("Minimum Salary is required"),
  avatarImage: Yup.mixed().required("Avatar Image is required"),
  cvFile: Yup.mixed().required("CV File is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
