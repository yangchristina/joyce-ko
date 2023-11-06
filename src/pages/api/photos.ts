// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import { promises as fs } from 'fs'

export type PhotoData = {
  imageFilenames: string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PhotoData>
) {
  const imageDirectory = path.join(process.cwd(), '/public/photos');
  const imageFilenames = await fs.readdir(imageDirectory)
  res.status(200).json({ imageFilenames })
}
