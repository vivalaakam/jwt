import type { User } from '../../interfaces'
import { useRouter } from 'next/router'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function UserPage() {
  const { query } = useRouter()

  return <div>
    {query.id}
    <br />
    <a href={`https://haqq.page.link/?link=https%3A%2F%2Fhaqq.network%3Fclaim_code%3D${query.id}&apn=com.haqq.wallet`}>Android</a>
    <br />
    <a href={`https://haqq.page.link/?link=https%3A%2F%2Fhaqq.network%3Fclaim_code%3D${query.id}&isi=6443843352&ibi=com.haqq.wallet&ifl=http%3A%2F%2Fbeta.itunes.apple.com%2Fv1%2Fapp%2F6443843352`}>iOS</a>
    
    </div>
}
