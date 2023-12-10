import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const DisabledHtml5ValidationForm = () => {
  const schema: RJSFSchema = {
    title: "Disabled HTML5 Validation Form",
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
        noHtml5Validate
      />
    </div>
  )
}