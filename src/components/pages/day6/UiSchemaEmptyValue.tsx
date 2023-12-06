import {RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const UiSchemaEmptyValue = () => {
  const schema: RJSFSchema = {
    title: "uiSchema for emptyValue",
    type: "object",
    required: [],
    properties: {
      stringWithEmptyValue: {
        type: "string",
      },
      stringWithEmptyValueAndDefault: {
        type: "string",
        default: "foo"
      }
    }
  }

  const uiSchema: UiSchema = {
    stringWithEmptyValue: {
      "ui:options": {
        emptyValue: "empty"
      },
    },
    stringWithEmptyValueAndDefault: {
      "ui:options": {
        emptyValue: "empty"
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