<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';


export default {
  data() {
    return {
      baseURL: 'http://127.0.0.1:8000/',
      projectsURI: 'api/projects',
      projects: [],
      pages: null,
      currentPage: 1,
      pageURI: '/?page='
    }
  },
  methods: {
    navigation() {
      axios.get(this.baseURL + this.projectsURI + this.pageURI + this.currentPage)
        .then(response => {
          this.currentPage = response.data.projects.current_page;
          this.projects = response.data.projects.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    prev() {
      if (this.currentPage === 1) {
        this.currentPage = this.pages;
        console.log(this.currentPage);
      }
      else {
        this.currentPage--;
        console.log(this.currentPage);
      }
      this.navigation();
    },
    next() {
      if (this.currentPage === 4) {
        this.currentPage = 1;
      }
      else {
        this.currentPage++;
      }
      this.navigation();
    }
  },
  mounted() {
    axios.get(this.baseURL + this.projectsURI + this.pageURI + this.currentPage)
      .then(response => {
        this.pages = response.data.projects.last_page;
        //console.log(response.data.projects.data);
        this.projects = response.data.projects.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view>

  </router-view>
</template>

<style scoped></style>
