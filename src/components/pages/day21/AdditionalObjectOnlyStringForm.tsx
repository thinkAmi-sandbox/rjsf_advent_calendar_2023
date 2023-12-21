import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const AdditionalObjectOnlyStringForm = () => {
  const schema: RJSFSchema = {
    title: "Additional Object Only String",
    type: "object",
    properties: {
      mainInput: {
        type: "string"
      }
    },
    additionalProperties: {
      type: "object",
      properties: {
        additionalString: {
          type: "string",
          title: "additional title",
          description: "additional description",
          default: "string default"
        }
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
      />
    </div>
  )
}