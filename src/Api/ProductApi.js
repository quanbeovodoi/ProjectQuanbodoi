import requestClient from './requestClient'

const ProductApi = {
  getAll() {
    const urlParam = 'Products.json'
    return requestClient.get(urlParam)
  },
  getOne(id) {
    const urlParam = `Products/${id}.json`
    return requestClient.get(urlParam)
  },
  deleteProduct() {},
  update() {},
  add() {},
}

export default ProductApi