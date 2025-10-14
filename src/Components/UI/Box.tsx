import { PropsWithChildren } from "react"

const Box: React.FC<PropsWithChildren> = (props) => {
  return <div className="p-5">{props.children}</div>
}

export default Box
