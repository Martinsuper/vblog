module.exports = {
    '/daily/learn/lang/java/': getJavaSidebar(),
    '/daily/learn/lang/go/': getGoSidebar(),
    '/technote/readBook/java编程思想/': getBookSidebar(),
    '/technote/tool/git/' : getBaseGitSidebar(),
    '/technote/technology/redis/': getRedisSidebar(),
    '/technote/technology/MQ/RabbitMQ/': getRabbitMQSidebar()
}

function getJavaSidebar() {
    return [
        {
            title: "java",
            collapsable: false,
            children: [
                '开发流程',
                '设计模式',
                'Guava学习',
                'java之数据类型'
            ]
        }
    ]
}

function getGoSidebar() {
    return [
        {
            title: "go",
            collapsable: false,
            children: [
                'go环境变量设置'
            ]
        }
    ]
}
function getBookSidebar() {
    return [
        {
            title: "java编程思想",
            collapsable: false,
            children: [
                ['第一章对象导论','第一章 对象导论'],
                ['第二章一切都是对象','第二章 一切都是对象']
            ]
        }
    ]
}

function getBaseGitSidebar() {
    return [
        {
            title: "git入门基础",
            collapsable: false,
            children: [
                ['git基本使用','git基本使用']
            ]
        }
    ]
}

function getRedisSidebar() {
    return [
        {
            title: "redis",
            collapsable: false,
            children: [
                ['redis安装','redis安装'],
                ['redis使用','基本使用'],
                ['redis集群','redis集群']
            ]
        }
    ]
}
function getRabbitMQSidebar() {
    return [
        {
            title: "RabbitMQ",
            collapsable: false,
            children: [
                ['安装RabbitMQ','安装'],
                ['RabbitMQ基础','基本概念']
            ]
        }
    ]
}