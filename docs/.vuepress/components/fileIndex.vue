<template>
    <div>
        <a :href=link>
            <div class="card1">
                <div class="container1">
                    <h4><strong>{{name}}</strong></h4>
                </div>
            </div>
        </a>
    </div>
</template>
<script>
    export default {
        name: 'fileIndex',
        props: ['name','link']
    }
</script>
<style>
    .card1 {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 40%;
        border-radius: 5px;
        margin: 10px;
        float: left;
    }

    .card1:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    img {
        border-radius: 5px 5px 0 0;
    }

    .container1 {
        padding: 2px 32px;
    }
    a {
        text-decoration: none;
    }
</style>
