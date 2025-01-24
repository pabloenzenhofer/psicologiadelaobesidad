"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp = __importStar(require("sharp"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const thumbnailsDir = path.join(process.cwd(), 'public/thumbnails');
// Asegurarse de que el directorio existe
if (!fs.existsSync(thumbnailsDir)) {
    fs.mkdirSync(thumbnailsDir, { recursive: true });
}
const optimizeImage = async (inputPath, outputPath) => {
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
