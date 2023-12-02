import {RJSFSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";  // MUI version
import validator from "@rjsf/validator-ajv8";

export const SelectField = () => {
  const schema: RJSFSchema = {
    title: "Select Field",
    type: "object",
    required: [],
    properties: {
      stringEnum: {
        type: "string",
        enum: ["foo", "bar", "baz"]
      },
      enumLabelWithAnyOf: {
        type: "string",
        anyOf: [
          { type: "string", title: "foo label", enum: ["foo"] },
          { type: "string", title: "bar label", enum: ["bar"] },
          { type: "string", title: "baz label", enum: ["baz"] },
        ]
      },
      enumLabelWithOneOf: {
        type: "string",
        oneOf: [
          { "const": "foo", title: "foo label" },
          { "const": "bar", title: "bar label" },
          { "const": "baz", title: "baz label" },
        ]
      },
      nullableOneOf: {
        type: ["string", "null"],
        oneOf: [
          { "const": "foo", title: "foo label" },
          { "const": "bar", title: "bar label" },
          { "const": null, title: "null label" },
        ]
      },
      stringSelectWithDefault: {
        type: "string",
        oneOf: [
          { "const": "foo", title: "foo label(default)" },
          { "const": "bar", title: "bar label" },
          { "const": "baz", title: "baz label" },
        ],
        default: "foo"
      },
      booleanOneOf: {
        type: "boolean",
        oneOf: [
          { "const": true, title: "true label" },
          { "const": false, title: "false label" },
        ]
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
        validator={validator}
        onSubmit={onSubmit}
      />
    </div>
  )
}