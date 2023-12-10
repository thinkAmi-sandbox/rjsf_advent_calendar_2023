import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const EnabledHtml5ValidationForm = () => {
  const schema: RJSFSchema = {
    title: "Enabled HTML5 Validation Form",
    type: "object",
    required: ["stringInput"],
    properties: {
      stringInput: {
        type: "string",
      }
    }
  }

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
      />
    </div>
  )
}