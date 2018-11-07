const api = {
  async getCategories (offset) {
    const response = await fetch(`http://jservice.io/api/categories?count=100&offset=${offset}`)
    const json = response.json()
    return json
  },
  async getCategorybyId (id) {
    const response = await fetch(`http://jservice.io/api/category?id=${id}`)
    const json = await response.json()
    return json
  }
}

export default api