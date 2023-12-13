import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const NoValidateForm = () => {
  const schema: RJSFSchema = {
    title: "No Validate Form",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: "string",
        format: "uuid"
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
      {/*
        noValidateはdeprecatedになっている
        https://github.com/rjsf-team/react-jsonschema-form/blob/v5.15.1/packages/core/src/components/Form.tsx#L156-L158
      */}
      <Form
        schema={schema}
        validator={validator}
        onSubmit={onSubmit}
        noValidate
      />
    </div>
  )
}