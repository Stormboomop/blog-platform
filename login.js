const API = "https://blog-platform-backend-1qa5.onrender.com";

async function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API}/login`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email,
            password
        })

    });

    const data = await response.json();

    alert(data.message);

    if (data.message === "Login Successful") {

        localStorage.setItem("userId", data.userId);

        window.location = "dashboard.html";

    }

}