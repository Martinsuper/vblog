module.exports = {
    '/daily/learn/lang/java/': getJavaSidebar(),
    '/daily/learn/lang/go/': getGoSidebar()
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
                ['','首页'],
                'go环境变量设置'
            ]
        }
    ]
}
