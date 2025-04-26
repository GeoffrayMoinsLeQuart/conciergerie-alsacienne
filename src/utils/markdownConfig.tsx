'use client';

import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

// Définition des props pour les composants markdown
type MarkdownComponentProps = {
  children?: ReactNode;
};

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
    <p {...props} className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      {children}
    </p>
  ),
  ul: ({ children, ...props }: MarkdownComponentProps) => (
    <ul {...props} className="mb-6 list-inside list-disc">
      {children}
    </ul>
  ),
  li: ({ children, ...props }: MarkdownComponentProps) => (
    <li {...props} className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
      <span className="text-body-color">{children}</span>
    </li>
  ),
  strong: ({ children, ...props }: MarkdownComponentProps) => (
    <strong {...props} className="font-semibold text-black">
      {children}
    </strong>
  ),
  hr: (props) => <hr {...props} className="my-6 border-gray-300" />,
  blockquote: ({ children, ...props }: MarkdownComponentProps) => (
    <blockquote
      {...props}
      className="my-6 border-l-4 border-primary bg-primary/10 p-4 italic text-gray-700"
    >
      {children}
    </blockquote>
  ),
  a: ({ children, href, ...props }) => (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline hover:text-primary/80"
    >
      {children}
    </a>
  ),
  table: ({ children, ...props }: MarkdownComponentProps) => (
    <div className="my-6 overflow-x-auto px-2">
      <table
        {...props}
        className="w-full table-auto border border-gray-300 text-left text-sm text-gray-700"
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: MarkdownComponentProps) => (
    <thead {...props} className="bg-gray-100">
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: MarkdownComponentProps) => (
    <tbody {...props}>{children}</tbody>
  ),
  tr: ({ children, ...props }: MarkdownComponentProps) => (
    <tr {...props} className="border-b border-gray-200">
      {children}
    </tr>
  ),
  th: ({ children, ...props }: MarkdownComponentProps) => (
    <th {...props} className="p-4 text-sm font-semibold text-black">
      {children}
    </th>
  ),
  td: ({ children, ...props }: MarkdownComponentProps) => (
    <td {...props} className="p-4 text-sm text-gray-700">
      {children}
    </td>
  ),
  img: ({ src, alt, width, height, ...rest }) => {
    // Coercion de width/height string vers number
    const w = typeof width === 'string' ? parseInt(width, 10) : width ?? 800;
    const h = typeof height === 'string' ? parseInt(height, 10) : height ?? 450;

    return (
      <Image
        src={src ?? ''}
        alt={alt ?? ''}
        width={w}
        height={h}
        quality={75}
        loading="lazy"
        className="my-6 w-full rounded-lg shadow-md"
        {...rest}
      />
    );
  },
};

// Composant principal de rendu Markdown
const MarkdownRenderer = ({ markdownContent }: { markdownContent: string }) => {
  return (
    <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
      {markdownContent}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
