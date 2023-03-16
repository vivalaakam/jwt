
import type { NextApiRequest, NextApiResponse } from 'next'
import jose from 'node-jose';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const {email} = await req.body

    const keyStore = await jose.JWK.asKeyStore(process.env.KEYS.toString());
  
    const [key] = keyStore.all({ use: "sig" });
  
    const opt = { compact: true, jwk: key, fields: { typ: "jwt" } };

   const aud =  email.split("@")

    const iat = Math.floor(Date.now() / 1000);

    const payload = JSON.stringify({
      exp: iat + 1440 * 60,
      iat: iat,
      sub: email,
      iss: "haqq app",
      aud: aud[aud.length - 1]
    });
  
    const idToken = await jose.JWS.createSign(opt, key).update(payload).final();

  // Get data from your database
  res.status(200).json({idToken})
}
