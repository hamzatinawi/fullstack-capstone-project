fetch("/api/auth/login", {
  headers: { 
    "Content-Type": "application/json",
    "Authorization": "Bearer token"
  }
});
