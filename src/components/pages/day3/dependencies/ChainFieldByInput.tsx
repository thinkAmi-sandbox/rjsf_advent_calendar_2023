import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const ChainFieldByInput = () => {
  const schema: RJSFSchema = {
    title: "Chain Field By Input",
    type: "object",
    required: [],
    properties: {
      firstInput: {
        type: "string",
      }
    },
    dependencies: {
      firstInput: {
        properties: {
          secondInput: { type: "string" }
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