
export const apiBookService = {
ask,
}


function ask() {
    return axios.get('https://www.googleapis.com/books/v1/volumes?printType=books&q=effective%20javascript')
        .then(res => res.data)
        .then(console.log)
        .catch(err => {
            console.log('Had error:', err)
        })
}
