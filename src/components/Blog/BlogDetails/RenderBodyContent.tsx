import MarkdownRenderer from '@/utils/markdownConfig';

const RenderBodyContent = ({ post }: any) => {
  return (
    <>
      {/* <PortableText value={post?.body} components={myPortableTextComponents} /> */}
      <MarkdownRenderer markdownContent={post?.body} />
    </>
  );
};

export default RenderBodyContent;
