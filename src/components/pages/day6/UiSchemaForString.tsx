import {RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const UiSchemaForString = () => {
  const schema: RJSFSchema = {
    title: "uiSchema for string",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: "string",
      }
    }
  }

  const uiSchema: UiSchema = {
    stringInput: {
      "ui:options": {
        help: "my help text",
        description: "my description",
        placeholder: "my placeholder",
        title: "my title"
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
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}