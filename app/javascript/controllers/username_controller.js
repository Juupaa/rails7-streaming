import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input" ]

  change() {
    const input = this.inputTarget
    localStorage.setItem("username", input.value)
    document.querySelector("#message-form #message_username").value = input.value

    // Set the placeholder as the new value and clear the input
    input.placeholder = input.value
    input.value = ""
  }
}
