import { PropsWithChildren } from "react"

const LoadingSpinner: React.FC<PropsWithChildren> = (props) => {
  return (
    <main className=" bg-stone-200 dark:bg-stone-800 border-2 dark:border-stone-100 border-stone-700 z-20 dark:text-white p-10 text-center rounded-3xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  aspect-square ">
      <i className="fa-duotone  text-9xl  animate-spin fa-spinner-third"></i>
      <h1 className=" text-4xl">Loading...</h1>
    </main>
  )
}

export default LoadingSpinner
