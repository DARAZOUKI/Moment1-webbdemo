const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputDir = 'src/images'; // Adjust the input directory as needed
const outputDir = 'dist/images'; // Adjust the output directory as needed

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get a list of image files in the input directory
const imageFiles = fs.readdirSync(inputDir).filter(file => /\.(jpg|jpeg|png)$/i.test(file));

// Process each image
imageFiles.forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  // Resize and optimize the image using sharp
  sharp(inputPath)
    .resize({ width: 800 }) // Adjust the width as needed
    .toFile(outputPath, (err, info) => {
      if (err) {
        console.error(`Error optimizing ${file}:`, err);
      } else {
        console.log(`Optimized ${file}. Dimensions: ${info.width}x${info.height}`);
      }
    });
});
