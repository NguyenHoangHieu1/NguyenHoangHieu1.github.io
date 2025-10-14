import { PropsWithChildren, useEffect } from "react"
import useInput from "../../hooks/useInput"
import ButtonPurple from "../UI/ButtonPurple"
import Input from "../UI/Input"

import AOS from "aos"
import "aos/dist/aos.css"

const Update: React.FC<PropsWithChildren> = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  })

  const {
    inputValue: EmailValue,
    changeInputFocus: changeEmailFocus,
    changeInputValue: changeEmailValue,
    inValid: EmailInvalid,
    isValid: EmailIsValid,
    reset: EmailReset,
  } = useInput((value) => {
    if (
      /^([\w.%+-]+)@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|protonmail\.com|icloud\.com|zoho\.com|mail\.com|yandex\.com)$/.test(
        value
      )
    )
      return true
    else return false
  })

  let formSuccess = EmailIsValid
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formSuccess) {
      return
    }
    EmailReset()
  }

  const EmailClasses = EmailInvalid
    ? "!text-red-900 !border-red-900 !bg-red-400"
    : ""

  return (
    <section
      data-aos="fade-up"
      className="border-gray-700 text-center p-10 gap-10 border-2 bg-gray-800 md:grid md:grid-cols-2  m-auto max-w-6xl rounded-lg items-center"
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-slate-100">
          Updates Delivered to your mails!
        </h1>
        <p className="text-lg text-slate-400 font-semibold">
          All the posts relevant to me, coding and tips will be all delivered to
          you in seconds.
        </p>
        <code className="text-slate-100">
          No spam - Unsubscribe at any time !
        </code>
      </div>
      <div>
        <Input
          changedClasses={EmailClasses}
          inputValue={EmailValue}
          onBlur={changeEmailFocus}
          onChangeValue={changeEmailValue}
          width="fit"
        >
          Your Email!
        </Input>
        <ButtonPurple>Subscribe</ButtonPurple>
        <p className="text-slate-100">
          - subscribers -{" "}
          <a
            className="underline underline-offset-2 decoration-orange-500 "
            href=""
          >
            Issues
          </a>
        </p>
      </div>
    </section>
  )
}

export default Update
