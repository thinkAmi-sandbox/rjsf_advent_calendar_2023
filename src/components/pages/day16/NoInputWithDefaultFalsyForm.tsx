import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const NoInputWithDefaultFalsyForm = () => {
  const schema: RJSFSchema = {
    title: "No Input With Default Falsy Form",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: "string",
        default: "",
      },
      integerInput: {
        type: "integer",
        default: 0,
      },
      numberInput: {
        type: "number",
        default: 0,
      },
      booleanInput: {
        type: "boolean",
        default: false,
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
              default: "",
            },
            integerInput: {
              type: "integer",
              default: 0,
            }
          }
        }
      },
      // falsyな値がないので、いったんコメントアウト
      // enumLabelWithOneOf: {
      //   type: "string",
      //   oneOf: [
      //     { "const": "foo", title: "foo label" },
      //     { "const": "bar", title: "bar label" },
      //     { "const": "baz", title: "baz label" },
      //   ]
      // },
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