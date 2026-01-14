const fs = require('fs');
const path = require('path');

function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        scanDirectory(filePath, fileList);
      }
    } else {
      const sizeInMB = parseFloat(getFileSizeInMB(filePath));
      if (sizeInMB > 0.5) { // Only files larger than 500KB
        fileList.push({
          path: filePath,
          size: sizeInMB
        });
      }
    }
  });

  return fileList;
}

console.log('🔍 Scanning for large files (> 500KB)...\n');

const publicDir = path.join(__dirname, 'public');
const largeFiles = scanDirectory(publicDir);

// Sort by size descending
largeFiles.sort((a, b) => b.size - a.size);

console.log('📊 Large Files Found:\n');
console.log('Size (MB) | File Path');
console.log('----------|----------');

largeFiles.forEach(file => {
  console.log(`${String(file.size).padStart(9)} | ${file.path.replace(__dirname, '.')}`);
});

const totalSize = largeFiles.reduce((sum, file) => sum + file.size, 0);
console.log('\n📦 Total size of large files:', totalSize.toFixed(2), 'MB');
console.log('💡 Consider optimizing these files or moving them to a CDN\n');
