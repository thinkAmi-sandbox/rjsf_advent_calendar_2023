import {RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

export const EmptyValueWithOriginalThemeForm = () => {
  const schema: RJSFSchema = {
    title: "Empty Value With Original Theme",
    type: "object",
    required: [],
    properties: {
      enumLabelWithOneOf: {
        type: "string",
        oneOf: [
          { "const": "foo", title: "foo label" },
          { "const": "bar", title: "bar label" },
          { "const": "baz", title: "baz label" },
        ],
      }
    }
  }

  const uiSchema: UiSchema = {
    enumLabelWithOneOf: {
      "ui:options": {
        emptyValue: "foo"
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
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}