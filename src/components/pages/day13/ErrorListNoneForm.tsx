import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const ErrorListNoneForm = () => {
  const schema: RJSFSchema = {
    title: "Error List None Form",
    type: "object",
    required: [],
    properties: {
      foo: {
        type: "string",
        const: "foo"
      }
    }
  }

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
        showErrorList={false}
      />
    </div>
  )
}