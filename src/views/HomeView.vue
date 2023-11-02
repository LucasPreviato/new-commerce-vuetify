<template>
  <v-app theme="light">
    <Navbar class="index" />
    <v-container class="mt-16">
      <v-row>
        <v-col cols="12" md="6">
          <ProductCard
            v-for="(product, index) in products"
            :key="index"
            :product="product"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import Navbar from '@/components/navbar/AppNavbar.vue';
import ProductCard from '@/components/products/ProductCard.vue';
import api from '@/services/api';
import { ref, onMounted, computed } from 'vue';
export default {
  name: 'HomeView',
  components: {
    Navbar,
    ProductCard,
  },
  data: () => ({
    initialProducts: [],
  }),
  setup() {
    const products = ref({ total: 0, showing: 0, result: [] });
    const currentPage = ref(1);
    const itemsPerPage = 8;
    const isLoading = ref(false);
    const searchSku = ref('');
    const searchedProducts = ref([]);
    const isSearching = ref(false);

    // eslint-disable-next-line no-unused-vars
    const searchProducts = async (sku) => {
      searchSku.value = sku;
      isLoading.value = true;

      try {
        const response = await api.get(`/products/${sku}`, {
          headers: {
            Authorization: `Bearer b62d99b28239c888ebce0ac8b61339f515306f8d`,
          },
        });
        console.log('Produtos da API:', response.data);
        searchedProducts.value = response.data.result;
        isSearching.value = true;
        isLoading.value = false;
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        searchedProducts.value = [];
        isSearching.value = false;
        isLoading.value = false;
      }
    };

    const fetchProducts = async () => {
      isLoading.value = true;

      try {
        const response = await api.get('/products', {
          headers: {
            Authorization: `Bearer 0be6c68a6e91edb4d0cbe18726340c7ccab3c061`,
          },
        });
        console.log('Produtos da API:', response.data);
        products.value = response.data;
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    const clearSearch = () => {
      searchedProducts.value = [];
      searchSku.value = '';
      isSearching.value = false;
    };

    const displayedProducts = computed(() => {
      if (isSearching.value) {
        return searchedProducts.value;
      } else {
        const startIndex = (currentPage.value - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        if (startIndex < products.value.result.length) {
          return products.value.result.slice(startIndex, endIndex);
        }
      }
      return [];
    });

    const totalPages = computed(() => {
      if (isSearching.value) {
        return Math.ceil(searchedProducts.value.length / itemsPerPage);
      } else {
        return Math.ceil(products.value.result.length / itemsPerPage);
      }
    });

    const onPageChange = (page) => {
      currentPage.value = page;
    };

    return {
      products,
      currentPage,
      itemsPerPage,
      isLoading,
      searchedProducts,
      isSearching,
      clearSearch,
      displayedProducts,
      totalPages,
      onPageChange,
    };
  },
};
</script>
<style>
.index {
  z-index: 9999;
}
</style>
