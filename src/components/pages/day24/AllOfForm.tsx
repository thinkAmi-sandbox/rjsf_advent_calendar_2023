import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

export const AllOfForm = () => {
  const schema: RJSFSchema = {
    title: "All Of Form",
    type: "object",
    properties: {
      animalInfo: {
        properties: {
          animal: {
            type: "string",
            default: "Cat",
            enum: ['Cat', 'Fish']
          }
        },
        allOf: [
          {
            if: {
              properties: {
                animal: {
                  const: 'Cat'
                }
              }
            },
            then: {
              properties: {
                food: {
                  type: "string",
                  default: "meat",
                  enum: ["meat", "grass", "fish"]
                }
              },
              required: ['food']
            }
          }
        ]
      }
    }
  }

  return (
    <div style={{width: '400px'}}>
      <Form schema={schema} validator={validator}
          experimental_defaultFormStateBehavior={{
            allOf: 'skipDefaults'
          }}
      />

      <hr />

      <Form schema={schema} validator={validator}
          experimental_defaultFormStateBehavior={{
            allOf: 'populateDefaults'
          }}
      />
    </div>
  )
}