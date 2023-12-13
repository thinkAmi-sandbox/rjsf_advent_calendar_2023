import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const ChildrenForm = () => {
  const schema: RJSFSchema = {
    title: "Children Form",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: "string"
      }
    }
  }

  // onSubmitの引数の説明は以下
  // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/form-props#onsubmit
  const onSubmit = ({formData}, _event) => {
    console.log(formData)
  }

  const onClick = () => { console.log("my button") }

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
        onSubmit={onSubmit}
      >
        <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained">MySubmit</Button>
          <Button type="button" variant="outlined" onClick={onClick}>MyButton</Button>
        </Stack>
      </Form>
    </div>
  )
}