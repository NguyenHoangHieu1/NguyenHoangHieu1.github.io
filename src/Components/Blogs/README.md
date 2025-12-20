# Blog System Documentation

## 📝 Creating a New Blog Post

### 1. Create a new file

Create a new `.tsx` file in `src/Components/Blogs/posts/`

Example: `my-awesome-post.tsx`

### 2. Basic Structure

```tsx
import React from "react";
import BlogTemplate from "../BlogTemplate";
import { Bold, Italic, InlineCode, H2, P } from "../BlogComponents";

export const meta = {
  slug: "my-awesome-post",
  title: "My Awesome Post",
  date: "2025-12-03",
  tags: ["tutorial", "react"],
  thumbnail: "/images/thumbnail.jpg", // Optional: image from public folder
  description: "A short description that appears in the blog list", // Optional
};

const MyAwesomePost: React.FC = () => {
  return (
    <BlogTemplate
      title={meta.title}
      date={meta.date}
      tags={meta.tags}
      thumbnail={meta.thumbnail}
    >
      <P>Your content goes here...</P>
    </BlogTemplate>
  );
};

export default MyAwesomePost;
```

### 3. Add thumbnail images

- Place images in the `public` folder (e.g., `public/images/thumbnail.jpg`)
- Reference them in meta as `/images/thumbnail.jpg`
- Images will automatically display as thumbnails in the blog list and as hero images in posts

## 🎨 Available UI Components

### Text Formatting

```tsx
import { Bold, Italic, Underline, Strike } from '../BlogComponents'

<Bold>Bold text</Bold>
<Italic>Italic text</Italic>
<Underline>Underlined text</Underline>
<Strike>Strikethrough text</Strike>
```

### Code

```tsx
import { InlineCode, CodeBlock } from '../BlogComponents'

// Inline code
<InlineCode>const x = 5</InlineCode>

// Code block with language
<CodeBlock language="typescript">
{`function hello() {
  console.log("Hello!")
}`}
</CodeBlock>
```

### Headings

```tsx
import { H1, H2, H3, H4 } from '../BlogComponents'

<H1>Heading 1</H1>
<H2>Heading 2</H2>
<H3>Heading 3</H3>
<H4>Heading 4</H4>
```

### Paragraph

```tsx
import { P } from "../BlogComponents";

<P>This is a paragraph with proper spacing and line height.</P>;
```

### Links

```tsx
import { Link } from '../BlogComponents'

// Internal link
<Link href="/about">About page</Link>

// External link (opens in new tab)
<Link href="https://github.com" external>GitHub</Link>
```

### Images

```tsx
import { Image } from "../BlogComponents";

<Image
  src="/images/photo.jpg"
  alt="Description"
  caption="Optional caption text"
/>;
```

### Quotes

```tsx
import { Quote } from "../BlogComponents";

<Quote>"This is a blockquote with nice styling"</Quote>;
```

### Callouts/Alerts

```tsx
import { Callout } from '../BlogComponents'

<Callout type="info">Information callout</Callout>
<Callout type="warning">Warning callout</Callout>
<Callout type="success">Success callout</Callout>
<Callout type="error">Error callout</Callout>
```

### Lists

```tsx
import { UnorderedList, OrderedList, ListItem } from '../BlogComponents'

<UnorderedList>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
</UnorderedList>

<OrderedList>
  <ListItem>First</ListItem>
  <ListItem>Second</ListItem>
</OrderedList>
```

### Divider

```tsx
import { Divider } from "../BlogComponents";

<Divider />;
```

## 📋 Complete Example

```tsx
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
  slug: "complete-example",
  title: "Complete Blog Post Example",
  date: "2025-12-03",
  tags: ["example", "tutorial"],
  thumbnail: "/images/example.jpg",
  description: "A comprehensive example showing all available components",
};

const CompleteExample: React.FC = () => {
  return (
    <BlogTemplate
      title={meta.title}
      date={meta.date}
      tags={meta.tags}
      thumbnail={meta.thumbnail}
    >
      <P>
        This post demonstrates <Bold>all available components</Bold> you can use
        in your blog posts.
      </P>

      <H2>Code Example</H2>
      <CodeBlock language="typescript">
        {`const greeting = "Hello, World!"
console.log(greeting)`}
      </CodeBlock>

      <Callout type="info">
        <Bold>💡 Tip:</Bold> Use callouts to highlight important information!
      </Callout>

      <Divider />

      <H2>Images</H2>
      <Image
        src="/images/example.jpg"
        alt="Example"
        caption="Images support captions"
      />

      <P>
        Check out <Link href="/about">my about page</Link> or visit{" "}
        <Link href="https://github.com" external>
          GitHub
        </Link>
        .
      </P>
    </BlogTemplate>
  );
};

export default CompleteExample;
```

## 🚀 That's It!

Your blog post will automatically:

- ✅ Appear in the blog list at `/blogs`
- ✅ Be sorted by date (newest first)
- ✅ Show thumbnail in card layout
- ✅ Be accessible at `/blogs/your-slug`
- ✅ Support dark mode

No additional configuration needed!
