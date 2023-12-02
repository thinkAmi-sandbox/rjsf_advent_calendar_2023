import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
// import Form from "@rjsf/core"; // Bootstrap 3 version
import validator from "@rjsf/validator-ajv8";

export const TypeOnly = () => {
  const schema: RJSFSchema = {
    title: "Type Only",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: "string",
      },
      integerInput: {
        type: "integer"
      },
      numberInput: {
        type: "number"
      },
      booleanInput: {
        type: "boolean"
      },
      nullInput: {
        type: "null"
      },
      Array: {
        type: "array",
        items: {
          type: "object",
          properties: {
            stringInput: {
              type: "string"
            },
            integerInput: {
              type: "integer"
            }
          }
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