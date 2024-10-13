import { Handle, Node, Position } from "reactflow";
import { memo } from "react";

type Props = {
    node: Node;
    children: React.ReactNode;
}
export const NodeBase = memo(({ node, children }: Props) => {
    const { data } = node

    return (
        <div
            style={{
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '8px',
                width: '200px',
            }}
        >
            <Handle type="target" position={Position.Left} />
            {JSON.stringify(data)}
            {children}
        </div>
    );
});