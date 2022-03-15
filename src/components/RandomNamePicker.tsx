import {
  Text,
} from "@chakra-ui/react"



export function RandomNamePicker(props:any) {
    return (
      <Text fontSize='6xl'>
          {props.currentName}
      </Text>
    )
  }