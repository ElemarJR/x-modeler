'use client';

import { useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  label: string;
}

export default function DiagramEditor() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [dragId, setDragId] = useState<number | null>(null);

  const addNode = () => {
    setNodes([...nodes, { id: Date.now(), x: 50, y: 50, label: 'Elemento' }]);
  };

  const startDrag = (id: number) => setDragId(id);
  const stopDrag = () => setDragId(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragId === null) return;
    setNodes(nodes.map(n => n.id === dragId ? { ...n, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY } : n));
  };

  return (
    <div className="flex flex-1" onMouseMove={onMouseMove} onMouseUp={stopDrag}>
      <div className="w-40 bg-gray-100 border-r p-2 space-y-2">
        <button className="w-full bg-blue-500 text-white p-1 rounded" onClick={addNode}>
          Adicionar Elemento
        </button>
      </div>
      <div className="flex-1 relative bg-white">
        {nodes.map(node => (
          <div
            key={node.id}
            className="absolute px-2 py-1 bg-green-200 border rounded cursor-move"
            style={{ left: node.x, top: node.y }}
            onMouseDown={() => startDrag(node.id)}
          >
            {node.label}
          </div>
        ))}
      </div>
    </div>
  );
}
