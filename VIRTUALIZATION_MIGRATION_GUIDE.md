# Migration Guide - Adding Virtualization to Existing Components

## Overview

This guide shows how to add virtualization to existing list/grid components for better performance with large datasets.

## When to Virtualize

✅ **Use virtualization when:**
- Rendering 50+ items
- Items have consistent height
- Scrolling feels sluggish
- Initial render is slow

❌ **Don't virtualize when:**
- Less than 50 items
- Items have variable/dynamic heights
- Using CSS Grid with complex layouts
- Items need to be searchable by browser (Ctrl+F)

## Example 1: Simple List

### Before (Regular List)

```javascript
// components/insights/InsightsContent.jsx
export default function InsightsContent({ posts }) {
  return (
    <div className="grid gap-6">
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

### After (Virtualized List)

```javascript
import VirtualizedList from '@/components/global/VirtualizedList';

export default function InsightsContent({ posts }) {
  return (
    <VirtualizedList
      items={posts}
      height={800}
      itemHeight={200}
      renderItem={(post) => (
        <BlogCard post={post} />
      )}
    />
  );
}
```

## Example 2: Grid Layout

### Before (Regular Grid)

```javascript
// components/case-studies/CaseStudiesContent.jsx
export default function CaseStudiesContent({ studies }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {studies.map((study) => (
        <CaseStudyCard key={study.id} study={study} />
      ))}
    </div>
  );
}
```

### After (Virtualized Grid)

```javascript
import VirtualizedGrid from '@/components/global/VirtualizedGrid';

