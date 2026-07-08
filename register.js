const API = "https://blog-platform-backend-1qa5.onrender.com";

async function register() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API}/register`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            password
        })

    });

    const data = await response.json();

    alert(data.message);

    if (data.message === "Registration Successful") {

        window.location = "index.html";

    }

}