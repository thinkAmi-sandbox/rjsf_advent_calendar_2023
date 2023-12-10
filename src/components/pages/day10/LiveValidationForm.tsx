import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const LiveValidationForm = () => {
  const schema: RJSFSchema = {
    title: "Live Validation Form",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: "string",
        minLength: 3
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
        validator={validator}
        onSubmit={onSubmit}
        liveValidate
      />
    </div>
  )
}