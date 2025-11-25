const form = document.getElementById("registerForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    username: form.username.value,
    email: form.email.value,
    password: form.password.value,
  };

  try {
    const res = await fetch("/api/auth/register", {  // <-- no need for localhost in production
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    alert(result.message);
  } catch (err) {
    console.error(err);
    alert("Error registering user");
  }
});
