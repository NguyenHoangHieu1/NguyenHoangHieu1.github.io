import { PropsWithChildren, ReactNode } from "react"

interface props {
  children?: ReactNode | undefined
  onClick: () => void
}

const Button: React.FC<props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className=" sm:inline-block  text-lg group mr-5 font-semibold border-2 my-3 border-slate-200  rounded-full py-2 px-7 bg-slate-200 text-slate-800 hover:border-slate-100 hover:bg-slate-100 transition"
    >
      {props.children} <span className="hidden group-hover:inline">-</span>&gt;
    </button>
  )
}

export default Button
