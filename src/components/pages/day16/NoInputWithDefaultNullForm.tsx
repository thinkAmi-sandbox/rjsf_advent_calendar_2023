import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const NoInputWIthDefaultNullForm = () => {
  const schema: RJSFSchema = {
    title: "No Input With Default Null Form",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: ["string", "null"],
        default: null,
      },
      integerInput: {
        type: ["integer", "null"],
        default: null,
      },
      numberInput: {
        type: ["number", "null"],
        default: null,
      },
      booleanInput: {
        type: ["boolean", "null"],
        default: null,
      },
      nullInput: {
        type: "null"
      },
      arrayInput: {
        type: ["array", "null"],
        default: null,
        items: {
          type: "object",
          properties: {
            stringInput: {
              type: ["string", "null"],
              default: null,
            },
            integerInput: {
              type: ["integer", "null"],
              default: null,
            }
          }
        }
      },

      // constやoneOfでエラーになるため、動作確認をするだけのここではコメントアウト
      // 'foo label' must be equal to constant
      // 'bar label' must be equal to constant
      // 'baz label' must be equal to constant
      // .enumLabelWithOneOf must match exactly one schema in oneOf
      // enumLabelWithOneOf: {
      //   type: ["string", "null"],
      //   default: null,
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