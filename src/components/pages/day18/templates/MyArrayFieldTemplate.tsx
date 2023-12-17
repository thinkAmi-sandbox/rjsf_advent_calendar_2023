import {ArrayFieldTemplateProps} from "@rjsf/utils";

export const MyArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  const { title, items } = props

  return (
    <>
      <div style={{color: "orange"}}>{title}</div>
      {
        items && items.map((item) => {
          return (
            <div key={item.key}>{item.children}</div>
          )
        })
      }
    </>
  )
}