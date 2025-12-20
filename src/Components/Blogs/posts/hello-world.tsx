import React from "react";
import BlogTemplate from "../BlogTemplate";
import {
  Bold,
  Italic,
  InlineCode,
  CodeBlock,
  Quote,
  Link,
  Image,
  Divider,
  Callout,
  H2,
  H3,
  P,
} from "../BlogComponents";

export const meta = {
  slug: "first-blog",
  title: "Hello — My First Blog",
  date: "2025-12-03",
  tags: ["First time", "OS", "Hello"],
  thumbnail: "/hello.png", // Place your image in public folder
  description:
    "Welcome to my blog! Learn how to create beautiful blog posts with custom UI components and formatting.",
};

const HelloWorld: React.FC = () => {
  return (
    <BlogTemplate
      title={meta.title}
      date={meta.date}
      tags={meta.tags}
      thumbnail={meta.thumbnail}
    >
      <H2>My First Blog</H2>

      <P>
        Hey everyone! First of all, <Bold>thanks a ton for stopping by</Bold>.
        This is me—the creator of this little corner of the internet. I’ve
        always loved coding, but honestly, the past couple of years my
        motivation kind of fizzled out…
      </P>

      <P>
        Lately, though, I feel that <Italic>spark again</Italic>. I want to keep
        it alive, no matter what. My goal is simple: keep improving this
        website, add more blogs, and pour a bit of my own personality into
        everything I share. I want to try weird, random things in my life too,
        just so I can write about them here—like building a streak of learning
        and experimenting.
      </P>

      <Divider />

      <P>
        One big change I made recently: I installed{" "}
        <InlineCode>Linux</InlineCode> and completely removed{" "}
        <InlineCode>Windows</InlineCode>. Windows was just too distracting for
        me. On Linux, I feel… alive, like I can actually focus on studying and
        creating. (I’m using <InlineCode>CachyOS</InlineCode>, by the way—loving
        it so far!)
      </P>

      <Callout>
        Keep an eye out for more blogs—I hope we can learn, share, and maybe
        even get a little inspired together.
      </Callout>
    </BlogTemplate>
  );
};

export default HelloWorld;
