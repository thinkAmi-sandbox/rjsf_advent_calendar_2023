import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const AdditionalStringForm = () => {
  const schema: RJSFSchema = {
    title: "Additional String",
    type: "object",
    properties: {
      mainInput: {
        type: "string"
      }
    },
    additionalProperties: {
      type: "string",
      title: "my title",
      description: "my description",
      default: "Default",
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