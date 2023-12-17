import {ArrayFieldTemplateItemType} from "@rjsf/utils";

export const MyArrayFieldItemTemplate = (props: ArrayFieldTemplateItemType) => {
  const { hasMoveUp, hasMoveDown, hasRemove, hasToolbar, children, index } = props

  console.log("=========================>")
  console.log(index)
  console.log("hasMoveUp", hasMoveUp)
  console.log("hasMoveDown", hasMoveDown)
  console.log("hasRemove", hasRemove)
  console.log("hasToolbar", hasToolbar)

  return (
    <>
      <div style={{color: "darkkhaki"}}>Field Item</div>
      <div>{children}</div>
    </>
  )
}