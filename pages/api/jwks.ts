import type { NextApiRequest, NextApiResponse } from 'next'
import jose from 'node-jose';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const keyStore = await jose.JWK.asKeyStore(process.env.KEYS.toString());

  // Get data from your database
  res.status(200).json(keyStore.toJSON())
}
