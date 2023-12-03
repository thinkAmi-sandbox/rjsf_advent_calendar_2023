import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const RequiredFieldBySelection = () => {
  const schema: RJSFSchema = {
    title: "Required Field By Selection",
    type: "object",
    properties: {
      selection: {
        title: "好きなリンゴを選択してください",
        type: "string",
        oneOf: [
          { const: "fuji", title: "ふじ" },
          { const: "shinanoGold", title: "シナノゴールド" },
          { const: "other", title: "その他" },
        ]
      },
      note: { type: "string", title: "備考" },
    },
    dependencies: {
      selection: {
        oneOf: [
          {
            properties: {
              selection: { const: "fuji" },
            },
          },
          {
            properties: {
              selection: { const: "shinanoGold" },
            },
          },
          {
            properties: {
              selection: { const: "other" },
              note: { type: "string", title: "ここに好きなリンゴを入力してください" },
            },
            required: ["note"],
          },
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