'use client';
import { FixedSizeList } from 'react-window';

export default function VirtualizedList({ items, height = 600, itemHeight = 100, renderItem }) {
  return (
    <FixedSizeList
      height={height}
      itemCount={items.length}
      itemSize={itemHeight}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          {renderItem(items[index], index)}
        </div>
      )}
    </FixedSizeList>
  );
}
