const storeLocal = {
    saveLastCategory : categoryId => {
        localStorage.setItem('lastCategory', JSON.stringify(categoryId))
    },
    
    getLastCategory : _=> {
        return JSON.parse(localStorage.getItem('lastCategory'))
    },

    saveCategoryGame : (categoryData, categoryId) => {
        const data = JSON.parse(localStorage.getItem('categoriesData'))
        const newData = {
            ...data,
            [categoryId]: categoryData
        }        
        localStorage.setItem('categoriesData', JSON.stringify(newData))
    },
    getCategoryGame : (categoryId) => {
        const data = JSON.parse(localStorage.getItem('categoriesData'))
        return data ? data[categoryId] : null
    }
}

export default storeLocal