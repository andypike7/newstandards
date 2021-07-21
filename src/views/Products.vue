<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="products"
      item-key="name"
      hide-default-header
      hide-default-footer
    >
      <!--
          тут можно было бы обойтись слотом только для 3-й колонки, но мне не нравится
          как расползается первая колонка, word-wrap для неё не работает
      -->
      <template v-slot:[`item`]="{ item, index }">
        <tr>
          <td class="products__name">
            {{ item.name }}
          </td>
          <td>
            {{ item.price }}
          </td>
          <td>
            <v-text-field
              :value="item.num"
              @focus="activeIndex = index"
              @input="changeNum"
              hide-details
              solo
              dense
              type="number"
            />
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data: () => ({
    headers: [
      { value: 'name' },
      { value: 'price' },
      { value: 'num' },
    ],
    activeIndex: 0,
    products: [],
  }),
  methods: {
    changeNum(num) {
      const value = Number(num); // можно через '+', можно и parseInt(el.num, 10)

      // небольшая проверка на '-', 'e', '.'
      if (!Number.isNaN(value) && value >= 0) {
        this.$store.commit('updateItemNum', { index: this.activeIndex, value });
      }
    },
  },
  mounted() {
    // на всякий случай клонирую, хотя и без этого работает
    this.products = [...this.$store.getters.getProducts];

    // тут можно было бы пересчитать total, если бы я не доверял state,
    // поэтому вариант с getter'ом total лучше
  },
};
</script>

<style scoped>
.products__name {
  text-align: left;
  min-width: 200px;
}
</style>
