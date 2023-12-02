import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
// import Form from "@rjsf/core"; // Bootstrap 3 version
import validator from "@rjsf/validator-ajv8";

export const StringFormat = () => {
  const schema: RJSFSchema = {
    title: "String Format",
    type: "object",
    required: [],
    properties: {
      defaultInput: {
        type: "string",
      },
      emailFormat: {
        type: "string",
        format: "email"
      },
      uriFormat: {
        type: "string",
        format: "uri"
      },
      dataUrlFormat: {
        type: "string",
        format: "data-url"
      },
      dateFormat: {
        type: "string",
        format: "date"
      },
      datetimeFormat: {
        type: "string",
        format: "date-time"
      },
      timeFormat: {
        type: "string",
        format: "time"
      },
      altDatetimeFormat: {
        type: "string",
        format: "alt-datetime"
      },
      altDateFormat: {
        type: "string",
        format: "alt-date"
      },
      ipv4Format: {
        type: "string",
        format: "ipv4"
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