export default function CaseStudiesContent({ studies }) {
  return (
    <VirtualizedGrid
      items={studies}
      columnCount={3}
      rowHeight={400}
      renderItem={(study) => (
        <CaseStudyCard study={study} />
      )}
    />
  );
}
```

## Example 3: With Filtering

### Before

```javascript
export default function FilterableList({ items, filter }) {
  const filtered = items.filter(item => 
    item.category === filter || !filter
  );

  return (
    <div className="space-y-4">
      {filtered.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
```

### After

```javascript
import VirtualizedList from '@/components/global/VirtualizedList';

export default function FilterableList({ items, filter }) {
  const filtered = items.filter(item => 
    item.category === filter || !filter
  );

  return (
    <VirtualizedList
      items={filtered}
      height={600}
      itemHeight={150}
      renderItem={(item) => (
        <ItemCard item={item} />
      )}
    />
  );
}
```

## Example 4: With Pagination

### Before

```javascript
export default function PaginatedList({ items, page, perPage }) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const pageItems = items.slice(start, end);

  return (
    <div className="space-y-4">
      {pageItems.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
```

### After (No Pagination Needed!)

```javascript
import VirtualizedList from '@/components/global/VirtualizedList';

export default function PaginatedList({ items }) {
  // No pagination needed - virtualization handles it!
  return (
    <VirtualizedList
      items={items}
      height={600}
      itemHeight={150}
      renderItem={(item) => (
        <ItemCard item={item} />
      )}
    />
  );
}
```

## Example 5: Responsive Grid

### Before

```javascript
export default function ResponsiveGrid({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map(item => (
        <GridItem key={item.id} item={item} />
      ))}
    </div>
  );
}
```

### After

```javascript
'use client';
import { useState, useEffect } from 'react';
import VirtualizedGrid from '@/components/global/VirtualizedGrid';

export default function ResponsiveGrid({ items }) {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else if (window.innerWidth < 1280) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <VirtualizedGrid
      items={items}
      columnCount={columns}
      rowHeight={300}
      renderItem={(item) => (
        <GridItem item={item} />
      )}
    />
  );
}
```

## Common Patterns

### Pattern 1: Loading State

```javascript
import VirtualizedList from '@/components/global/VirtualizedList';

export default function ListWithLoading({ items, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <VirtualizedList
      items={items}
      height={600}
      itemHeight={150}
      renderItem={(item) => <ItemCard item={item} />}
    />
  );
}
```

### Pattern 2: Empty State

```javascript
import VirtualizedList from '@/components/global/VirtualizedList';

export default function ListWithEmpty({ items }) {
  if (items.length === 0) {
    return <div>No items found</div>;
  }

  return (
    <VirtualizedList
      items={items}
      height={600}
      itemHeight={150}
      renderItem={(item) => <ItemCard item={item} />}
    />
  );
}
```

### Pattern 3: With Search

```javascript
'use client';
import { useState } from 'react';
import VirtualizedList from '@/components/global/VirtualizedList';

export default function SearchableList({ items }) {
  const [search, setSearch] = useState('');

  const filtered = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="mb-4 p-2 border rounded"
      />
      
      <VirtualizedList
        items={filtered}
        height={600}
        itemHeight={150}
        renderItem={(item) => <ItemCard item={item} />}
      />
    </div>
  );
}
```

## Determining Item Height

### Method 1: Fixed Height (Easiest)

```javascript
// If all items are the same height
<VirtualizedList
  items={items}
  itemHeight={200} // Fixed height
  renderItem={(item) => (
    <div className="h-[200px]"> {/* Match itemHeight */}
      <ItemCard item={item} />
    </div>
  )}
/>
```

### Method 2: Measure Existing Items

```javascript
// 1. Render a few items normally
// 2. Measure their height in browser DevTools
// 3. Use average height

const averageHeight = 180; // Measured from DevTools

<VirtualizedList
  items={items}
  itemHeight={averageHeight}
  renderItem={(item) => <ItemCard item={item} />}
/>
```

### Method 3: Dynamic Height (Advanced)

```javascript
// For variable height items, use VariableSizeList
import { VariableSizeList } from 'react-window';

const getItemSize = (index) => {
  // Calculate height based on content
  const item = items[index];
  return item.hasImage ? 300 : 150;
};

<VariableSizeList
  height={600}
  itemCount={items.length}
  itemSize={getItemSize}
  width="100%"
>
  {({ index, style }) => (
    <div style={style}>
      <ItemCard item={items[index]} />
    </div>
  )}
</VariableSizeList>
```

## Styling Tips

### Tip 1: Maintain Spacing

```javascript
// Add padding inside rendered items
<VirtualizedList
  items={items}
  itemHeight={200}
  renderItem={(item) => (
    <div className="px-4 py-2"> {/* Add spacing here */}
      <ItemCard item={item} />
    </div>
  )}
/>
```

### Tip 2: Borders Between Items

```javascript
<VirtualizedList
  items={items}
  itemHeight={200}
  renderItem={(item) => (
    <div className="border-b border-gray-200">
      <ItemCard item={item} />
    </div>
  )}
/>
```

### Tip 3: Hover Effects

```javascript
<VirtualizedList
  items={items}
  itemHeight={200}
  renderItem={(item) => (
    <div className="hover:bg-gray-50 transition-colors">
      <ItemCard item={item} />
    </div>
  )}
/>
```

## Performance Tips

### 1. Memoize Render Function

```javascript
import { useCallback } from 'react';

const renderItem = useCallback((item) => (
  <ItemCard item={item} />
), []);

<VirtualizedList
  items={items}
  itemHeight={200}
  renderItem={renderItem}
/>
```

### 2. Use Keys Properly

```javascript
// VirtualizedList handles keys internally
// Just ensure items have unique IDs
const items = data.map(item => ({
  ...item,
  id: item.id || item.slug // Unique identifier
}));
```

### 3. Optimize Item Components

```javascript
import { memo } from 'react';

// Memoize item component to prevent unnecessary re-renders
const ItemCard = memo(({ item }) => (
  <div>
    <h3>{item.title}</h3>
    <p>{item.description}</p>
  </div>
));
```

## Testing Checklist

After adding virtualization:

- [ ] Items render correctly
- [ ] Scrolling is smooth
- [ ] Item height matches actual height
- [ ] Spacing/padding looks correct
- [ ] Hover effects work
- [ ] Click handlers work
- [ ] Filtering works
- [ ] Search works
- [ ] Responsive on mobile
- [ ] No console errors

## Common Issues

### Issue 1: Items Overlapping

**Problem:** Items overlap each other

**Solution:** Increase `itemHeight` to match actual item height

```javascript
// Before
itemHeight={150} // Too small

// After
itemHeight={200} // Matches actual height
```

### Issue 2: Blank Space

**Problem:** Blank space between items

**Solution:** Decrease `itemHeight` or add padding

```javascript
// Option 1: Adjust height
itemHeight={180} // Reduced

// Option 2: Add padding
renderItem={(item) => (
  <div className="py-2">
    <ItemCard item={item} />
  </div>
)}
```

### Issue 3: Scroll Jumps

**Problem:** Scroll position jumps

**Solution:** Ensure consistent item heights

```javascript
// Make sure all items have same height
<div className="h-[200px]"> {/* Fixed height */}
  <ItemCard item={item} />
</div>
```

## Migration Priority

### High Priority (Do First):
1. ✅ Insights listing (100+ posts)
2. ✅ Case studies grid (50+ studies)
3. ✅ News listing (100+ items)
4. ✅ Search results

### Medium Priority:
1. ⬜ Event listings
2. ⬜ Press releases
3. ⬜ Park listings
4. ⬜ Client testimonials

### Low Priority:
1. ⬜ Small lists (<50 items)
2. ⬜ Static content
3. ⬜ Single-page content

## Summary

### Benefits:
✅ Smooth scrolling with 1000+ items
✅ Faster initial render
✅ Reduced memory usage
✅ Better performance on mobile
✅ No pagination needed

### Trade-offs:
❌ Slightly more complex code
❌ Requires fixed/consistent heights
❌ Browser search (Ctrl+F) won't work
❌ Need to handle responsive layouts manually

### When to Use:
- Lists with 50+ items
- Grids with 50+ items
- Infinite scroll implementations
- Performance-critical pages

---

**Need Help?** Check the examples in `components/global/` or refer to `PERFORMANCE_QUICK_START.md`
