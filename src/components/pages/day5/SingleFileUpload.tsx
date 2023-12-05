import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";
import {useState} from "react";

export const SingleFileUpload = () => {
  const [data, setData] = useState("")

  const schema: RJSFSchema = {
    title: "Single File Upload",
    type: "object",
    required: [],
    properties: {
      singleFile: {
        type: "string",
        format: "data-url",
      }
    }
  }

  // onSubmitの引数の説明は以下
  // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/form-props#onsubmit
  const onSubmit = async ({formData}, _event) => {
    console.log(formData)

    const singleFile = formData.singleFile
    console.log(singleFile)

    setData(singleFile)

    const data = await dataUrlToBytes(singleFile)
    console.log(data)
  }

  const dataUrlToBytes = async (dataUrl) => {
    // ファイルの中身を取り出す
    // https://developer.mozilla.org/en-US/docs/Glossary/Base64
    const r = await fetch(dataUrl)
    const a = new Uint8Array(await r.arrayBuffer())
    return new TextDecoder().decode(a)
  }

  const getFileName = (data: string) => {
    return data.split(";")[1].replace("name=", "")
  }

  return (
    <div style={{width: "400px"}}>
      {data && (<div><iframe src={data} /></div>)}
      {data && (<div><a href={data} download={getFileName(data)}>ダウンロードリンク</a></div>)}

      <Form
        schema={schema}
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}