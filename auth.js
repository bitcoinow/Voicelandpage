import { supabase } from './supabaseClient.js'

class AuthManager {
  constructor() {
    this.currentUser = null
    this.listeners = []
    this.init()
  }

  async init() {
    const { data: { session } } = await supabase.auth.getSession()
    this.currentUser = session?.user || null
    this.notifyListeners()

    supabase.auth.onAuthStateChange((_event, session) => {
      (async () => {
        this.currentUser = session?.user || null
        this.notifyListeners()
      })()
    })
  }

  onAuthStateChange(callback) {
    this.listeners.push(callback)
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback)
    }
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback(this.currentUser))
  }

  async signUp(email, password, fullName) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName
        }
      }
    })

    if (error) throw error
    return data
  }

  async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error
    return data
  }

  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  isAuthenticated() {
    return !!this.currentUser
  }

  getCurrentUser() {
    return this.currentUser
  }
}

export const authManager = new AuthManager()
