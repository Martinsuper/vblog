<template>
    <div>
        <a :href=link>
            <div class="card">
                <div class="container">
                    <h4>{{name}}</h4>
                </div>
            </div>
        </a>
    </div>
</template>
<script>
    export default {
        name: 'folderIndex',
        props: ['name','link']
    }
</script>
<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 40%;
        border-radius: 5px;
        /*margin: 10px;*/
        margin: 10px;
        float: left;
        background: #f0f8f3;
        /*background: #dacb51;*/
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    img {
        border-radius: 5px 5px 0 0;
    }

    .container {
        padding: 2px 32px;
    }
    a {
        text-decoration: none;
    }
</style>
