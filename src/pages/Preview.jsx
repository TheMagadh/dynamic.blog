import React from 'react';
import { useParams } from 'react-router-dom';
import TextBlock from '../components/BlogEditor/blocks/TextBlock';
import CodeBlock from '../components/BlogEditor/blocks/CodeBlock';
import ImageBlock from '../components/BlogEditor/blocks/ImageBlock';
import TableBlock from '../components/BlogEditor/blocks/TableBlock';
import QuoteBlock from '../components/BlogEditor/blocks/QuoteBlock';
import VideoBlock from '../components/BlogEditor/blocks/VideoBlock';
import DividerBlock from '../components/BlogEditor/blocks/DividerBlock';
import CTAButtonBlock from '../components/BlogEditor/blocks/CTAButtonBlock';
import SignatureBlock from '../components/BlogEditor/blocks/SignatureBlock';

const blockComponents = {
  text: TextBlock,
  code: CodeBlock,
  image: ImageBlock,
  table: TableBlock,
  quote: QuoteBlock,
  video: VideoBlock,
  divider: DividerBlock,
  cta: CTAButtonBlock,
  signature: SignatureBlock,
};

const Preview = () => {
  const { id } = useParams();
  const blocks = JSON.parse(localStorage.getItem('fectum_blog_draft') || '[]');

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Preview</h1>
      {blocks.map((block, index) => {
        const BlockComponent = blockComponents[block.type];
        return (
          <div key={index} className="my-4">
            <BlockComponent data={block.data} onChange={() => {}} preview />
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
