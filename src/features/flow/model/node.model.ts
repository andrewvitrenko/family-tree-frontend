import { Node, NodeProps } from '@xyflow/react';
import { ComponentType } from 'react';

/**
 * Build new node with specific data interface and type.
 * It is needed for the React Flow to understand the types.
 * */
export type TNode<
  D extends Record<string, unknown>,
  T extends string = string,
> = Node<D, T>;

/**
 * Creates a type that describes props for the component that will render your node.
 * You cannot use the `TNode` type for that reason because React Flow somehow makes some required fields optional,
 * which causes conflicts.
 * */
export type TNodeProps<
  D extends Record<string, unknown> = Record<string, unknown>,
> = NodeProps<TNode<D>>;

export type TNodeTypes<T extends Record<string | number, string>> = {
  [K in keyof T]: ComponentType;
};
