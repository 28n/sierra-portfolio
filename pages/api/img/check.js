import path from 'path'
import fs from 'fs'
const filePath = path.resolve('.', 'public/images/checkmark.png')
const checkmark = fs.readFileSync(filePath)

export default async function handle(req, res) {
  res.setHeader('Content-Type', 'image/png')
  res.send(checkmark)
}
