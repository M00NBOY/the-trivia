const storeLocal = {
    saveCategory : category => {
        localStorage.setItem('category', JSON.stringify(category))
    },
    getCategory : _=> {
        return localStorage.getItem('category')
    }
}

export default storeLocal