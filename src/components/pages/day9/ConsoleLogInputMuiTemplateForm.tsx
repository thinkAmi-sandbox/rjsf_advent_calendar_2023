import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import {ConsoleLogInputMuiTemplate} from "./templates/ConsoleLogInputMuiTemplate";

export const ConsoleLogInputMuiTemplateForm = () => {
  const schema: RJSFSchema = {
    title: "Console Log Input Mui Template Form",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: "string",
      },
      numberInput: {
        type: "number"
      }
    }
  }

  // onSubmitの引数の説明は以下
  // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/form-props#onsubmit
  const onSubmit = ({formData}, _event) => {
    console.log(formData)
  }

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        templates={{BaseInputTemplate: ConsoleLogInputMuiTemplate}}
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}