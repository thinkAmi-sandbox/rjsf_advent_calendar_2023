import {FieldProps} from "@rjsf/utils";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const EnumListField = ({schema, formData, onChange}: FieldProps) => {
  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...formData,
      [name]: event.target.value,
    })
  }

  return (
    <>
      <List>
        {schema.properties['enumLabelWithOneOf'].oneOf.map((f, i) => {
          return (
            <ListItem key={i}>
              <ListItemText primary={f.title} secondary={f.const} />
            </ListItem>
          )})
        }
      </List>

      <input type="text" onChange={handleChange('stringInput')} />
    </>
  )
}