<template>
    <div>
        <a :href=link target="_blank">
            <div class="card2">
                <img src="https://element.eleme.cn/static/theme-index-blue.c38b733.png"/>
                <div class="container2">
                    <h1>{{name}}</h1>
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
    .card2 {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 40%;
        border-radius: 5px;
        /*margin: 10px;*/
        margin: 10px;
        float: left;
        /*background: #f0f8f3;*/
        /*background: #dacb51;*/
    }

    .card2:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    img {
        border-radius: 5px 5px 0 0;
    }

    .container2 {
        padding: 5px 32px;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",
        Arial,sans-serif;
        text-align: center;
    }
    a {
        text-decoration: none;
    }
</style>
