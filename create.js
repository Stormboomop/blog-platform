const API = "https://blog-platform-backend-1qa5.onrender.com";

async function publishBlog() {

    const title = document.getElementById("title").value;
    const image = document.getElementById("image").value;
    const content = document.getElementById("content").value;
    const user_id = localStorage.getItem("userId");

    const response = await fetch(`${API}/blogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            image,
            content,
            user_id
        })
    });

    const data = await response.json();

    alert(data.message);

    if (response.ok) {
        window.location = "dashboard.html";
    }
}