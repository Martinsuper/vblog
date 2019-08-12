module.exports = {
    title: '学海无涯',
    description: '无，名万物之始；有，名万物之母',
    // base: "",
    themeConfig: {
        nav: require('./nav/nav'),
        sidebar: require('./sidebar/index')
    },
    markdown: {
        extendMarkdown: md => {
            md.set({
                html: true
            })
            md.use(require('markdown-it-katex'))
        }
    },
    head: [
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
        }],
        ['link', {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
        }]
    ]
}
