import {WidgetProps} from "@rjsf/utils";

export const ConsoleLogWidget = (props: WidgetProps) => {
  const onChange = (event) => {
    console.log(event.target.value)

    // 元々のonChangeを呼んでformDataに反映する
    props.onChange(event.target.value)
  }

  return (
    <input
      type="text"
      onChange={onChange}
      />
  )
}