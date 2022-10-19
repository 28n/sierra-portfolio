import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const data = req.body

  const comment = await prisma.comment.create({
    data: {
      author: data.name,
      content: data.comment,
      isPremium: data.isPremium,
      isAdmin: data.isAdmin,
    }
  })

  res.json(comment)
}
