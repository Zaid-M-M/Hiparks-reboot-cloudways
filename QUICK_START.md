# 🚀 Quick Start Guide - Performance Testing

## Step 1: Build & Test Locally

```bash
# Install dependencies (if needed)
npm install

# Build production version
npm run build

# Start production server
npm run start
```

Open: http://localhost:3000

## Step 2: Verify Improvements

### A. Check Initial Load Speed
1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Check "Disable cache"
4. Reload page (Ctrl+Shift+R)
5. Look at "Load" time at bottom

**Expected**: 2-3 seconds (was 5-8 seconds)

### B. Check Bundle Size
After `npm run build`, look for:
```
Route (app)                              Size     First Load JS
┌ ○ /                                    XXX kB        XXX kB
```

**Expected**: First Load JS < 300 KB

### C. Check Lighthouse Score
1. Open DevTools > Lighthouse tab
2. Select "Desktop" or "Mobile"
3. Click "Analyze page load"

**Expected Scores**:
- Performance: 85-95
- Best Practices: 90+
- SEO: 95+

### D. Test on Slow Connection
1. DevTools > Network tab
2. Throttling dropdown > "Fast 3G"
3. Reload page

**Expected**: Loads in < 5 seconds

## Step 3: Find Large Files (Optional)

```bash
npm run find-large
```

This shows files > 500KB that could be optimized.

## Step 4: Deploy & Monitor

After deploying to production:

1. **Test with PageSpeed Insights**:
   https://pagespeed.web.dev/
   
2. **Check Core Web Vitals**:
   - LCP < 2.5s ✅
   - FID < 100ms ✅
   - CLS < 0.1 ✅

3. **Monitor in Google Search Console**:
   - Core Web Vitals report
   - Track improvements over time

## Common Issues & Fixes

### Issue: "Sharp not found"
```bash
npm install sharp --save
```

### Issue: Build fails
```bash
# Clear cache
rm -rf .next
npm run build
```

### Issue: Images not loading
Check `next.config.mjs`:
- `unoptimized: false` ✅
- Remote patterns configured ✅

### Issue: Fonts look different
- This is normal with `display: swap`
- Fonts load asynchronously now
- Prevents blank text during load

## Performance Checklist

- [x] Removed blocking font imports
- [x] Enabled image optimization
- [x] Added static generation + caching
- [x] Implemented code splitting
- [x] Optimized third-party scripts
- [x] Added resource hints
- [x] Created loading states

## Next: Optimize Further

1. Run `npm run find-large` to find big files
2. Move large assets to CDN
3. Optimize images in `public/statimg/` (700+ files!)
4. Consider lazy loading videos
5. Implement service worker for offline support

## Need Help?

Check these files:
- `PERFORMANCE_FIX_SUMMARY.md` - Detailed explanation
- `PERFORMANCE_OPTIMIZATIONS.md` - Technical details
- `find-large-files.js` - Find files to optimize

## Quick Commands Reference

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Find large files
npm run find-large

# Optimize images (if script exists)
npm run optimize

# Lint code
npm run lint
```

## Success Metrics

Your site is optimized when:
- ✅ First load < 3 seconds
- ✅ Lighthouse Performance > 85
- ✅ LCP < 2.5 seconds
- ✅ Bundle size < 300 KB
- ✅ Subsequent loads < 1 second

🎉 You're done! Your site should now load much faster!
