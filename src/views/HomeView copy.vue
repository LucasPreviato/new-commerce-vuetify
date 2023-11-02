<template>
  <v-container>
    <product-search @search="searchProducts"></product-search>
    <v-btn @click="clearSearch">Limpar Pesquisa</v-btn>
    <ProductList :paginatedProducts="displayedProducts" />
    <!-- Exibir um indicador de carregamento -->
    <v-row v-if="isLoading">
      <v-col cols="12">
        <v-progress-circular indeterminate color="black"></v-progress-circular>
      </v-col>
    </v-row>

    <!-- Controles de Paginação -->
    <v-row v-if="totalPages > 1">
      <v-col cols="12">
        <v-pagination v-model="currentPage" :length="totalPages" @input="onPageChange" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from 'vue';
import api from '@/services/api';
import ProductList from '../components/products/product-list/ProductListComponent.vue';
import ProductSearch from '@/components/products/search-product/ProductSearchComponent.vue';
// import useA

export default defineComponent({
  name: 'CatalogView',

  components: {
    ProductList,
    ProductSearch,
  },
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
});
</script>
