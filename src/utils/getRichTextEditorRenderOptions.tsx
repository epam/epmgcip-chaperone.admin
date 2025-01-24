import { BLOCKS, NodeData } from '@contentful/rich-text-types';

import DescriptionImage from '@/components/atoms/DescriptionImage/DescriptionImage';
import { IRichTextEditorLinks } from '@/interfaces/IRichTextEditorLinks';

export default function getRichTextEditorRenderOptions(links: IRichTextEditorLinks | undefined) {
  if (!links) {
    return {};
  }

  const assetMap = new Map();
  for (const asset of links.assets.block) {
    assetMap.set(asset?.sys.id, asset);
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: NodeData) => {
        const asset = assetMap.get(node.data.target.sys.id);

        return (
          <DescriptionImage
            url={asset.url}
            title={asset.title}
            height={asset.height}
            width={asset.width}
          />
        );
      },
    },
  };
}
