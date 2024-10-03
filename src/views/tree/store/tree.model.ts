import {
  applyEdgeChanges,
  applyNodeChanges,
  Edge,
  EdgeChange,
  NodeChange,
} from '@xyflow/react';
import { create } from 'zustand';

import { TPersonNode } from '../model/flow.model';

type TTreeStore = {
  nodes: TPersonNode[];
  setNodes: (nodes: TPersonNode[]) => void;
  edges: Edge[];
  setEdges: (edges: Edge[]) => void;
  onNodesChange: (changes: NodeChange<TPersonNode>[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
};

export const useTreeStore = create<TTreeStore>((set, get) => ({
  nodes: [],
  edges: [],
  setNodes: (nodes) => set(() => ({ nodes })),
  setEdges: (edges) => set(() => ({ edges })),
  onNodesChange: (changes) =>
    set({ nodes: applyNodeChanges<TPersonNode>(changes, get().nodes) }),
  onEdgesChange: (changes) =>
    set({ edges: applyEdgeChanges(changes, get().edges) }),
}));
