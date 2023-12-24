import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const EmptyObjectFieldsForm = () => {
  const schema: RJSFSchema = {
    title: 'EmptyObjectFieldsForm',
    type: "object",
    required: ["requiredField"],
    properties: {
      requiredField: {
        type: "string",
        default: "foo"
      },
      optionalField: {
        type: "string",
        default: "bar"
      }
    }
  }

  return (
    <div style={{width: '400px'}}>
      <Form schema={schema} validator={validator}
        experimental_defaultFormStateBehavior={{
          emptyObjectFields: 'populateAllDefaults'
        }}
      />
      <hr />

      <Form schema={schema} validator={validator}
        experimental_defaultFormStateBehavior={{
          emptyObjectFields: 'populateRequiredDefaults'
        }}
      />
      <hr />

      <Form schema={schema} validator={validator}
        experimental_defaultFormStateBehavior={{
          emptyObjectFields: 'skipDefaults'
        }}
      />
      <hr />
    </div>
  )
}