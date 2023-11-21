<script>
export default {
    name: 'App404'
}
</script>

<template>
    <div>
        <div class="container pt-5">
            <div class="row">
                <div class="col-8 m-auto text-center">
                    <h1 class="text-danger">
                        404
                    </h1>
                    <h4>page not found</h4>
                    <p>la risorsa che cerchi non esiste</p>
                    <router-link class="btn btn-info text-white" :to="{ name: 'Projects' }">back to the
                        projects</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>