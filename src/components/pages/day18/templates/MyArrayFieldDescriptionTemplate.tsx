import {ArrayFieldDescriptionProps, descriptionId} from "@rjsf/utils";

export const MyArrayFieldDescriptionTemplate = ({ description, idSchema }: ArrayFieldDescriptionProps) => {
  const id = descriptionId(idSchema)

  return (
    <p id={id} style={{color: "blue"}}>{description}</p>
  )
}