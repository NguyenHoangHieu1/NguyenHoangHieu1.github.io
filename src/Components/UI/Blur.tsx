import { PropsWithChildren, useState } from "react"
import { createPortal } from "react-dom"

interface props {
  onChangeBlur?: () => void
}

const Blur: React.FC<props> = (props) => {
  const portalNode = document.getElementById("blur")!
  return createPortal(
    <div
      onClick={props.onChangeBlur}
      className="fixed top-0 left-0 w-screen h-screen bg-slate-800/50 z-20"
    ></div>,
    portalNode
  )
}

export default Blur
