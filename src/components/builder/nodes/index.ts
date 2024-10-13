import { TransactionNode } from "./transaction";
import { AuthenticationNode } from "./authentication";
import { NodeTypes } from "reactflow";

export const nodeTypes = {
    authentication: AuthenticationNode,
    transaction: TransactionNode,
} satisfies NodeTypes;