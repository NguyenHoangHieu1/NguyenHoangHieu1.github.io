import { PropsWithChildren } from "react"
document.body.onpointermove = ({ clientX, clientY }) => {
  const blur = document.querySelector(".followMouse")! as HTMLDivElement

  blur.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 1000, fill: "forwards" }
  )
}

const Mouse: React.FC<PropsWithChildren> = (props) => {
  return (
    <main className="followMouse fixed opacity-25 animate-rotating  w-96 h-96 bg-gradient-to-r from-indigo-500 to-blue-500 blur-3xl -translate-x-2/4 -translate-y-2/4 rounded-full -z-10 "></main>
  )
}

export default Mouse
