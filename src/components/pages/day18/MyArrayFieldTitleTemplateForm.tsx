import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui"; // MUI version
import validator from "@rjsf/validator-ajv8";
import {MyArrayFieldTitleTemplate} from "./templates/MyArrayFieldTitleTemplate";

export const MyArrayFieldTitleTemplateForm = () => {
  const schema: RJSFSchema = {
    type: "object",
    title: "My Array Field Title Template",
    description: "root description",
    properties: {
      arrayInput: {
        type: "array",
        title: "array input title",
        description: "array input description",
        items: {
          type: "object",
          title: "item title",
          description: "item description",
          properties: {
            stringInput: {
              type: "string",
              title: "string title",
              description: "string description"
            },
            integerInput: {
              type: "integer",
              title: "integer title",
              description: "integer description"
            }
          }
        }
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
        validator={validator}
        onSubmit={onSubmit}
        templates={{
          ArrayFieldTitleTemplate: MyArrayFieldTitleTemplate
        }}
      />
    </div>
  )
}