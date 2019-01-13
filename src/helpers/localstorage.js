const storeLocal = {
    /**
     * Save the last category selected
     */
    saveLastCategory: categoryId => {
        localStorage.setItem('lastCategory', JSON.stringify(categoryId))
    },
    
    /**
     * Get the last category selected
     */
    getLastCategory: () => {
        return JSON.parse(localStorage.getItem('lastCategory'))
    },

    /**
     * Save the state of the categories
     */
    saveCategoryGame: (categoryData, categoryId) => {
        const data = JSON.parse(localStorage.getItem('categoriesData'))
        const newData = {
            ...data,
            [categoryId]: categoryData
        }        
        localStorage.setItem('categoriesData', JSON.stringify(newData))
    },

    /**
     * Get the previous state of a category
     */
    getCategoryGame: categoryId => {
        const data = JSON.parse(localStorage.getItem('categoriesData'))
        return data ? data[categoryId] : null
    }
}

export default storeLocal