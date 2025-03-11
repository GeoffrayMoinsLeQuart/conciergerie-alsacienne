import React, { ReactNode } from "react";
import { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";

// ✅ Définition correcte des props avec `children?` optionnel
type MarkdownComponentProps = {
  children?: ReactNode;
};

// ✅ Définition correcte des composants Markdown
export const markdownComponents: Components = {
  h1: ({ children, ...props }: MarkdownComponentProps) => (
    <h1
      {...props}
      className="mb-8 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl"
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: MarkdownComponentProps) => (
    <h2
      {...props}
      className="mb-6 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl"
    >
      {children}
    </h2>
  ),
  p: ({ children, ...props }: MarkdownComponentProps) => (
    <p
      {...props}
      className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg"
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }: MarkdownComponentProps) => (
    <ul {...props} className="mb-6 list-inside list-disc">
      {children}
    </ul>
  ),
  li: ({ children, ...props }: MarkdownComponentProps) => (
    <li
      {...props}
      className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg"
    >
      <span className="text-body-color">{children}</span>
    </li>
  ),
  strong: ({ children, ...props }: MarkdownComponentProps) => (
    <strong {...props} className="font-semibold text-black">
      {children}
    </strong>
  ),
  hr: (props) => <hr {...props} className="my-6 border-gray-300" />,
};

const MarkdownRenderer = ({ markdownContent }: { markdownContent: string }) => {
  return (
    <ReactMarkdown components={markdownComponents}>
      {markdownContent}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
