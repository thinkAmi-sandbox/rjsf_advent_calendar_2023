import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const MultipleFileUpload = () => {
  const schema: RJSFSchema = {
    title: "Multiple File Upload",
    type: "object",
    required: [],
    properties: {
      multipleFile: {
        type: "array",
        items: {
          type: "string",
          format: "data-url"
        }
      }
    }
  }

  // onSubmitの引数の説明は以下
  // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/form-props#onsubmit
  const onSubmit = async ({formData}, _event) => {
    console.log(formData)
  }

  return (
    <div style={{width: "400px"}}>
      <Form
        schema={schema}
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}