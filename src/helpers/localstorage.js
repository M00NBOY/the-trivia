const storeLocal = {
    saveLastCategory : categoryId => {
        localStorage.setItem('lastCategory', JSON.stringify(categoryId))
    },
    getLastCategory : _=> {
        return JSON.parse(localStorage.getItem('lastCategory'))
    },

    saveCategoryGame : (categoryData, categoryId) => {
        let data = JSON.parse(localStorage.getItem('categoriesData'))
        if (!data) {
            data= {}
        }
        data[categoryId] = categoryData
        localStorage.setItem('categoriesData', JSON.stringify(data))
    },
    getCategoryGame : (categoryId) => {
        const data = JSON.parse(localStorage.getItem('categoriesData'))
        return data ? data[categoryId] : null
    }
}

export default storeLocal