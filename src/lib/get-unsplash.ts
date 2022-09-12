const ACCESS_KEY = import.meta.env.UNSPLASH_ACCESS_KEY
const API_URL = 'https://api.unsplash.com'

export const getImage = async (id) => {
  const res = await fetch(`${API_URL}/image/${id || 'random'}`, {
    method: 'GET',
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  })

  return await res.json()
}
