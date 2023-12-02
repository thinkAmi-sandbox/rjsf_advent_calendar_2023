import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
// import Form from "@rjsf/core"; // Bootstrap 3 version
import validator from "@rjsf/validator-ajv8";

export const DeprecatedEnumNames = () => {
  const schema: RJSFSchema = {
    title: "Duplicated enumNames",
    type: "object",
    required: [],
    properties: {
      // enumNamesはdeprecatedなので型エラーになる
      // https://rjsf-team.github.io/react-jsonschema-form/docs/migration-guides/v5.x%20upgrade%20guide/#non-standard-enumnames-property
      deprecatedEnumNames: {
        type: "string",
        enum: ["foo", "bar", "baz"],
        enumNames: ["foo label", "bar label", "baz label"]
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