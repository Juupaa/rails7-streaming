import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "text", "username" ]

  connect() {
    this.usernameTarget.value = localStorage.getItem("username")
    this.textTarget.focus()
  }
}
