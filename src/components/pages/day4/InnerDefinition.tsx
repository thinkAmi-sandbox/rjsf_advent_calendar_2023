import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const InnerDefinition = () => {
  const schema: RJSFSchema = {
    title: "Inner Definition",
    type: "object",
    required: [],
    definitions: {
      apples: {
        type: 'number',
        oneOf: [
          { const: 10, title: 'フジ' },
          { const: 20, title: 'シナノゴールド' },
          { const: 30, title: '奥州ロマン'}
        ]
      }
    },
    properties: {
      like: {
        $ref: '#/definitions/apples', title: '好きなリンゴ',
      },
      want: {
        $ref: '#/definitions/apples', title: '食べたいリンゴ',
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