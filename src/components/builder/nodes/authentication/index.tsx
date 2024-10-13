import { memo } from "react";
import { NodeBase } from "../../customized/node";
import { Handle, Node, Position } from "reactflow";

type Props = {
    title: string;
};
export const AuthenticationNode = memo((node: Node<Props>) => {
    return <NodeBase node={node}>
        Authentication Node

        <Handle type="source" id="success" position={Position.Right} style={{ background: 'green', marginTop: '-5px' }} />
        <Handle type="source" id="error" position={Position.Right} style={{ background: 'red', marginTop: '5px' }} />
    </NodeBase>
})