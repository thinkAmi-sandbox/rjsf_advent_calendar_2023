import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const AdditionalUnsupportedTypeForm = () => {
  const schema: RJSFSchema = {
    title: "Additional Unsupported Type",
    type: "object",
    properties: {
      mainInput: {
        type: "string"
      }
    },
    additionalProperties: {
      type: "unsupported"
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
      />
    </div>
  )
}