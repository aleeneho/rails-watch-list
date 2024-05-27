import { Application } from "@hotwired/stimulus"

const application = Application.start()

import "bootstrap"
import "@popperjs/core"

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
