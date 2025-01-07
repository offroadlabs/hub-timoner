export const BASE_URL = (
  process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : 'https://hub.timoner.com'
) 