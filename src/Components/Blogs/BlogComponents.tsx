import React, { PropsWithChildren } from "react";

// Text formatting components
export const Bold: React.FC<PropsWithChildren> = ({ children }) => (
  <strong className="font-bold">{children}</strong>
);

export const Italic: React.FC<PropsWithChildren> = ({ children }) => (
  <em className="italic">{children}</em>
);

export const Underline: React.FC<PropsWithChildren> = ({ children }) => (
  <span className="underline">{children}</span>
);

export const Strike: React.FC<PropsWithChildren> = ({ children }) => (
  <span className="line-through">{children}</span>
);

// Code components
export const InlineCode: React.FC<PropsWithChildren> = ({ children }) => (
  <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-purple-600 dark:text-purple-400">
    {children}
  </code>
);

interface CodeBlockProps extends PropsWithChildren {
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, language }) => (
  <div className="my-4">
    {language && (
      <div className="bg-gray-200 dark:bg-gray-700 px-4 py-1 text-xs font-mono rounded-t-lg">
        {language}
      </div>
    )}
    <pre
      className={`bg-gray-100 dark:bg-gray-800 p-4 ${
        language ? "rounded-b-lg" : "rounded-lg"
      } overflow-x-auto`}
    >
      <code className="text-sm font-mono">{children}</code>
    </pre>
  </div>
);

// Quote component
export const Quote: React.FC<PropsWithChildren> = ({ children }) => (
  <blockquote className="border-l-4 border-purple-500 pl-4 py-2 my-4 italic text-gray-700 dark:text-gray-300">
    {children}
  </blockquote>
);

// Link component
interface LinkProps extends PropsWithChildren {
  href: string;
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  external = false,
}) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="text-purple-600 dark:text-purple-400 hover:underline"
  >
    {children}
    {external && <span className="ml-1 text-xs">↗</span>}
  </a>
);

// Image component
interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  caption,
  className = "",
}) => (
  <figure className={`my-6 ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full rounded-lg shadow-md"
      loading="lazy"
    />
    {caption && (
      <figcaption className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2 italic">
        {caption}
      </figcaption>
    )}
  </figure>
);

// Divider component
export const Divider: React.FC = () => (
  <hr className="my-8 border-gray-300 dark:border-gray-700" />
);

// Callout/Alert component
interface CalloutProps extends PropsWithChildren {
  type?: "info" | "warning" | "success" | "error";
}

export const Callout: React.FC<CalloutProps> = ({
  children,
  type = "info",
}) => {
  const styles = {
    info: "bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-800 dark:text-blue-200",
    warning:
      "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 text-yellow-800 dark:text-yellow-200",
    success:
      "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-800 dark:text-green-200",
    error:
      "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-800 dark:text-red-200",
  };

  return (
    <div className={`border-l-4 p-4 my-4 rounded ${styles[type]}`}>
      {children}
    </div>
  );
};

// List components
export const UnorderedList: React.FC<PropsWithChildren> = ({ children }) => (
  <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>
);

export const OrderedList: React.FC<PropsWithChildren> = ({ children }) => (
  <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>
);

export const ListItem: React.FC<PropsWithChildren> = ({ children }) => (
  <li className="ml-4">{children}</li>
);

// Heading components
export const H1: React.FC<PropsWithChildren> = ({ children }) => (
  <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
);

export const H2: React.FC<PropsWithChildren> = ({ children }) => (
  <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
);

export const H3: React.FC<PropsWithChildren> = ({ children }) => (
  <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
);

export const H4: React.FC<PropsWithChildren> = ({ children }) => (
  <h4 className="text-lg font-semibold mt-3 mb-2">{children}</h4>
);

// Paragraph component
export const P: React.FC<PropsWithChildren> = ({ children }) => (
  <p className="my-4 leading-7">{children}</p>
);
