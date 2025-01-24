import * as sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';

const thumbnailsDir = path.join(process.cwd(), 'public/thumbnails');

// Asegurarse de que el directorio existe
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true });
}

const optimizeImage = async (inputPath: string, outputPath: string) => {
  await sharp(inputPath)
    .resize(1280, 720)
    .jpeg({ quality: 80 })
    .toFile(outputPath);
};

// Lista de thumbnails a optimizar
const thumbnails = [
  'salad.jpg',
  'mujerterapia.jpg',
  'lluviafrutas.jpg',
  'mujeres.jpg',
  'gym.jpg',
  'mindfuleating.jpg',
  'mujergym.jpg',
  'mindfulness.jpg',
  'mujerejercicio.jpg',
  'frutas.jpg'
];

// Optimizar cada thumbnail
thumbnails.forEach(async (thumbnail) => {
  const inputPath = path.join('src/assets/thumbnails', thumbnail);
  const outputPath = path.join(thumbnailsDir, thumbnail);
  await optimizeImage(inputPath, outputPath);
}); 