const API = "https://blog-platform-backend-1qa5.onrender.com";

const id = new URLSearchParams(window.location.search).get("id");

loadBlog();

async function loadBlog() {

    const response = await fetch(`${API}/blogs/${id}`);

    const blog = await response.json();

    document.getElementById("title").innerText = blog.title;
    document.getElementById("content").innerText = blog.content;
    document.getElementById("cover").src = blog.image;

    loadComments();

}

async function loadComments() {

    const response = await fetch(`${API}/comments/${id}`);

    const comments = await response.json();

    let output = "";

    comments.forEach(c => {

        output += `
            <div class="comment">
                👤 ${c.comment}
            </div>
        `;

    });

    document.getElementById("comments").innerHTML = output;

}

async function addComment() {

    const comment = document.getElementById("comment").value;

    const user_id = localStorage.getItem("userId");

    await fetch(`${API}/comments`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            comment,
            blog_id: id,
            user_id

        })

    });

    document.getElementById("comment").value = "";

    loadComments();

}