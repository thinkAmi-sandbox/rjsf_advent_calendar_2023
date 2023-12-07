import {RegistryWidgetsType, RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import {ConsoleLogWidget} from "./widgets/ConsoleLogWidget";

export const ConsoleLogWidgetForm = () => {
  const schema: RJSFSchema = {
    title: "Console Log Widget Form",
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
        widget: "myCustomWidget",
      },
    }
  }

  const widgets: RegistryWidgetsType = {
    myCustomWidget: ConsoleLogWidget
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