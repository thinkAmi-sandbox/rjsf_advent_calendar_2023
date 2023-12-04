import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import jsonFile from "./definition.json"

export const ImportJsonSchema = () => {
  // onSubmitの引数の説明は以下
  // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/form-props#onsubmit
  const onSubmit = ({formData}, _event) => {
    console.log(formData)
  }

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={jsonFile}
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}