import { PropsWithChildren, ReactNode, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
interface props {
  children: ReactNode | undefined
  animation?: string
}

const Container: React.FC<props> = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }, [])
  return (
    <section data-aos="fade-up" className="container m-auto max-w-6xl">
      {props.children}
    </section>
  )
}

export default Container
