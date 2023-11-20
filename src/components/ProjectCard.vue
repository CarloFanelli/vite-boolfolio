<script>
export default {
    name: 'ProjectCard',
    props: {
        'project': Object
    },
    data() {
        return {
            baseURL: 'http://127.0.0.1:8000/',
        }

    },

}
</script>
<template>
    <router-link class="text-decoration-none" :to="{ name: 'Single-Project', params: { slug: this.project.slug } }">


        <div class="card h-100">
            <div class="card-header">
                <h3>{{ project.title }}</h3>
                <div class="type">
                    <span>{{ project.type.name }}</span>
                </div>
            </div>
            <div class="card-body d-flex flex-column">
                <img class="w-75 m-auto " :src="this.baseURL + 'storage/placeholders/' + project.cover_image" alt="">
                <p class="text-truncate">{{ project.content }}</p>
                <div class="technologies d-flex justify-content-center">
                    <div class="mx-1 badge rounded-pill text-bg-primary" v-for="  technology   in   project.technologies  ">
                        <p class="m-0">{{ technology.name }}</p>
                    </div>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <a target=”_blank” class="text-decoration-none" :href="project.project_link">Link</a>
                <a target=”_blank” class="text-decoration-none" :href="project.git_link">GitHub</a>

            </div>
        </div>


    </router-link>
</template>


<style lang="scss" scoped></style>