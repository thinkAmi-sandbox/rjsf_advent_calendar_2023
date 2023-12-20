import {RJSFSchema, WidgetProps} from "@rjsf/utils";
import {MyFormContext, UsingFormContextFormField} from "./UsingFormContextForm";

type Props = WidgetProps<UsingFormContextFormField, RJSFSchema, MyFormContext>

export const MyFormContextWidget = ({formContext: {fontSize}, label, onChange}: Props) => {
  // 元々のonChangeを呼んでformDataに反映する
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)

  return (
    <>
      <label htmlFor="numberInput" style={{fontSize: fontSize}}>{label}</label>
      <input id="numberInput" type="number" style={{fontSize: fontSize}} onChange={handleChange} />
    </>
  )
}
