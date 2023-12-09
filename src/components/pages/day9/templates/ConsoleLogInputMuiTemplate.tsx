import {Templates} from "@rjsf/mui";
import {BaseInputTemplateProps} from "@rjsf/utils";

const { BaseInputTemplate } = Templates

export const ConsoleLogInputMuiTemplate = (props: BaseInputTemplateProps) => {
  const { onChange, options } = props

  const onMyChange = (v) => {
    console.log(v)

    onChange(v === '' ? options.emptyValue || '' : v)
  }

  return <BaseInputTemplate {...props} onChange={onMyChange} />
}