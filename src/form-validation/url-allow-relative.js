import { Validator } from "vee-validate"
import isURL from "validator/lib/isURL"

const validatorOptions = {
  allow_protocol_relative_urls: true,
}

Validator.extend("url_allow_relative", {
  getMessage: field => `The ${field} field is not a valid URL.`,
  validate: value => isURL(value, validatorOptions),
})
