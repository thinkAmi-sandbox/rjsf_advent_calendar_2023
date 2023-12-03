import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const DependentSchemas = () => {
  const schema: RJSFSchema = {
    title: "[NOT WORKING] Dependent Schemas",
    type: "object",
    properties: {
      name: { type: "string" },
      credit_card: { type: "number" },
    },
    required: ["name"],
    dependentSchemas: {
      credit_card: {
        properties: {
          billing_address: { type: "string" }
        },
        required: ["billing_address"]
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