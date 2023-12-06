import {RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const UiSchemaOption = () => {
  const schema: RJSFSchema = {
    title: "uiSchema option",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: "string",
      },
      stringInput2: {
        type: "string"
      }
    }
  }

  // どちらでも同じ結果になる
  // ui:optionsはまとめてかく方式
  // ただし、ui:optionsをネストできない
  const uiSchema: UiSchema = {
    stringInput: {
      "ui:options": {
        widget: "textarea",
        rows: 10,
      },
    },
    stringInput2: {
      "ui:widget": "textarea",
      "ui:rows": 10
    },
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
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}