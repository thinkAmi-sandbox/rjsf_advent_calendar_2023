import {RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";
import {MyArrayFieldItemTemplate} from "./templates/MyArrayFieldItemTemplate";

export const MyArrayFieldItemForm = () => {
  const schema: RJSFSchema = {
    title: "My Array Field Item",
    type: "object",
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


  const uiSchema: UiSchema = {
    arrayInput: {
      'ui:options': {
        removable: false,
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
        templates={{
          ArrayFieldItemTemplate: MyArrayFieldItemTemplate
        }}
      />
    </div>
  )
}