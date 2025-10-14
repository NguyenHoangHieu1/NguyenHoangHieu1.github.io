import { PropsWithChildren, ReactNode } from "react"

interface props {
  children?: ReactNode | undefined
  width?: string
  onBlur?: () => void
  onChangeValue: (value: string) => void
  inputValue: string
  changedClasses: string
}

const Input: React.FC<props> = (props) => {
  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChangeValue(event.target.value)
  }

  return (
    <input
      value={props.inputValue}
      onChange={onChangeInput}
      className={`rounded-full text-slate-900 dark:text-slate-100 dark:placeholder-gray-50 placeholder-gray-900 ${props.changedClasses} dark:bg-slate-900 dark:border-white border-2 outline-none py-2 px-5 w-${props.width} `}
      type="text"
      onBlur={props.onBlur}
      placeholder={props.children?.toString()}
    />
  )
}

export default Input
