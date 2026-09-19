import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const chunksDirectory = path.join(root, 'video-chunks')
const outputDirectory = path.join(root, 'public')
const outputFile = path.join(outputDirectory, 'propuesta-valor.mp4')
const expectedSize = 10836258

const chunkNames = (await readdir(chunksDirectory))
  .filter((name) => name.startsWith('propuesta-valor.part'))
  .sort()

if (chunkNames.length === 0) {
  throw new Error('No se encontraron las partes del video')
}

const chunks = await Promise.all(
  chunkNames.map((name) => readFile(path.join(chunksDirectory, name)))
)

await mkdir(outputDirectory, { recursive: true })
await writeFile(outputFile, Buffer.concat(chunks))

const { size } = await stat(outputFile)
if (size !== expectedSize) {
  throw new Error(`El video generado tiene ${size} bytes; se esperaban ${expectedSize}`)
}

console.log(`Video preparado: ${outputFile} (${size} bytes)`)
