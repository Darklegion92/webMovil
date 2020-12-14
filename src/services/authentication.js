// TODO: es necesaria hacer un endpoint
export const isAuthenticated = () => {
  const token = localStorage.getItem('Token')
  if (token) {
    return true
  } else {
    return false
  }
}
