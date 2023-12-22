import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const DateFormatForm = () => {
    const schema: RJSFSchema = {
    title: "Date Format Form",
    type: "object",
    properties: {
      dateInput: {
        type: "string",
        format: "date"
      }
    }
  }

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
        formData={{
          // dateInput: '2023/12/22'  // 区切り文字が不正でエラーになる
          dateInput: '2023-12-22'  // ハイフン区切りが正しい
        }}
      />
    </div>
  )
}