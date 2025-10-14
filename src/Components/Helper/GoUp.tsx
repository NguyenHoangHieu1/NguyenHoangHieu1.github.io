import { PropsWithChildren } from "react"
import AbsElement from "../UI/AbsElement"
function scrollWindow() {
  document.documentElement.scrollTop = 0
}
const GoUp: React.FC<PropsWithChildren> = (props) => {
  return (
    <AbsElement
      isAnimated={true}
      animation={"active:-translate-y-2"}
      onClick={scrollWindow}
      position={"bottom-5 right-5"}
    >
      <i className=" text-4xl absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 fa-duotone fa-up-long"></i>
    </AbsElement>
  )
}

export default GoUp
