import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import {MyObjectFieldTemplate} from "./templates/MyObjectFieldTemplate";
import {MyFieldTemplate} from "./templates/MyFieldTemplate";

export const MyObjectFieldTemplateForm = () => {
  const schema: RJSFSchema = {
    title: "root object title",
    description: "root object description",
    type: "object",
    required: ["nestObject"],
    properties: {
      nestObject: {
        type: "object",
        description: "nest object description",
        title: "nest object title",
        required: ["stringInput"],
        properties: {
          stringInput: {
            type: "string",
            title: "nest string title",
            description: "nest string description"
          },
          numberInput: {
            type: "number",
            title: "nest number title",
            description: "nest number description"
          }
        }
      },
      rootInput: {
        type: "string",
        description: "root input description",
        title: "root input title"
      }
    }
  }

  const templates = {
    ObjectFieldTemplate: MyObjectFieldTemplate
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
        templates={templates}
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}