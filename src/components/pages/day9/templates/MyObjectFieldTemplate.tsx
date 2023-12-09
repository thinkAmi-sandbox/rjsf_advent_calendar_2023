import {ObjectFieldTemplateProps} from "@rjsf/utils";

export const MyObjectFieldTemplate = ({ title, required, properties }: ObjectFieldTemplateProps) => {
  return (
    <div style={{marginTop: 50, marginBottom: 30}}>
      {required && <span style={{color: "red"}}>{title}</span> }
      {!required && title}

      {properties.map((element) => (
        <div>{element.content}</div>
      ))}
      <hr />
    </div>
  )
}