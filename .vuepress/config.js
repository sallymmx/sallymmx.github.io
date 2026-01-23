module.exports = {
  title: "Mengmeng Wang",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Publications", link: "/publications/" },
      { text: "Projects", link: "/projects/" },
      { text: "About", link: "/about/" },
      { text: "Blog", link: "https://www.zhihu.com/column/visual-tracking" }
    ],
    sidebar: {
      '/projects/': genSidebarConfig('Projects')
    },
   
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'visual-tracking',
        'depth-estimation',
        'action-recognition',
      ]
    }
  ]
}

