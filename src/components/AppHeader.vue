<script>
export default {
    name: 'AppHeader',
}
</script>


<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-black px-2">
            <a class="navbar-brand" href="#">Portfolio</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" :to="{ name: 'Home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active"
                            :to="{ name: 'Projects' }">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" :to="{ name: 'About' }">About</router-link>

                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active"
                            :to="{ name: 'Contacts' }">Contacts</router-link>

                    </li>

                </ul>
                <form class="d-flex my-2 my-lg-0">
                    <input class="form-control me-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </header>
</template>


<style lang="scss" scoped></style>