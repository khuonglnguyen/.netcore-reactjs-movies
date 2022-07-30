import * as Yup from "yup";

function configureValidation() {
  Yup.addMethod(Yup.string, "firstLetterUppercase", function () {
    return this.test(
      "first-letter-uppercase",
      "First letter must be uppercase",
      function (value) {
        if (value && value.length > 0) {
          const fisrtLetter = value.substring(0, 1);
          return fisrtLetter === fisrtLetter.toUpperCase();
        }
        return true;
      }
    );
  });
}

export default configureValidation;