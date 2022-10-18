import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handle(req, res) {
  const data = req.body

  const comment = await prisma.comment.delete({
    where: {
      id: data.id
    }
  })

  res.json(comment)
}
