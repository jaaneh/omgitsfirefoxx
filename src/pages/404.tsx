import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Custom404 = (): JSX.Element => {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])

  return <p>404 - Not Found</p>
}

export default Custom404
