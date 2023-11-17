<script>
import axios from 'axios';


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
          this.currentPage = response.data.projects.current_page
          this.projects = response.data.projects.data
        })
        .catch(err => {
          console.log(err);
        })
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
        this.pages = response.data.projects.last_page
        //console.log(response.data.projects.data);
        this.projects = response.data.projects.data
      })
      .catch(err => {
        console.log(err);
      })
  }

}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-black px-2">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="#" aria-current="page">Home <span
                class="visually-hidden">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a class="dropdown-item" href="#">Action 1</a>
              <a class="dropdown-item" href="#">Action 2</a>
            </div>
          </li>
        </ul>
        <form class="d-flex my-2 my-lg-0">
          <input class="form-control me-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </header>

  <main>
    <div class="container my-4">
      <div class="row">
        <h1>numero pagine: {{ this.pages }}</h1>
        <h1> pagina corrente: {{ this.currentPage }}</h1>
        <div class="col-4 g-4" v-for="project in  this.projects ">
          <div class="card h-100">
            <div class="card-header">
              <h3>{{ project.title }}</h3>
              <div class="type">
                <span>{{ project.type.name }}</span>
              </div>
            </div>
            <div class="card-body">
              <img class="img-fluid" :src="this.baseURL + 'storage/placeholders/' + project.cover_image" alt="">
              <p>{{ project.content }}</p>
              <div class="technologies d-flex justify-content-center">
                <div class="mx-1 badge rounded-pill text-bg-primary" v-for=" technology  in  project.technologies ">
                  <p class="m-0">{{ technology.name }}</p>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <a target=”_blank” class="text-decoration-none" :href="project.project_link">Link</a>
              <a target=”_blank” class="text-decoration-none" :href="project.git_link">GitHub</a>

            </div>
          </div>
        </div>
      </div>

      <div class="pagination d-flex justify-content-between">
        <div class="dot">
          <button class="btn-primary" @click="prev()">prev</button>
        </div>
        <div class="dot">
          <button class="btn-primary" @click="next()">next</button>
        </div>
      </div>



    </div>
  </main>
</template>

<style scoped></style>
