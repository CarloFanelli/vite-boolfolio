<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
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
    };
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
    ProjectCard,
    AppHeader
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <div class="container my-4">
      <div class="row">
        <div class="col-4 g-4" v-for="project in  this.projects ">
          <ProjectCard :project='project'></ProjectCard>

        </div>
      </div>

      <div class="pagination d-flex justify-content-between mt-3">
        <div class="dot" @click="prev()">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
            class="bi bi-arrow-left-square-fill text-danger" viewBox="0 0 16 16">
            <path class="bg-danger"
              d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
          </svg>
        </div>
        <div class="current">
          <h4> page: {{ this.currentPage }}</h4>

        </div>
        <div class="dot " @click="next()">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
            class="bi bi-arrow-right-square-fill text-danger" viewBox="0 0 16 16">
            <path class="bg-danger"
              d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
          </svg>
        </div>
      </div>



    </div>
  </main>
</template>

<style scoped></style>
