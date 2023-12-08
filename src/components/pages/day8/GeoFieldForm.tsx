import {RegistryFieldsType, RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import {GeoField} from "./fields/GeoField";

export const GeoFieldForm = () => {
  const schema: RJSFSchema = {
    title: "Geo Field Form",
    type: "object",
    required: [],
    properties: {
      lat: {
        type: "number",
      },
      lon: {
        type: "number"
      }
    }
  }

  const uiSchema: UiSchema = {
    "ui:field": "geo",
  }

  const fields: RegistryFieldsType  = {
    geo: GeoField
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