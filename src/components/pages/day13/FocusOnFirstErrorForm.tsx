import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const FocusOnFirstErrorForm = () => {
  const schema: RJSFSchema = {
    title: "Focus On First Error Form",
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

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
        focusOnFirstError
      />
    </div>
  )
}