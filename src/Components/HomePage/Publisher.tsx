import { PropsWithChildren, useEffect } from "react"

import Article from "../UI/Article"
import Button from "../UI/Button"
import AOS from "aos"
import "aos/dist/aos.css"

interface props {
  articles: { imageSrc: string; title: string; date: string }[]
}

const Publisher: React.FC<props> = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  })

  const loadedArticles = props.articles.map((article, index) => {
    return <Article key={index} article={article} />
  })

  return (
    <section
      data-aos="fade-up"
      className="text-center sm:text-left container m-auto max-w-6xl px-2 "
    >
      <h1 className="text-4xl text-semibold">
        I love to share my knowledge to everyone. Especially Gaming Knowledge
      </h1>
      <p className="dark:text-zinc-200 text-slate-800">
        Here are some tutorials of how to make games in Javascript.
      </p>
      <div className=" flex flex-col items-center mx-auto  sm:text-left my-5  sm:flex-row gap-5  sm:gap-8 ">
        {loadedArticles}
      </div>
      <Button onClick={() => {}}>See All Articles</Button>
    </section>
  )
}

export default Publisher
