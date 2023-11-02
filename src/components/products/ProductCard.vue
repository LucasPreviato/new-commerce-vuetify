<template>
 <v-card class="product-card" :color="cardColor">
    <v-img
      :src="product.image"
      height="200px"
      class="product-image"
    ></v-img>
    <v-card-title> {{ product.name }} </v-card-title>
    <v-card-text>
      <p>{{ product.model }}</p>
      <p>{{ product.price }}</p>
    </v-card-text>
    <v-card-subtitle>{{ `$${product.price.toFixed(2)}` }}</v-card-subtitle>
    <v-btn @click="addToCart" color="primary">Adicionar ao Carrinho</v-btn>
 </v-card>
</template>


<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      cardColor: {
        type: String,
        default: 'white',
      },
    },
  },
  data: () => ({
    //
  }),
};

</script>

<style scoped>
.product-card {
  width: 300px;
  margin: 10px;
}

.product-image {
  height: 200px;
  object-fit: cover;
}
</style>
