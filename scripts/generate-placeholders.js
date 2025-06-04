const fs = require('fs');
const { createCanvas } = require('canvas');

const projects = [
  'monty-preview',
  'palgo-preview',
  'coastlens-preview'
];

// Create a 800x600 placeholder image for each project
projects.forEach(project => {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(0, 0, 800, 600);

  // Add project name
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(project.replace('-preview', ''), 400, 300);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(`public/${project}.jpg`, buffer);
}); 