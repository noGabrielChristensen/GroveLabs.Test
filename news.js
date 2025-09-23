let posts = JSON.parse(localStorage.getItem("posts") || "[]");

function createPost() {
    const text = document.getElementById("newPostText")?.value;
    if(text) {
        posts.unshift({author: localStorage.getItem("userRole"), content: text, likes: 0, comments: []});
        localStorage.setItem("posts", JSON.stringify(posts));
        renderPosts();
        document.getElementById("newPostText").value = "";
    }
}

function renderPosts() {
    const feed = document.getElementById("newsFeed");
    if(!feed) return;
    feed.innerHTML = "";
    posts.forEach((post, index) => {
        const div = document.createElement("div");
        div.innerHTML = `<p><b>${post.author}:</b> ${post.content}</p>
                         <button onclick="likePost(${index})">Like (${post.likes})</button>`;
        feed.appendChild(div);
    });
}

function likePost(index) {
    posts[index].likes++;
    localStorage.setItem("posts", JSON.stringify(posts));
    renderPosts();
}

renderPosts();
