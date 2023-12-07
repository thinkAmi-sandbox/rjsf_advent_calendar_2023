import {WidgetProps} from "@rjsf/utils";
import TextField from '@mui/material/TextField';

export const CustomOptionWidget = (props: WidgetProps) => {
  const { options: { step } } = props

  const onChange = (event) => props.onChange(event.target.value)

  return (
    <TextField
      type="number"
      inputProps={{
        step: step
      }}
      onChange={onChange}
    />
  )
}

CustomOptionWidget.defaultProps = {
  options: {
    step: 13
  }
}