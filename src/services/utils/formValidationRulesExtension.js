import React from 'react';
// import validator from 'validator';
import Validation from 'react-validation';

console.log('Validation: ', Validation);

// Object.assign(Validation.rules, {
//   api: {
//     hint: () => (
//       <button type="button" className="form-error is-visible">
//         Try Again
//       </button>
//     ),
//   },
//
//   required: {
//     rule: value => value.toString().trim(),
//     hint: () => (
//       <span className="form-error is-visible">
//         *Required
//       </span>
//     ),
//   },
//
//   boolRequired: {
//     rule: value => Boolean(value),
//     hint: () => (
//       <span className="form-error is-visible">
//         Required
//       </span>
//     ),
//   },
//
//   email: {
//     rule: value => validator.isEmail(value),
//     /* eslint-disable no-undef */
//     hint: value => (
//       <span className="form-error is-visible">
//         {'EMAIL_VALUE is not a valid Email. Please try again.'.replace(/EMAIL_VALUE/g, value)
//         }
//       </span>
//     ),
//     /* eslint-enable no-undef */
//   },
//
//   alpha: {
//     rule: value => validator.isAlpha(value),
//     hint: () => (
//       <span className="form-error is-visible">
//         Input must only contain letters.
//       </span>
//     ),
//   },
//
//   numeric: {
//     rule: value => validator.isNumeric(value),
//     hint: () => (
//       <span className="form-error is-visible">
//         Input must only contain numbers.
//       </span>
//     ),
//   },
//
//   'phone-startWithZero': {
//     rule: value => value[0] === '0',
//     hint: () => (
//       <span className="form-error is-visible">
//         {"Phone Number must start with '0'."}
//       </span>
//     ),
//   },
// });
