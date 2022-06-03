import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "submit" ]

  change() {
    const input = this.inputTarget
    const btn = this.submitTarget
    
    // Disable the username input if it is empty.
    btn.disabled = input.value.length == 0 ? true : false
  }

  submit() {
    const input = this.inputTarget
    const btn = this.submitTarget

    localStorage.setItem("username", input.value)
    document.querySelector("#message-form #message_username").value = input.value

    // Set the placeholder as the new value, clear the input and disable the button.
    input.placeholder = input.value
    input.value = ""
    btn.disabled = true
  }
}
