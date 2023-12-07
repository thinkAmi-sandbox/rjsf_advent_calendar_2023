import {RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const SwitchWidgetForm = () => {
  const schema: RJSFSchema = {
    title: "Switch Widget Form",
    type: "object",
    required: [],
    properties: {
      textareaInput: {
        type: "string",
      }
    }
  }

  const uiSchema: UiSchema = {
    textareaInput: {
      "ui:options": {
        widget: "textarea",
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