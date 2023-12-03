import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const RequiredFieldByIf = () => {
  const schema: RJSFSchema = {
    title: "Required Field By If-Then",
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
    if: {
      properties: {
        selection: { const: "other" },
      },
      required: ["selection"] // これがないと、何も選択していないときにもnoteがrequiredになる
    },
    then: {
      required: ["note"],
      properties: {
        note: { type: "string", title: "ここに好きなリンゴを入力してください" },
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