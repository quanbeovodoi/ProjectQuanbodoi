import requestClient from './requestClient'

const ProductApi = {
  getAll() {
    const urlParam = 'Products.json'
    return requestClient.get(urlParam)
  },
  getCate() {
    const urlParam = `Products/category_list.json`
    return requestClient.get(urlParam)
  },
  deleteProduct() {},
  update() {},
  add() {},
}

export default ProductApi