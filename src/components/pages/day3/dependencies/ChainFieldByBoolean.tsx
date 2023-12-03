import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const ChainFieldByBoolean = () => {
  const schema: RJSFSchema = {
    title: "Chain Field By Boolean",
    type: "object",
    required: [],
    properties: {
      hungry: {
        type: "boolean",
        title: "おなかが空いてますか？",
        oneOf: [
          { const: true },
          { const: false },
        ],
        default: true
      }
    },
    dependencies: {
      hungry: {
        oneOf: [
          {
            properties: {
              hungry: { const: true },
              foodQuestion: { type: "string", title: "食べたいものを入力してください" }
            }
          },
          {
            properties: {
              hungry: { const: false },
              thirsty: { type: "boolean", title: "何か飲みたいですか？", default: true }
            }
          }
        ]
      },
      thirsty: {
        oneOf: [
          {
            properties: {
              thirsty: { const: true },
              drinkQuestion: { type: "string", title: "飲みたいものを入力してください" }
            }
          },
          {
            properties: {
              thirsty: { const: false },
              destinationQuestion: { type: "string", title: "行き先を入力してください" }
            }
          }
        ]
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
      />
    </div>
  )
}