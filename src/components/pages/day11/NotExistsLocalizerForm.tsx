import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import {customizeValidator} from "@rjsf/validator-ajv8";
import localizer from 'ajv-i18n' // npm installが必要

export const NotExistsLocalizerForm = () => {
  const schema: RJSFSchema = {
    title: "Not Exists Localizer Form",
    type: "object",
    required: [],
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

  const validator = customizeValidator({}, localizer.ja)

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
        noHtml5Validate
      />
    </div>
  )
}