import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const ChainFieldBySelection = () => {
  const schema: RJSFSchema = {
    title: "Chain Field By Selection",
    type: "object",
    properties: {
      question: {
        type: "string",
        title: "気になることを選んでください",
        oneOf: [
          { const: "food" },
          { const: "drink" },
          { const: "destination" }
        ],
        default: "food"
      }
    },
    dependencies: {
      question: {
        oneOf: [
          {
            properties: {
              question: { const: "food" },
              foodQuestion: { type: "string", title: "食べたいものを入力してください" }
            }
          },
          {
            properties: {
              question: { const: "drink" },
              drinkQuestion: { type: "string", title: "飲みたいものを入力してください" }
            }
          },
          {
            properties: {
              question: { const: "destination" },
              destinationQuestion: { type: "string", title: "行きたいところを入力してください" }
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