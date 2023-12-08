import {RegistryFieldsType, RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import {EnumListField} from "./fields/EnumListField";

export const EnumListFieldForm = () => {
  const schema: RJSFSchema = {
    title: "Enum List Field",
    type: "object",
    required: [],
    properties: {
      enumLabelWithOneOf: {
        type: "string",
        oneOf: [
          { "const": "foo", title: "foo label" },
          { "const": "bar", title: "bar label" },
          { "const": "baz", title: "baz label" },
        ]
      },
      stringInput: {
        type: "string",
      }
    }
  }

  const uiSchema: UiSchema = {
    "ui:field": "enumList",
  }

  const fields: RegistryFieldsType  = {
    enumList: EnumListField
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
        fields={fields}
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}