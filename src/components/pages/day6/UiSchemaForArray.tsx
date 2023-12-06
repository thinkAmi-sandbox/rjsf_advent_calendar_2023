import {RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const UiSchemaForArray = () => {
  const schema: RJSFSchema = {
    title: "uiSchema for array",
    type: "array",
    items: {
      type: "object",
      properties: {
        stringInput: { type: "string" },
        numberInput: { type: "number" }
      }
    }
  }

  const uiSchema: UiSchema = {
    "ui:copyable": true,
    items: {
      stringInput: {
        "ui:help": "my array help"
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
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}