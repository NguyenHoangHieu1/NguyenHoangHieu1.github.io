import { PropsWithChildren, ReactNode } from "react"
import { createPortal } from "react-dom"

interface props {
  position?: string
  styles?: string
  children?: ReactNode | undefined
}

const BackDrop: React.FC<props> = ({ position, styles, children }) => {
  const portalNode = document.querySelector("#backdrop")!
  return (
    <>
      {createPortal(
        <section className={`fixed ${position} ${styles}`}>{children}</section>,
        portalNode
      )}
    </>
  )
}

export default BackDrop
