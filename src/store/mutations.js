export default {
  updateItemNum(state, { index, value }) {
    state.products[index].num = value;

    // здесь можно бы было обновлять total, но лучше пусть пересчитывается в getter'е
  },
};
