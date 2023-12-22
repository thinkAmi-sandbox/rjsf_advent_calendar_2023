import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import Stack from "@mui/material/Stack";
import {useState} from "react";

type MyFormData = {
  stringInput: string
}

type State = {
  key: Date
  formData: MyFormData
}

export const NotClearErrorFormFixed = () => {
  const [data, setData] = useState<State>({
    key: new Date(),
    formData: {
      stringInput: "foo"
    }
  })

  const schema: RJSFSchema = {
    title: "Fixed: Not Clear Error Form",
    type: "object",
    properties: {
      stringInput: {
        type: "string",
        minLength: 5
      }
    }
  }

  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript/8084248
  const onLoadData = () => setData({key: new Date(), formData: { stringInput: Math.random().toString(32).substring(2) }})
  const onClear = () => setData({key: new Date(), formData: {stringInput: ""}})

  return (
    <div style={{width: '400px'}}>
      <Form
        key={data.key}
        schema={schema}
        formData={data.formData}
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