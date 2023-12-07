import {WidgetProps} from "@rjsf/utils";

export const OverrideOriginalTextareaWidget = (props: WidgetProps) => {
  return (
    // onChangeで変更後の値をprops.onChangeに渡さないと、submit後のformDataに値が渡されない
    <textarea
      maxLength={10}
      rows={2}
      onChange={(e) => props.onChange(e.target.value)}
    />
  )
}