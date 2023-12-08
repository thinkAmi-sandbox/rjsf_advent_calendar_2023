import {FieldProps} from "@rjsf/utils";
import {useState} from "react";

export const GeoField = ({formData, onChange}: FieldProps) => {
  const [state, setState] = useState({ ...formData });

  const handleInputChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [name]: parseFloat(event.target.value),
    })
  }

  const handleComponentChange = () => {
    onChange(state)
  }

  return (
    <div>
      <input type="number" onChange={handleInputChange("lat")} />
      <input type="number" onChange={handleInputChange("lon")} onBlur={handleComponentChange} />
    </div>
  )
}