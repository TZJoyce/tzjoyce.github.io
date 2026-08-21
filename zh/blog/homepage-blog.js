document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("homepageBlog");

  if (!container) return;

  const posts = blogPosts.filter(post => post.homepage);

  container.innerHTML = "";

  // 1. 動態渲染首頁精選文章（套用 Landed 的網格系統 col-4）
  posts.forEach(post => {
    container.innerHTML += `
      <section class="col-4 col-6-medium col-12-xsmall">
        <div class="box alt" style="height: 100%; display: flex; flex-direction: column;">
          <a href="blog/${post.url}" class="image fit" style="margin-bottom: 1em;">
            <img src="${post.image}" alt="${post.title}" />
          </a>
          <span class="blog-category" style="font-size: 0.8em; font-weight: bold; color: #e44c65; text-transform: uppercase; margin-bottom: 0.5em;">
            ${post.category}
          </span>
          <h3 style="font-size: 1.1em; margin-bottom: 0.5em;">
            <a href="blog/${post.url}">${post.title}</a>
          </h3>
          <p style="font-size: 0.9em; flex-grow: 1; line-height: 1.5; margin-bottom: 1em;">
            ${post.summary}
          </p>
          <div style="font-size: 0.8em; color: #888; display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 0.5em; border-top: 1px solid rgba(255,255,255,0.1);">
            <span>${post.date}</span>
            <a href="blog/${post.url}" class="button small">閱讀全文</a>
          </div>
        </div>
      </section>
    `;
  });

  // 2. 底部「查看更多文章」區塊（佔滿整列 col-12）
  container.innerHTML += `
    <section class="col-12" style="margin-top: 2em; text-align: center;">
      <h3>更多 B2B 行銷觀點</h3>
      <p>查看更多 B2B 行銷策略、SEO、Lead Generation 與 GA4 分享。</p>
      <ul class="actions special">
        <li><a href="blog/index.html" class="button primary">查看更多文章</a></li>
      </ul>
    </section>
  `;
});
