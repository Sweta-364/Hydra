const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");
const btn = document.getElementById("loginBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  msg.textContent = "";
  btn.textContent = "Signing in...";
  btn.disabled = true;

  const data = new URLSearchParams(new FormData(form));

  const res = await fetch("/login", {
    method: "POST",
    body: data,
  });

  if (res.status === 401) {
    btn.disabled = false;
    btn.textContent = "Sign in";
    msg.textContent = "Invalid username or password";
  } else {
    window.location = "/hacked.html";
  }
});
