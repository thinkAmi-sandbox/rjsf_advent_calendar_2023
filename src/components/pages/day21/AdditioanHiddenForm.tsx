import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const AdditioanHiddenForm = () => {
  const schema: RJSFSchema = {
    title: "Additional Object",
    type: "object",
    properties: {
      mainInput: {
        type: "string"
      }
    },
    additionalProperties: {
      type: "object",
      title: "my title",
      description: "my description",
      default: "Default",
      properties: {
        additionalString: {
          type: "string",
          title: "string title",
          description: "string description",
          default: "string default"
        },
        additionalInteger: {
          type: "integer",
          title: "integer title",
          description: "integer description",
          default: 10
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