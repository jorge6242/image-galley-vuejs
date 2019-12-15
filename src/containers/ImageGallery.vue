<template>
  <div class="image-gallery">
    <Modal v-show="isModalVisible" @close="closeModal">
      <h3>{{ selectedImage.author }}</h3>
      <img 
        class="image-gallery__selected-image" 
        v-if="selectedImage" 
        v-lazy="selectedImage.download_url" 
        alt="image test" 
      />
    </Modal>
    <div>
      <h1>Image Gallery</h1>
    </div>
    <Pagination
      :page="page"
      :handlePrevious="handlePrevious"
      :onChangeLimit="onChangeLimit"
      :handleNext="handleNext"
      :handleSearch="handleSearch"
    />
    <div v-if="loading">Loading ...</div>
    <div class="image-gallery__list" v-else>
      <div v-for="image in images" v-bind:key="image.id" @click="handleSelect(image)">
        <GalleryItem :author="image.author" :id="image.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

import GalleryItem from "../components/GalleryItem";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";

/**
 * Image Gallery Container
 */

export default {
  name: "app",
  components: {
    GalleryItem,
    Pagination,
    Modal
  },
  data: function() {
    return {
      page: 1,
      limit: 30,
      images: [],
      loading: false,
      isModalVisible: false,
      selectedImage: { },
    };
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
    },
    /**
     * Search by Author
     *
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     */
    handleSearch(event) {
      const { page, limit } = this;
      const term = event.target.value;
      this.getImages({ page, limit, isSearch: true, term });
    },
    handlePrevious() {
      const { page, limit } = this;
      if (page > 1) this.getImages({ page: page - 1, limit });
    },
    handleNext() {
      const { page, limit } = this;
      if (page < 100) this.getImages({ page: page + 1, limit });
    },
    /**
     * Change the limit per page in the pagination
     *
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     */
    onChangeLimit(event) {
      const { page } = this;
      const limit = event.target.value;
      this.getImages({ page, limit });
    },
    /**
     * Public api to get the image list
     *
     * @param {number} page Page number
     * @param {number} limit Number of images to show
     * @param {boolean} isSearch Validation to get the images by filter
     * @param {string} term Name to filter the images by author
     */
    async fetchData({ page, limit, isSearch = false, term }) {
      this.loading = true;
      try {
        const { data } = await this.$http.get("https://picsum.photos/v2/list", {
          params: {
            page,
            limit
          }
        });
        this.page = page;
        this.limit = limit;
        if (isSearch) {
          this.images = data.filter(img => img.author.includes(term));
        } else {
          this.images = data;
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
    /**
     * Method to debounce the API in order to reduce number of server requests.
     *
     * @param {number} page Page number
     * @param {number} limit Number of images to show
     * @param {boolean} isSearch Validation to get the images by filter
     * @param {string} term Name to filter the images by author
     */
    getImages: _.debounce(function({ page, limit, isSearch, term }) {
      this.fetchData({ page, limit, isSearch, term });
    }, 500),
    handleSelect(image){
      this.selectedImage = image;
      this.isModalVisible = true;
    }
  },
  created() {
    const { page, limit } = this;
    this.getImages({ page, limit });
  }
};
</script>

<style lang="scss" scoped>
.image-gallery {
  .image-gallery__selected-image {
    width: 50%;
  }
  .image-gallery__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>