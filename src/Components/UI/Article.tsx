import { PropsWithChildren } from "react"
import Box from "./Box"

interface props {
  article: {
    imageSrc: string
    title: string
    date: string
  }
}

const Article: React.FC<props> = ({ article }) => {
  return (
    <article className="w-96 aspect-square relative p-5 ">
      <div className="overflow-hidden rounded-lg  ">
        <img
          src={article.imageSrc}
          className=" h-5/6 hover:scale-150  w-fit hover:opacity-70 cursor-pointer transition "
          alt=""
        />
      </div>
      <h2 className="text-2xl text-semibold py-3">{article.title}</h2>
      <p className="dark:dark:text-zinc-200 font-semibold">{article.date}</p>
    </article>
  )
}

export default Article
