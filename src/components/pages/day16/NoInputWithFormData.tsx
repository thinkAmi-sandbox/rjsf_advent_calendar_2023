import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const NoInputWithFormData = () => {
  const schema: RJSFSchema = {
    title: "No Input With Form Data",
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
      arrayInput: {
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
        formData={{
          stringInput: undefined,
          noField: undefined
        }}
      />
    </div>
  )
}