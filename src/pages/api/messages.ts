// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

// const imageDirectory = path.join(process.cwd(), '/public/midj');
// const imageFilenames = await fs.readdir(imageDirectory)
// console.log(imageFilenames)