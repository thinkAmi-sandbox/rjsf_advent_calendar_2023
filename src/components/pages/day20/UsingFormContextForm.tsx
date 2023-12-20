import {RegistryFieldsType, RegistryWidgetsType, RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import {MyFormContextWidget} from "./MyFormContextWidget";
import {MyFormContextField} from "./MyFormContextField";

export type MyFormContext = {
  fontSize: number
}

export type UsingFormContextFormField = {
  inputWidget: number
  inputField: string
}

export const UsingFormContextForm = () => {
  const schema: RJSFSchema = {
    title: "Using Form Context Form",
    type: "object",
    properties: {
      inputWidget: {
        type: "number",
        title: "Input Number Title"
      },
      inputField: {
        type: "string",
      }
    }
  }

  const widgets: RegistryWidgetsType = {
    myCustomWidget: MyFormContextWidget
  }

  const fields: RegistryFieldsType = {
    myCustomField: MyFormContextField
  }

  const uiSchema: UiSchema = {
    inputField: {
      "ui:field": "myCustomField"
    },
    inputWidget: {
      "ui:widget": "myCustomWidget",
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
        widgets={widgets}
        fields={fields}
        validator={validator}
        onSubmit={onSubmit}
        formContext={{
          fontSize: 40
        }}
      />
    </div>
  )
}