import { PropsWithChildren, ReactNode } from "react"
import { createPortal } from "react-dom"
interface props {
  animation?: string
  isAnimated?: boolean
  children?: ReactNode | undefined
}
const Card: React.FC<props> = (props) => {
  const portalNode = document.querySelector("#backdrop")!

  return createPortal(
    <main
      className={` motion-safe:${props.animation} dark:bg-slate-100 bg-slate-900 border-2 p-5  border-white w-96 aspect-square text-white z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
    >
      {props.children}
    </main>,
    portalNode
  )
}

export default Card
