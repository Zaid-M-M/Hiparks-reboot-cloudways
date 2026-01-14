'use client';
import { FixedSizeGrid } from 'react-window';
import { useEffect, useState } from 'react';

export default function VirtualizedGrid({ 
  items, 
  columnCount = 3, 
  rowHeight = 400, 
  renderItem 
}) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth - 100; // Account for padding
      const height = window.innerHeight - 200;
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const rowCount = Math.ceil(items.length / columnCount);
  const columnWidth = dimensions.width / columnCount;

  return (
    <FixedSizeGrid
      columnCount={columnCount}
      columnWidth={columnWidth}
      height={dimensions.height}
      rowCount={rowCount}
      rowHeight={rowHeight}
      width={dimensions.width}
      className="mx-auto"
    >
      {({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * columnCount + columnIndex;
        if (index >= items.length) return null;
        
        return (
          <div style={style} className="p-4">
            {renderItem(items[index], index)}
          </div>
        );
      }}
    </FixedSizeGrid>
  );
}
