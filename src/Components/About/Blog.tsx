import { PropsWithChildren, useEffect } from "react"
import Card from "../UI/Container"
import textEditor from "../../assets/textEditor.jpg"
import mario from "../../assets/mario.jpg"
import Undertale from "../../assets/Undertale.png"
import Article from "../UI/Article"
import Box from "../UI/Box"
import Container from "../UI/Container"

interface props {
  articles: { imageSrc: string; title: string; date: string }[]
}

const Blog: React.FC<props> = (props) => {
  const loadedArticles = props.articles.map((article, index) => {
    return <Article key={index} article={article} />
  })
  return (
    <Container>
      <Box>
        <h1 className="text-4xl underline-offset-1  dark:decoration-white underline">
          Blogs
        </h1>
        <p className="text-xl">
          Since you are in the About page, I figure out that you would like to
          know my prefences and stuff.So here are some my articles about things
          that I like:
        </p>
        <div className=" flex-col items-center mx-auto  sm:text-left my-5 flex sm:flex-row gap-5  sm:gap-8 ">
          {loadedArticles}
        </div>
      </Box>
    </Container>
  )
}

export default Blog
