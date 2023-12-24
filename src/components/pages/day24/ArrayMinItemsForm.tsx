import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const ArrayMinItemsForm = () => {
  const schema: RJSFSchema = {
    title: "Array Min Item",
    type: "object",
    required: ["requiredArray"],
    properties: {
      requiredArray: { type: "array", items: { type: "string" }, minItems: 1 },
      optionalArray: { type: "array", items: { type: "string" }, minItems: 1 }
    }
  }

  return (
    <div style={{width: '400px'}}>
      <Form schema={schema} validator={validator}
            experimental_defaultFormStateBehavior={{
              arrayMinItems: { populate: 'all' }
            }}
      />
      <hr />

      <Form schema={schema} validator={validator}
            experimental_defaultFormStateBehavior={{
              arrayMinItems: { populate: 'requiredOnly' }
            }}
      />
      <hr />

      <Form schema={schema} validator={validator}
            experimental_defaultFormStateBehavior={{
              arrayMinItems: { populate: 'never' }
            }}
      />
      <hr />
    </div>
  )
}