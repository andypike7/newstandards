// getters
export default {
  getProducts(state) {
    return state.products;
  },

  // я не уверен в достоверности total, поэтому лучше вычислять на лету
  getTotal(state) {
    return state.products.reduce((acc, el) => acc + el.price * el.num, 0);
  },
}; // getters
