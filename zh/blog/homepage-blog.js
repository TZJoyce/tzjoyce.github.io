document.addEventListener("DOMContentLoaded",()=>{

const container=document.getElementById("homepageBlog");

if(!container) return;

const posts=blogPosts.filter(post=>post.homepage);

container.innerHTML="";

posts.forEach(post=>{

container.innerHTML+=`

<div class="blog-card">

<div class="blog-image">

<a href="blog/${post.url}">

<img src="${post.image}" alt="${post.title}">

<span>閱讀文章 →</span>

</a>

</div>

<div class="blog-content">

<span class="blog-category">

${post.category}

</span>

<h3>

<a href="blog/${post.url}">

${post.title}

</a>

</h3>

<p>

${post.summary}

</p>

<div class="blog-footer">

<span>

${post.date}

</span>

<a href="blog/${post.url}" class="blog-read">

閱讀全文 →

</a>

</div>

</div>

</div>

`;

});

container.innerHTML+=`

<div class="blog-more">

<div>

<h3>

更多文章

</h3>

<p>

查看更多 B2B 行銷策略、SEO、Lead Generation 與 GA4 分享。

</p>

<a href="blog/index.html"

class="button">

查看更多文章

</a>

</div>

</div>

`;

});
