const username = localStorage.getItem("username")
const input = document.querySelector("input#username")

input.placeholder = username
document.querySelector("#message-form #message_username").value = localStorage.getItem("username")
