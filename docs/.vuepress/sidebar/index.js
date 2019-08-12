module.exports = {
    '/daily/learn/lang/java/': getJavaSidebar(),
    '/daily/learn/lang/go/': getGoSidebar(),
    '/technote/readBook/java编程思想/': getBookSidebar()
}

function getJavaSidebar() {
    return [
        // '开发流程',
        // '设计模式'
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
