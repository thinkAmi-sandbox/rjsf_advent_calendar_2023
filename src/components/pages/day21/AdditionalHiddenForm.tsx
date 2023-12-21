import {RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const AdditionalHiddenForm = () => {
  const schema: RJSFSchema = {
    title: "Additional Hidden",
    type: "object",
    properties: {
      mainInput: {
        type: "string"
      }
    },
    additionalProperties: {
      type: "object",
      title: "my title",
      description: "my description",
      default: "Default",
      properties: {
        hiddenString: {
          type: "string",
          title: "string title",
          description: "string description",
          default: "string default"
        }
      }
    }
  }

  const uiSchema: UiSchema = {
    additionalProperties: {
      hiddenString: {
        'ui:widget': 'hidden'
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