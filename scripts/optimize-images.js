#!/usr/bin/env node

/**
 * Image optimization script for the research portfolio
 * This script provides guidance on optimizing images for better performance
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

function getFileSizeInMB(filePath) {
    const stats = fs.statSync(filePath);
    return (stats.size / (1024 * 1024)).toFixed(2);
}

function analyzeImages() {
    console.log('🔍 Analyzing images in public directory...\n');

    const files = fs.readdirSync(publicDir);
    const imageFiles = files.filter(file =>
        /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(file)
    );

    const largeImages = [];

    imageFiles.forEach(file => {
        const filePath = path.join(publicDir, file);
        const sizeMB = parseFloat(getFileSizeInMB(filePath));

        console.log(`📁 ${file}: ${sizeMB} MB`);

        if (sizeMB > 0.5) {
            largeImages.push({ file, sizeMB });
        }
    });

    console.log('\n⚠️  Large images (>0.5MB) that should be optimized:');
    largeImages.forEach(({ file, sizeMB }) => {
        console.log(`   • ${file} (${sizeMB} MB)`);
    });

    console.log('\n💡 Optimization recommendations:');
    console.log('   1. Convert PNG images to WebP format for better compression');
    console.log('   2. Reduce image dimensions if larger than needed');
    console.log('   3. Use online tools like TinyPNG or Squoosh.app');
    console.log('   4. Consider using responsive images with different sizes');

    console.log('\n🛠️  Example optimization commands:');
    console.log('   # Install imagemin for automated optimization');
    console.log('   npm install -g imagemin-cli imagemin-webp imagemin-pngquant');
    console.log('   ');
    console.log('   # Optimize PNG files');
    console.log('   imagemin public/*.png --out-dir=public/optimized --plugin=pngquant');
    console.log('   ');
    console.log('   # Convert to WebP');
    console.log('   imagemin public/*.{png,jpg} --out-dir=public/optimized --plugin=webp');
}

if (require.main === module) {
    analyzeImages();
}

module.exports = { analyzeImages };
