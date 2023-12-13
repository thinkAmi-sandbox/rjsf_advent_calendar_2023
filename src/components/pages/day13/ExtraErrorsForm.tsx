import {ErrorSchema, RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const ExtraErrorsForm = () => {
  const schema: RJSFSchema = {
    title: "Extra Errors Form",
    type: "object",
    properties: {
      foo: {
        type: "object",
        properties: {
          bar: {
            type: "string",
            const: "bar"
          }
        }
      }
    }
  }

  // onSubmitの引数の説明は以下
  // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/form-props#onsubmit
  const onSubmit = ({formData}, _event) => {
    console.log(formData)
  }

  const extraErrors: ErrorSchema = {
    foo: {
      __errors: ["foo error"],
      bar: {
        __errors: ["bar error"]
      }
    }
  }


  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
        onSubmit={onSubmit}
        extraErrors={extraErrors}
        extraErrorsBlockSubmit // trueの場合、submitできない
      />
    </div>
  )
}