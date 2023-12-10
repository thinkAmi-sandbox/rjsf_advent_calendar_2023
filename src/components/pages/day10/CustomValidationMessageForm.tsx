import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import {RJSFValidationError} from "@rjsf/utils/src/types";

export const CustomValidationMessageForm = () => {
  const schema: RJSFSchema = {
    title: "Custom Validation Message Form",
    type: "object",
    properties: {
      stringInput: {
        type: "string",
        format: "email"
      }
    }
  }

  const transformErrors = (errors: RJSFValidationError[], _uiSchema: typeof schema) => {
    console.log(errors)

    return errors.map((error) => {
      // errorsオブジェクトの例
      // {
      //     "name": "format",
      //     "property": ".stringInput",
      //     "message": "must match format \"email\"",
      //     "params": {
      //         "format": "email"
      //     },
      //     "stack": ".stringInput must match format \"email\"",
      //     "schemaPath": "#/properties/stringInput/format"
      // }
      if (error.property === '.stringInput' && error.name === 'format') {
        error.message = 'My email error message'
        error.stack = 'Stack error message'
      }

      return error
    })
  }

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
        transformErrors={transformErrors}
        noHtml5Validate
      />
    </div>
  )
}