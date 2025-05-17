'use client';

import { useState, useRef } from 'react';
import { ARCHIMATE_ELEMENTS, ElementType } from './archimateElements';

interface Node {
  id: number;
  x: number;
  y: number;
  type: ElementType;
}

export default function DiagramEditor() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [dragId, setDragId] = useState<number | null>(null);
  const [dragType, setDragType] = useState<ElementType | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const startDrag = (id: number) => setDragId(id);
  const stopDrag = () => setDragId(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragId === null || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    setNodes(nodes.map(n => n.id === dragId ? { ...n, x: e.clientX - rect.left, y: e.clientY - rect.top } : n));
  };

  const handlePaletteDragStart = (el: ElementType) => (e: React.DragEvent<HTMLDivElement>) => {
    setDragType(el);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!dragType || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    setNodes([
      ...nodes,
      { id: Date.now(), x: e.clientX - rect.left, y: e.clientY - rect.top, type: dragType }
    ]);
    setDragType(null);
  };

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <div className="flex flex-1 overflow-hidden" onMouseMove={onMouseMove} onMouseUp={stopDrag}>
      <div
        ref={canvasRef}
        className="flex-1 relative bg-white"
        onDrop={handleDrop}
        onDragOver={allowDrop}
      >
        {nodes.map(node => (
          <div
            key={node.id}
            className="absolute cursor-move"
            style={{ left: node.x, top: node.y }}
            onMouseDown={() => startDrag(node.id)}
          >
            <div
              className="relative px-2 py-1 border rounded text-sm shadow"
              style={{ backgroundColor: node.type.color }}
            >
              <span className="absolute top-0 right-0 text-xs">{node.type.icon}</span>
              {node.type.name}
            </div>
          </div>
        ))}
      </div>
      <div className="w-48 bg-gray-100 border-l p-2 overflow-y-auto space-y-2">
        {ARCHIMATE_ELEMENTS.map(el => (
          <div
            key={el.name}
            draggable
            onDragStart={handlePaletteDragStart(el)}
            className="p-1 border rounded bg-white text-xs flex items-center cursor-grab"
          >
            <span className="mr-1">{el.icon}</span>
            {el.name}
          </div>
        ))}
      </div>
    </div>
  );
}
