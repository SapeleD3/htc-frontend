import { Flex } from '@chakra-ui/layout';
import Tree from 'react-d3-tree';
import { useCenteredTree } from '../helper';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => (
  <g>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <div style={{ border: '1px solid black', backgroundColor: '#dedede' }}>
        <h3 style={{ textAlign: 'center' }}>{nodeDatum.name}</h3>
        <h3 style={{ textAlign: 'center' }}>{nodeDatum.name}</h3>
      </div>
    </foreignObject>
  </g>
);

export default function ReferralTree({ net }) {
  const [translate, containerRef] = useCenteredTree();
  const foreignObjectProps = { width: 150, height: 300, x: -50 };
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <Flex
      id='treeWrapper'
      justifyContent='center'
      ref={containerRef}
      alignItems='center'
      height='75vh'
    >
      <Tree
        orientation='vertical'
        pathFunc='step'
        translate={translate}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
        collapsible={false}
        nodeSize={{ x: 170, y: 130 }}
        data={net}
      />
    </Flex>
  );
}
