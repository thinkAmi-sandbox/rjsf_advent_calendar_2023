import {asNumber, guessType, localToUTC, pad, parseDateString, RJSFSchema, toDateString, utcToLocal} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const TransformationFunctionForm = () => {
  const schema: RJSFSchema = {
    title: "Transformation Function",
    type: "object",
    properties: {
      datetimeInput: {
        type: "string",
        format: "date-time",
        default: "2023-12-19 00:00:00"
      },
      integerInput: {
        type: "integer"
      },
      stringInput: {
        type: "string"
      }
    }
  }

  // onSubmitの引数の説明は以下
  // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/form-props#onsubmit
  const onSubmit = ({formData}, _event) => {
    console.log(formData)
    console.log(formData.datetimeInput) // => 2023-12-19 00:00:00

    // https://qiita.com/south37/items/c8d20a069fcbfe4fce85
    const toString = Object.prototype.toString
    console.log(toString.call(formData.datetimeInput))  // => [object String]
    console.log(toString.call(formData.integerInput))   // => [object Number]
    console.log(toString.call(new Date()))              // => [object Date]

    // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/utility-functions#guesstype
    console.log(guessType(formData.datetimeInput)) // => string
    console.log(guessType(formData.integerInput))  // => number
    console.log(guessType(new Date()))             // => number

    // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/utility-functions/#parsedatestring
    console.log(toString.call(parseDateString(formData.datetimeInput, true))) // [[object Object]]
    console.log(parseDateString(formData.datetimeInput, false)) //
    console.log(parseDateString(formData.datetimeInput, true))  //

    const dateObject = parseDateString(formData.datetimeInput, true)
    // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/utility-functions/#todatestring
    console.log(toDateString(dateObject, false))
    console.log(toDateString(dateObject, true))

    // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/utility-functions/#localtoutc
    console.log(toString.call(localToUTC(formData.datetimeInput))) // [[object String]]
    console.log(localToUTC(formData.datetimeInput))

    // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/utility-functions/#utctolocal
    console.log(utcToLocal(formData.datetimeInput))
    console.log(utcToLocal(`${formData.datetimeInput}Z`))  // 末尾に "Z" を付与してUTC化

    // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/utility-functions/#pad
    // 3 -> 0003
    // 30000 -> 30000
    // undefined -> undefined
    console.log(pad(formData.integerInput, 4))

    // https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/utility-functions/#asnumber
    console.log(asNumber(formData.stringInput))

  }

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}