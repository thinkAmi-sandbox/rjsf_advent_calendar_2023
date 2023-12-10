import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import {FormValidation} from "@rjsf/utils/src/types";


type FormData = {
  rangeFrom: number
  rangeTo: number
}

export const CustomValidationRuleForm = () => {
  const schema: RJSFSchema = {
    title: "Custom Validation Rule Form",
    type: "object",
    required: ["rangeFrom", "rangeTo"],
    properties: {
      rangeFrom: {
        type: "integer"
      },
      rangeTo: {
        type: "integer"
      }
    }
  }

  const customValidate = (formData: FormData, errors: FormValidation<FormData>): FormValidation<FormData> => {
    console.log(formData)

    if (formData.rangeFrom > formData.rangeTo) {
      // rangeToはrequiredなバリデーションの後にここへ来るので、今回は `!` を使っておく
      errors.rangeTo!.addError("rangeTo must be greater than rangeFrom")
    }

    return errors
  }

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
        customValidate={customValidate}
      />
    </div>
  )
}