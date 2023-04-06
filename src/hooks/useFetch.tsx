import React, { useState } from 'react'

const useFetch = () => {
  const [loading, setLoading] = useState(false)

  const callEndpoint = async (url: string) => {
    setLoading(true)
    let result = {}
    try {
      const response = await fetch(url, {
        headers: {
          authorization: 'b62010d0e3b3d03004698f6d1ed440d0e7870d3b7910118309d0dc18be8671ec',
        }
      })
      const result = await response.json()
      setLoading(false)
      return result
    } catch (error) {
      setLoading(false)
      return {}
    }
  }

  return {loading, callEndpoint}
}

export default useFetch