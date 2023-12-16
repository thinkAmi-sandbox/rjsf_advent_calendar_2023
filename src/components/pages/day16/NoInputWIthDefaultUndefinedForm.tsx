import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const NoInputWIthDefaultUndefinedForm = () => {
  const schema: RJSFSchema = {
    title: "No Input With Default Undefined Form",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: "string",
        default: undefined,
      },
      integerInput: {
        type: "integer",
        default: undefined,
      },
      numberInput: {
        type: "number",
        default: undefined,
      },
      booleanInput: {
        type: "boolean",
        default: undefined,
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
              type: "string",
              default: undefined,
            },
            integerInput: {
              type: "integer",
              default: undefined,
            }
          }
        }
      },
      enumLabelWithOneOf: {
        type: "string",
        default: undefined,
        oneOf: [
          { "const": "foo", title: "foo label" },
          { "const": "bar", title: "bar label" },
          { "const": "baz", title: "baz label" },
        ]
      },
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