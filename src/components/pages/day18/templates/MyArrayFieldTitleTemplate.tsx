import {ArrayFieldTitleProps, titleId} from "@rjsf/utils";

export const MyArrayFieldTitleTemplate = ({ title, idSchema }: ArrayFieldTitleProps) => {
  const id = titleId(idSchema)

  return (
    <h1 id={id} style={{color: "red"}}>{title}</h1>
  )
}