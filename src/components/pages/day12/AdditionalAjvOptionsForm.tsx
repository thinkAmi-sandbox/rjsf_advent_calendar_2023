import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import {customizeValidator} from "@rjsf/validator-ajv8";
import {CustomValidatorOptionsType} from "@rjsf/validator-ajv8/src/types"; // npm installが必要

export const AdditionalAjvOptionsForm = () => {
  const schema: RJSFSchema = {
    title: "Additional Ajx Option Form",
    type: "object",
    $comment: "my comment",
    properties: {
      stringInput: {
        type: "string",
        minLength: 5,
        // https://json-schema.org/understanding-json-schema/reference/regular_expressions#example
        pattern: "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$"
      }
    }
  }

  const options: CustomValidatorOptionsType = {
    ajvOptionsOverrides: {
      // https://ajv.js.org/options.html#allerrors
      allErrors: true,
      // https://ajv.js.org/options.html#comment
      $comment: true,
    }
  }

  const validator = customizeValidator(options)

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
      />
    </div>
  )
}