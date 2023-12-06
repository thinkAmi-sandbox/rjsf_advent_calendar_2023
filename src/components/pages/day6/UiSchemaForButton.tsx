import {RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const UiSchemaForButton = () => {
  const schema: RJSFSchema = {
    title: "uiSchema for button",
    type: "object",
    required: [],
    properties: {
      stringInput: {
        type: "string",
      }
    }
  }

  const uiSchema: UiSchema = {
    "ui:submitButtonOptions": {
      submitText: "my submit",

      // classNameはpropsの中しか反映されない
      className: "MY_CLASS_FOO",

      props: {
        // submitTextはpropsの中に書くとwarningが出て、描画されない
        // react-dom.development.js:86 Warning: React does not recognize the `submitText` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `submittext` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
        // submitText: "my submit",

        className: "MY_CLASS"
      },
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
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}