import { PropsWithChildren } from "react"

const ButtonPurple: React.FC<PropsWithChildren> = (props) => {
  return (
    <button className="block mx-auto sm:inline-block bg-violet-500 opacity-70 text-white px-5 py-2 rounded-full sm:ml-5 mt-5 sm:mt-0 hover:opacity-100 transition">
      {props.children}
    </button>
  )
}

export default ButtonPurple
