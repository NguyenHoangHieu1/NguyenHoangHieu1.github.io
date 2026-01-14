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
  slug: "reasons-to-switch-to-linux",
  title: "Reasons to Switch to Linux",
  date: "2025-12-03",
  tags: ["Linux", "OS", "Productivity"],
  thumbnail: "/linux.webp", // Place your image in public folder
  description:
    "Discover the benefits of switching to Linux for improved productivity and a better computing experience.",
};

const ReasonsToSwitchToLinux: React.FC = () => {
  return (
    <BlogTemplate
      title={meta.title}
      date={meta.date}
      tags={meta.tags}
      thumbnail={meta.thumbnail}
    >
      <H2>My Experience with Linux</H2>

      <P>
        Hey everyone! We’re back with a new post, and this time I want to share
        my
        <Bold> Linux journey from 2023 until now</Bold>. Honestly, Linux has
        been a<Italic> PITA and a pleasure at the same time</Italic>—it gives me
        plenty of challenges, but also tons of knowledge that I can apply in the
        future (especially getting comfortable with the{" "}
        <InlineCode>CLI</InlineCode>).
      </P>

      <Divider />

      <H3>What is Linux?</H3>
      <P>
        For those who aren’t super techy, Linux is basically an{" "}
        <Bold>operating system</Bold>, like Windows or macOS. So what makes it
        different?
      </P>
      <P>
        - <Bold>Open source</Bold>: Everyone can read the code and even improve
        it.
        <br />- <Bold>Free</Bold>: Not just in cost, but also in freedom.
      </P>
      <P>
        This is why I love Linux. It respects users—if something doesn’t work
        right, people can fix it. It gives me <Bold>more control</Bold>, and it
        doesn’t invade my privacy like Windows sometimes does.
      </P>
      <P>
        Nowadays, Linux is really powerful—you can game, work, and study on it
        just like Windows. Of course, there are some limitations:
      </P>
      <P>
        - Some games with <InlineCode>kernel anti-cheat</InlineCode> won’t work
        (I don’t mind).
        <br />- Some apps, like <InlineCode>Microsoft Office</InlineCode>,
        aren’t fully supported.
        <br />- Occasionally, there are bugs (hey, it’s free!).
      </P>
      <P>
        But honestly? I just love Linux’s vibe—the philosophy, the community,
        the whole open-source culture.
      </P>

      <Divider />

      <H3>How Linux compares to Windows</H3>
      <P>
        Windows has been the norm for decades: it comes preinstalled on most
        laptops, everything works out of the box, and it’s the “default OS of
        the world.”
      </P>
      <P>
        - Windows is <Bold>reliable</Bold>: most things just work.
        <br />- Linux is <Bold>my personal preference</Bold>: it helps me focus,
        study, and explore.
      </P>
      <P>
        Choosing Linux doesn’t mean Windows is bad—both OSes have their
        strengths. For me, Linux is just more enjoyable and empowering.
      </P>

      <Divider />

      <H3>What Linux Gives You</H3>
      <P>
        1. <Bold>Freedom and control</Bold>
        <br />
        - You are your own boss.
        <br />- Delete, modify, or customize whatever you want (just don’t break
        your system!).
      </P>
      <P>
        2. <Bold>Perfect for developers</Bold>
        <br />
        - Everything is CLI-friendly.
        <br />
        - Most development tools and apps are already available on Linux.
        <br />- You can just boot it up and start coding.
      </P>
      <P>
        3. <Bold>Lightweight and efficient</Bold>
        <br />
        - Linux runs smoothly even on older or low-spec machines.
        <br />- Less resource-heavy compared to Windows.
      </P>

      <Divider />

      <Callout>
        That’s all for now! I’ll be updating more soon about my Linux workflow,
        gaming setup, and other experiments. <Bold>Stay tuned!</Bold>
      </Callout>
    </BlogTemplate>
  );
};

export default ReasonsToSwitchToLinux;
