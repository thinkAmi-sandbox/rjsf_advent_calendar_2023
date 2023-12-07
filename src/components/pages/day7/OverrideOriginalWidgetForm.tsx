import {RegistryWidgetsType, RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import {OverrideOriginalTextareaWidget} from "./widgets/OverrideOriginalWidget";

export const OverrideOriginalWidgetForm = () => {
  const schema: RJSFSchema = {
    title: "Override Original Widget Form",
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

  const widgets: RegistryWidgetsType = {
    TextareaWidget: OverrideOriginalTextareaWidget
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