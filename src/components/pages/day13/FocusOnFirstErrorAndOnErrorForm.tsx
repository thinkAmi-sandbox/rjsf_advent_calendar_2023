import {RJSFSchema, RJSFValidationError} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const FocusOnFirstErrorAndOnErrorForm = () => {
  const schema: RJSFSchema = {
    title: "Focus On First Error And On Error Form",
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

  const callback = (error: RJSFValidationError) => console.log("callback",  error)

  const onError = (error: RJSFValidationError[]) => console.log("onError", error)

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
        focusOnFirstError={callback}
        onError={onError}
      />
    </div>
  )
}