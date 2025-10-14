import { useState } from "react"

const useInput = (check: (value: string) => boolean) => {
  const [inputValue, setInputValue] = useState("")
  const [inputFocus, setInputFocus] = useState(false)

  const isValid = check(inputValue) && inputFocus
  const inValid = !isValid && inputFocus

  function changeInputValue(value: string) {
    setInputValue(value)
  }

  function changeInputFocus() {
    setInputFocus(true)
  }

  function reset() {
    setInputValue("")
    setInputFocus(false)
  }

  return {
    isValid,
    inValid,
    changeInputValue,
    changeInputFocus,
    reset,
    inputValue,
    inputFocus,
  }
}

export default useInput
