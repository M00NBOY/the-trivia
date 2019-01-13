const api = {
  /**
   * Get the list of categories
   * @param offset used to get the next lists
   */
  async getCategories (offset) {
    const response = await fetch(`http://jservice.io/api/categories?count=100&offset=${offset}`)
    const json = response.json()
    return json
  },

  /**
   * Get questions of a category
   * @param id used to indicate the category
   */
  async getCategorybyId (id) {
    const response = await fetch(`http://jservice.io/api/category?id=${id}`)
    const json = await response.json()
    return json
  }
}

export default api