import { PropsWithChildren, ReactNode } from "react"

interface props {
  position: string
  children?: ReactNode | undefined
  onClick?: () => void
  animation?: string
  isAnimated?: boolean
}

const AbsElement: React.FC<props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`fixed ${
        props.position
      } w-16 rounded-full cursor-pointer  z-30 aspect-square bg-slate-200 dark:bg-slate-800 ${
        props.isAnimated && props.animation
      } transition `}
    >
      {props.children}
    </button>
  )
}

export default AbsElement
