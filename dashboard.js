const API = "https://blog-platform-backend-1qa5.onrender.com";

async function loadBlogs() {

    const response = await fetch(`${API}/blogs`);

    const blogs = await response.json();

    let output = "";

    blogs.forEach(blog => {

        output += `

        <div class="blog-card">

            <img src="${blog.image}" alt="Blog Image">

            <div class="blog-content">

                <h3>${blog.title}</h3>

                <p>${blog.content.substring(0,100)}...</p>

                <a class="read-btn" href="view.html?id=${blog.id}">
                    Read More
                </a>

            </div>

        </div>

        `;

    });

    document.getElementById("blogs").innerHTML = output;

}

loadBlogs();