import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const OmitExtraDataForm = () => {
  const schema: RJSFSchema = {
    title: "Omit Extra Data Form",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: "string",
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
        formData={{
          stringInput: "foo",
          noFieldData: "nothing"
        }}
        omitExtraData
      />
    </div>
  )
}