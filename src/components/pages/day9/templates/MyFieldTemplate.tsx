import {FieldTemplateProps} from "@rjsf/utils";

export const MyFieldTemplate = ({id, label, required, description, children}: FieldTemplateProps) => {
  return (
    <>
      <p>{"===="}{label}{"====>"}</p>
      <label htmlFor={id}>
        {required && <span style={{color: "blue"}}>{label}</span> }
        {!required && <span style={{color: "purple"}}>{label}</span> }
      </label>

      {<span style={{color: "green"} }>{description}</span>}
      {children}
      <p>{"<===="}{label}{"===="}</p>
    </>
  )
}