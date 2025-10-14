import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const useAos = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }, [])

  return AOS
}

export default useAos
