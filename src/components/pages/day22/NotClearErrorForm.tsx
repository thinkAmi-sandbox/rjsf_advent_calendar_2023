import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import Stack from "@mui/material/Stack";
import {useState} from "react";

type MyFormData = {
  stringInput: string
}

export const NotClearErrorForm = () => {
  const [formData, setFormData] = useState<MyFormData>({
    stringInput: "foo"
  })

  const schema: RJSFSchema = {
    title: "Not Clear Error Form",
    type: "object",
    properties: {
      stringInput: {
        type: "string",
        minLength: 5
      }
    }
  }

  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript/8084248
  const onLoadData = () => setFormData({stringInput: Math.random().toString(32).substring(2) })
  const onClear = () => setFormData({stringInput: ""})

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        formData={formData}
        validator={validator}
      >
        <Stack direction={"row"} spacing={2}>
          <button type="submit">Submit</button>
          <button type="button" onClick={onLoadData}>Load another data</button>
          <button type="button" onClick={onClear}>Clear</button>
        </Stack>
      </Form>
    </div>
  )
}