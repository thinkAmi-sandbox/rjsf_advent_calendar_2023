import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import {customizeValidator} from "@rjsf/validator-ajv8";
import {ErrorObject} from 'ajv';

export const NewLocalizerForm = () => {
  const schema: RJSFSchema = {
    title: "New Localizer Form",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: "string",
        const: "りんご"
      },
      integerInput: {
        type: "integer",
        minimum: 100
      }
    }
  }

  const localizer = (errors: null | ErrorObject[] = []) => {
    if (!(errors && errors.length)) return;

    errors.forEach(function (error) {
      let outMessage = ''

      switch (error.keyword) {
        case 'const': {
          outMessage = "指定した文字を入力してください"
          break
        }

        default: {
          outMessage = error.message.toString()
        }
      }

      error.message = outMessage
    })
  }

  const validator = customizeValidator({}, localizer)

  return (
    <div style={{width: '400px'}}>
      <Form
        schema={schema}
        validator={validator}
        noHtml5Validate
      />
    </div>
  )
}