const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateContactInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.phone = !isEmpty(data.phone) ? data.phone : '';
  data.message = !isEmpty(data.message) ? data.message : '';

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First name is required.';
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last name is required.';
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'First name is required.';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'First name is required.';
  }

  if (Validator.isEmpty(data.message)) {
    errors.message = 'First name is required.';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
