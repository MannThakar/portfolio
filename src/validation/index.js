// formValidation.js
import validator from "validator";

const validateForm = ({ name, email, message }) => {
  const errors = {};

  if (validator.isEmpty(name || "")) {
    errors.name = "Name is required";
  }

  if (!validator.isEmail(email || "")) {
    errors.email = "Invalid email address";
  }

  if (validator.isEmpty(message || "")) {
    errors.message = "Message is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export default validateForm;
