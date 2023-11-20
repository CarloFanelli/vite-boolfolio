<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            baseURL: 'http://127.0.0.1:8000/',
            singleProjectURI: 'api/project/',
            project: [],
            response: false
        }
    },

    mounted() {
        axios.get(this.baseURL + this.singleProjectURI + this.$route.params.slug)

            .then(response => {
                //console.log(response);
                if (response.data.response) {
                    this.project = response.data.single_project;
                    this.response = true
                    console.log(this.project);
                }
                else {
                    this.$router.push({ slug: 'not-found' });
                }
            })
            .catch(err => {
                console.log(err);
            });
    },

}


</script>

<template>
    <div v-if="this.response">
        <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
                <div class="row">
                    <div class="col-8">
                        <h1 class="display-5 fw-bold">{{ this.project.title }}</h1>
                        <span>{{ this.project.type.name }}</span>

                        <p class="col-md-8 fs-4">{{ this.project.content }}</p>
                        <div class="technologies d-flex justify-content-center">
                            <div class="mx-1 badge rounded-pill text-bg-primary"
                                v-for="  technology   in   this.project.technologies  ">
                                <p class="m-0">{{ technology.name }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img class="w-75 m-auto " :src="this.baseURL + 'storage/placeholders/' + project.cover_image"
                            alt="">

                    </div>
                </div>

            </div>
        </div>
    </div>
    <div v-else>
        <h1>ciao</h1>
    </div>
</template>



<style lang="scss" scoped></style>


<!-- 
<template>
    <div>
        <h1>ciao</h1>
    </div>
</template>

<script>
export default {
    name: 'SingleProject'
}
</script>

<style lang="scss" scoped></style>

 -->