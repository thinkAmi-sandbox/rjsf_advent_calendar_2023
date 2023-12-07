import {RegistryWidgetsType, RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import {CustomOptionWidget} from "./widgets/CustomOptionWidget";

export const CustomOptionWidgetForm = () => {
  const schema: RJSFSchema = {
    title: "Custom Option Widget Form",
    type: "object",
    required: [],
    properties: {
      inputWithOption: {
        type: "number",
      },
      inputWithoutOption: {
        type: "number",
      }
    }
  }

  const uiSchema: UiSchema = {
    inputWithOption: {
      "ui:widget": "myCustomWidget",
      "ui:options": {
        step: 40
      },
    },
    inputWithoutOption: {
      "ui:widget": "myCustomWidget",
    }
  }

  const widgets: RegistryWidgetsType = {
    myCustomWidget: CustomOptionWidget
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
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}