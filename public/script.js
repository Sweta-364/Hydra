const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new URLSearchParams(new FormData(form));

  const res = await fetch("/login", {
    method: "POST",
    body: data,
  });

  if (res.status === 401) {
    msg.textContent = "Invalid credentials";
  } else {
    window.location = "/hacked.html";
  }
});
