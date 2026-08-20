/* ==========================================
   BLOG SEARCH + CATEGORY FILTER
   Joyce Chu Website
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // DOM
    const searchInput = document.getElementById("blogSearch");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const blogContainer = document.getElementById("blogContainer");

    // 若不是 blog/index.html 就結束
    if (!blogContainer) return;

    let currentCategory = "全部";
    let keyword = "";

    // ========= Render =========

    function render(posts){

        blogContainer.innerHTML = "";

        if(posts.length===0){

            blogContainer.innerHTML=`

                <div class="no-result">

                    <h3>找不到符合的文章</h3>

                    <p>請試試其他關鍵字。</p>

                </div>

            `;

            return;

        }

        posts.forEach(post=>{

            blogContainer.innerHTML +=`

            <article class="blog-card">

                <a href="${post.url}" class="blog-image">

                    <img src="${post.image}" alt="${post.title}">

                    <span>閱讀文章 →</span>

                </a>

                <div class="blog-content">

                    <span class="blog-category">

                        ${post.category}

                    </span>

                    <h3>

                        <a href="${post.url}">

                            ${post.title}

                        </a>

                    </h3>

                    <p>

                        ${post.summary}

                    </p>

                    <div class="blog-footer">

                        <span class="blog-date">

                            ${post.date}

                        </span>

                        <a href="${post.url}" class="blog-read">

                            閱讀全文 →

                        </a>

                    </div>

                </div>

            </article>

            `;

        });

    }

    // ========= Filter =========

    function filterPosts(){

        let result = blogPosts;

        // Category

        if(currentCategory!="全部"){

            result=result.filter(post=>post.category===currentCategory);

        }

        // Keyword

        if(keyword!=""){

            const q=keyword.toLowerCase();

            result=result.filter(post=>

                post.title.toLowerCase().includes(q)

                ||

                post.summary.toLowerCase().includes(q)

                ||

                post.category.toLowerCase().includes(q)

                ||

                post.tags.join(" ").toLowerCase().includes(q)

            );

        }

        render(result);

    }

    // ========= Search =========

    if(searchInput){

        searchInput.addEventListener("input",(e)=>{

            keyword=e.target.value.trim();

            filterPosts();

        });

    }

    // ========= Category =========

    categoryButtons.forEach(btn=>{

        btn.addEventListener("click",()=>{

            categoryButtons.forEach(item=>{

                item.classList.remove("active");

            });

            btn.classList.add("active");

            currentCategory=btn.dataset.category;

            filterPosts();

        });

    });

    // Initial

    render(blogPosts);

});
