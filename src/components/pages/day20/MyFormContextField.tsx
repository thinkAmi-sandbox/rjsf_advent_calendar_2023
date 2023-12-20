import {FieldProps, RJSFSchema} from "@rjsf/utils";
import Typography from '@mui/material/Typography';
import {MyFormContext, UsingFormContextFormField} from "./UsingFormContextForm";

type Props = FieldProps<UsingFormContextFormField, RJSFSchema, MyFormContext>

export const MyFormContextField = ({formContext: {fontSize}, title, onChange}: Props ) => {
  // 元々のonChangeを呼んでformDataに反映する
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)

  return (
    <>
      <Typography
        sx={{
          fontSize: fontSize
        }}
      >
        Typography Title: {title}
      </Typography>
      <input type="string" style={{fontSize: fontSize}} onChange={handleChange} />
    </>
  )
}
