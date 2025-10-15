import { authManager } from './auth.js'

export class AuthModal {
  constructor() {
    this.createModal()
    this.attachEventListeners()
  }

  createModal() {
    const modalHTML = `
      <div id="authModal" class="auth-modal">
        <div class="auth-modal-content">
          <button class="auth-modal-close">&times;</button>

          <div class="auth-tabs">
            <button class="auth-tab active" data-tab="login">Login</button>
            <button class="auth-tab" data-tab="signup">Sign Up</button>
          </div>

          <div id="loginForm" class="auth-form active">
            <h2>Welcome Back</h2>
            <p class="auth-subtitle">Sign in to access your account</p>

            <div class="form-group">
              <label for="loginEmail">Email</label>
              <input type="email" id="loginEmail" placeholder="you@example.com" required>
            </div>

            <div class="form-group">
              <label for="loginPassword">Password</label>
              <input type="password" id="loginPassword" placeholder="Enter your password" required>
            </div>

            <div class="auth-error" id="loginError"></div>

            <button class="auth-submit-btn" id="loginBtn">
              <i class="fas fa-sign-in-alt"></i>
              Sign In
            </button>
          </div>

          <div id="signupForm" class="auth-form">
            <h2>Create Account</h2>
            <p class="auth-subtitle">Join VoiceNote Mentor today</p>

            <div class="form-group">
              <label for="signupName">Full Name</label>
              <input type="text" id="signupName" placeholder="John Doe" required>
            </div>

            <div class="form-group">
              <label for="signupEmail">Email</label>
              <input type="email" id="signupEmail" placeholder="you@example.com" required>
            </div>

            <div class="form-group">
              <label for="signupPassword">Password</label>
              <input type="password" id="signupPassword" placeholder="At least 6 characters" required>
            </div>

            <div class="auth-error" id="signupError"></div>

            <button class="auth-submit-btn" id="signupBtn">
              <i class="fas fa-user-plus"></i>
              Create Account
            </button>
          </div>
        </div>
      </div>
    `

    document.body.insertAdjacentHTML('beforeend', modalHTML)
  }

  attachEventListeners() {
    const modal = document.getElementById('authModal')
    const closeBtn = modal.querySelector('.auth-modal-close')
    const tabs = modal.querySelectorAll('.auth-tab')
    const loginBtn = document.getElementById('loginBtn')
    const signupBtn = document.getElementById('signupBtn')

    closeBtn.addEventListener('click', () => this.close())

    modal.addEventListener('click', (e) => {
      if (e.target === modal) this.close()
    })

    tabs.forEach(tab => {
      tab.addEventListener('click', () => this.switchTab(tab.dataset.tab))
    })

    loginBtn.addEventListener('click', () => this.handleLogin())
    signupBtn.addEventListener('click', () => this.handleSignup())

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        this.close()
      }
    })
  }

  switchTab(tabName) {
    const tabs = document.querySelectorAll('.auth-tab')
    const forms = document.querySelectorAll('.auth-form')

    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === tabName)
    })

    forms.forEach(form => {
      form.classList.toggle('active', form.id === `${tabName}Form`)
    })

    this.clearErrors()
  }

  async handleLogin() {
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPassword').value
    const errorDiv = document.getElementById('loginError')
    const btn = document.getElementById('loginBtn')

    if (!email || !password) {
      this.showError(errorDiv, 'Please fill in all fields')
      return
    }

    try {
      btn.disabled = true
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...'

      await authManager.signIn(email, password)

      this.close()
      this.showSuccessMessage('Welcome back!')

    } catch (error) {
      this.showError(errorDiv, error.message || 'Failed to sign in')
    } finally {
      btn.disabled = false
      btn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In'
    }
  }

  async handleSignup() {
    const name = document.getElementById('signupName').value
    const email = document.getElementById('signupEmail').value
    const password = document.getElementById('signupPassword').value
    const errorDiv = document.getElementById('signupError')
    const btn = document.getElementById('signupBtn')

    if (!name || !email || !password) {
      this.showError(errorDiv, 'Please fill in all fields')
      return
    }

    if (password.length < 6) {
      this.showError(errorDiv, 'Password must be at least 6 characters')
      return
    }

    try {
      btn.disabled = true
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...'

      await authManager.signUp(email, password, name)

      this.close()
      this.showSuccessMessage('Account created successfully!')

    } catch (error) {
      this.showError(errorDiv, error.message || 'Failed to create account')
    } finally {
      btn.disabled = false
      btn.innerHTML = '<i class="fas fa-user-plus"></i> Create Account'
    }
  }

  showError(element, message) {
    element.textContent = message
    element.style.display = 'block'
  }

  clearErrors() {
    document.querySelectorAll('.auth-error').forEach(el => {
      el.textContent = ''
      el.style.display = 'none'
    })
  }

  showSuccessMessage(message) {
    const successDiv = document.createElement('div')
    successDiv.className = 'auth-success-toast'
    successDiv.innerHTML = `
      <i class="fas fa-check-circle"></i>
      ${message}
    `
    document.body.appendChild(successDiv)

    setTimeout(() => {
      successDiv.classList.add('show')
    }, 100)

    setTimeout(() => {
      successDiv.classList.remove('show')
      setTimeout(() => successDiv.remove(), 300)
    }, 3000)
  }

  open(tab = 'login') {
    const modal = document.getElementById('authModal')
    modal.classList.add('active')
    document.body.style.overflow = 'hidden'
    this.switchTab(tab)
    this.clearErrors()
  }

  close() {
    const modal = document.getElementById('authModal')
    modal.classList.remove('active')
    document.body.style.overflow = ''

    document.getElementById('loginEmail').value = ''
    document.getElementById('loginPassword').value = ''
    document.getElementById('signupName').value = ''
    document.getElementById('signupEmail').value = ''
    document.getElementById('signupPassword').value = ''

    this.clearErrors()
  }
}
