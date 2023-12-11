import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import {customizeValidator} from "@rjsf/validator-ajv8";
import {RJSFValidationError} from "@rjsf/utils/src/types";
import localizer from "ajv-i18n";

export const LocalizerWithValidationMessageForm = () => {
  const schema: RJSFSchema = {
    title: "Localizer With Validation Message Form",
    type: "object",
    properties: {
      stringInput: {
        type: "string",
        const: "りんご"
      },
      integerInput: {
        type: "integer",
        minimum: 100
      }
    }
  }

  const transformErrors = (errors: RJSFValidationError[], _uiSchema: typeof schema) => {
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
      if (error.name === "const") {
        error.message = "指定した文字を入力してください"
        error.stack = "[Stack] 指定した文字を入力してください"
      }

      return error
    })
  }

  const validator = customizeValidator({}, localizer.ja)

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