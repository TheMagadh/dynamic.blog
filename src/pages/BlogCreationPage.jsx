import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

const BlogCreationPage = () => {
  const [blocks, setBlocks] = useState([]);

  const addBlock = (type) => {
    const id = uuidv4();
    setBlocks([...blocks, { id, type, data: {} }]);
  };

  const updateBlock = (id, newData) => {
    setBlocks(blocks.map(block =>
      block.id === id ? { ...block, data: newData } : block
    ));
  };

  const renderBlock = (block) => {
    const Component = blockComponents[block.type];
    return (
      <div key={block.id} className="my-4">
        <Component data={block.data} onChange={(data) => updateBlock(block.id, data)} />
      </div>
    );
  };

  const saveBlog = () => {
    localStorage.setItem('fectum_blog_draft', JSON.stringify(blocks));
    alert('Blog saved! You can preview it from the blog list.');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Blog</h1>

      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(blockComponents).map((type) => (
          <button key={type} onClick={() => addBlock(type)} className="bg-primary text-white px-3 py-1 rounded">
            + {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {blocks.map(renderBlock)}

      <button onClick={saveBlog} className="mt-6 bg-accent text-white px-4 py-2 rounded">
        Save Draft
      </button>
    </div>
  );
};

export default BlogCreationPage;
