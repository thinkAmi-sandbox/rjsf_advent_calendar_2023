import {RJSFSchema, RJSFValidationError} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const FocusOnFirstErrorWithCallbackForm = () => {
  const schema: RJSFSchema = {
    title: "Focus On First Error With Callback Form",
    type: "object",
    required: [],
    properties: {
      foo: {
        type: "string",
        const: "foo"
      },
      bar: {
        type: "string",
        const: "bar"
      },
      baz: {
        type: "string",
        const: "baz"
      }
    }
  }

  const callback = (error: RJSFValidationError) => console.log(error)

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
        focusOnFirstError={callback}
      />
    </div>
  )
}