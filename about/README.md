---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: 'Mengmeng Wang'
info: 'mengmengwang@zju.edu.cn'
interests: 'Interests: Video Analysis.'
socials:
- title: github
  link: https://github.com/sallymmx
- title: scholar
  link: https://scholar.google.com/citations?user=VSRnUiUAAAAJ&hl=zh-CN
- title: email
  link: 'mengmengwang@zju.edu.cn'
actions:
- text: Projects
  link: /projects/
- text: Blog
  link: https://www.zhihu.com/people/wang-xi-60-66
footer: Made with ♥ by Fing. Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

I have attended the College of Computer Science & Technology,  Zhejiang University of Technology as a faculty in 2024. My research area includes Robotic Embodied Intelligence, Compute Vision and Multi-media Technology, specifically including video action recognition, object tracking, object detection, depth estimation, text-to-image editing and so on. :dizzy:

My works have been published on top computer vision transactions/conferences (TPAMI, TIP, TMM, CVPR, ICCV, ICLR, AAAI etc) and top robotic conferences (ICRA, IROS). 

</AboutCard>

<style lang="stylus">
.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)

  .last-updated
    display none

</style>