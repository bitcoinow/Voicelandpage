import './style.css'

// Create the main app structure
document.querySelector('#app').innerHTML = `
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <i class="fas fa-microphone-alt"></i>
          <span>VoiceNote Mentor</span>
        </div>
        <div class="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a href="https://startling-daffodil-714b24.netlify.app/" class="cta-button" target="_blank">Try Demo Now</a>
        </div>
        <div class="mobile-menu-toggle">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Transform Your <span class="gradient-text">Voice</span> into Knowledge
          </h1>
          <p class="hero-subtitle">
            The AI-powered voice note app that captures, organizes, and transforms your thoughts into actionable insights. 10x faster than traditional note-taking.
          </p>
          <div class="hero-buttons">
            <a href="https://startling-daffodil-714b24.netlify.app/" class="primary-button" target="_blank">
              <i class="fas fa-play"></i>
              Try Demo Now
            </a>
            <button class="secondary-button" onclick="scrollToSection('features')">
              <i class="fas fa-info-circle"></i>
              Learn More
            </button>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">99.5%</span>
              <span class="stat-label">Accuracy</span>
            </div>
            <div class="stat">
              <span class="stat-number">50+</span>
              <span class="stat-label">Languages</span>
            </div>
            <div class="stat">
              <span class="stat-number">10x</span>
              <span class="stat-label">Faster</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="voice-wave">
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
          </div>
          <div class="floating-cards">
            <div class="floating-card">
              <i class="fas fa-microphone"></i>
              <span>Recording...</span>
            </div>
            <div class="floating-card">
              <i class="fas fa-brain"></i>
              <span>AI Processing</span>
            </div>
            <div class="floating-card">
              <i class="fas fa-file-alt"></i>
              <span>Smart Notes</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <div class="section-header">
          <h2>Powerful Features for Modern Note-Taking</h2>
          <p>Everything you need to capture, organize, and act on your voice notes</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-microphone-alt"></i>
            </div>
            <h3>Smart Voice Recognition</h3>
            <p>99.5% accuracy across 50+ languages with real-time transcription and speaker identification.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>AI-Powered Summaries</h3>
            <p>Automatically extract key points, insights, and action items from your voice notes.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-tags"></i>
            </div>
            <h3>Smart Organization</h3>
            <p>Auto-categorization, intelligent tagging, and powerful search across all your notes.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-bolt"></i>
            </div>
            <h3>Real-time Processing</h3>
            <p>Live transcription with instant feedback and suggestions as you speak.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-tasks"></i>
            </div>
            <h3>Action-Oriented Insights</h3>
            <p>Automatically extract tasks, deadlines, and follow-ups from your conversations.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-share-alt"></i>
            </div>
            <h3>Export & Integration</h3>
            <p>Export to multiple formats and integrate with your favorite productivity tools.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Section -->
    <section class="demo">
      <div class="container">
        <div class="demo-content">
          <div class="demo-text">
            <h2>See VoiceNote Mentor in Action</h2>
            <p>Watch how our AI transforms your voice into organized, actionable notes in real-time.</p>
            <div class="demo-features">
              <div class="demo-feature">
                <i class="fas fa-check"></i>
                <span>Real-time transcription</span>
              </div>
              <div class="demo-feature">
                <i class="fas fa-check"></i>
                <span>Automatic summarization</span>
              </div>
              <div class="demo-feature">
                <i class="fas fa-check"></i>
                <span>Smart categorization</span>
              </div>
            </div>
            <a href="https://startling-daffodil-714b24.netlify.app/" class="primary-button" target="_blank">
              <i class="fas fa-external-link-alt"></i>
              Try Live Demo
            </a>
          </div>
          <div class="demo-visual">
            <div class="phone-mockup">
              <div class="phone-screen">
                <div class="app-interface">
                  <div class="app-header">
                    <span>VoiceNote Mentor</span>
                    <i class="fas fa-microphone recording"></i>
                  </div>
                  <div class="transcription-area">
                    <p class="transcription-text">
                      "Let's schedule a team meeting for next Tuesday at 2 PM to discuss the quarterly review..."
                    </p>
                  </div>
                  <div class="ai-insights">
                    <div class="insight">
                      <i class="fas fa-calendar"></i>
                      <span>Meeting: Tuesday 2 PM</span>
                    </div>
                    <div class="insight">
                      <i class="fas fa-tag"></i>
                      <span>Category: Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose VoiceNote Mentor?</h2>
          <p>Join thousands of professionals who've transformed their productivity</p>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-number">10x</div>
            <h3>Faster Note-Taking</h3>
            <p>Capture thoughts at the speed of speech, not typing</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-number">100%</div>
            <h3>Never Miss Details</h3>
            <p>Perfect recall of every conversation and idea</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-number">24/7</div>
            <h3>Always Available</h3>
            <p>Works offline and syncs when connected</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-number">50+</div>
            <h3>Languages Supported</h3>
            <p>Global accessibility for international teams</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>What Our Users Say</h2>
          <p>Trusted by professionals worldwide</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"VoiceNote Mentor has revolutionized how I capture meeting notes. The AI summaries are incredibly accurate!"</p>
            </div>
            <div class="testimonial-author">
              <img src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" alt="Sarah Chen">
              <div>
                <h4>Sarah Chen</h4>
                <span>Product Manager, TechCorp</span>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"As a journalist, I need accurate transcriptions fast. This app delivers every time with incredible precision."</p>
            </div>
            <div class="testimonial-author">
              <img src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" alt="Marcus Johnson">
              <div>
                <h4>Marcus Johnson</h4>
                <span>Senior Journalist, News Daily</span>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"The smart organization features help me find any note instantly. It's like having a personal assistant!"</p>
            </div>
            <div class="testimonial-author">
              <img src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" alt="Emily Rodriguez">
              <div>
                <h4>Emily Rodriguez</h4>
                <span>Executive Coach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing">
      <div class="container">
        <div class="section-header">
          <h2>Choose Your Plan</h2>
          <p>Start free, upgrade when you need more power</p>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Free</h3>
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">0</span>
                <span class="period">/month</span>
              </div>
            </div>
            <ul class="pricing-features">
              <li><i class="fas fa-check"></i> 10 voice notes per month</li>
              <li><i class="fas fa-check"></i> Basic transcription</li>
              <li><i class="fas fa-check"></i> 5 languages</li>
              <li><i class="fas fa-check"></i> Export to text</li>
            </ul>
            <a href="https://startling-daffodil-714b24.netlify.app/" class="pricing-button secondary" target="_blank">Get Started</a>
          </div>
          <div class="pricing-card featured">
            <div class="pricing-badge">Most Popular</div>
            <div class="pricing-header">
              <h3>Pro</h3>
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">19</span>
                <span class="period">/month</span>
              </div>
            </div>
            <ul class="pricing-features">
              <li><i class="fas fa-check"></i> Unlimited voice notes</li>
              <li><i class="fas fa-check"></i> AI-powered summaries</li>
              <li><i class="fas fa-check"></i> 50+ languages</li>
              <li><i class="fas fa-check"></i> Smart organization</li>
              <li><i class="fas fa-check"></i> Export to multiple formats</li>
              <li><i class="fas fa-check"></i> Priority support</li>
            </ul>
            <a href="https://startling-daffodil-714b24.netlify.app/" class="pricing-button primary" target="_blank">Start Free Trial</a>
          </div>
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Enterprise</h3>
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">99</span>
                <span class="period">/month</span>
              </div>
            </div>
            <ul class="pricing-features">
              <li><i class="fas fa-check"></i> Everything in Pro</li>
              <li><i class="fas fa-check"></i> Team collaboration</li>
              <li><i class="fas fa-check"></i> Advanced analytics</li>
              <li><i class="fas fa-check"></i> Custom integrations</li>
              <li><i class="fas fa-check"></i> Dedicated support</li>
              <li><i class="fas fa-check"></i> SSO & security</li>
            </ul>
            <a href="https://startling-daffodil-714b24.netlify.app/" class="pricing-button secondary" target="_blank">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Transform Your Note-Taking?</h2>
          <p>Join thousands of professionals who've already made the switch to voice-powered productivity.</p>
          <div class="cta-buttons">
            <a href="https://startling-daffodil-714b24.netlify.app/" class="primary-button large" target="_blank">
              <i class="fas fa-rocket"></i>
              Start Your Free Trial
            </a>
            <div class="cta-note">
              <i class="fas fa-shield-alt"></i>
              <span>No credit card required • 14-day free trial</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="footer-logo">
              <i class="fas fa-microphone-alt"></i>
              <span>VoiceNote Mentor</span>
            </div>
            <p>Transform your voice into knowledge with AI-powered note-taking.</p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="https://startling-daffodil-714b24.netlify.app/" target="_blank">Demo</a>
            </div>
            <div class="footer-column">
              <h4>Support</h4>
              <a href="#contact">Contact</a>
              <a href="#">Help Center</a>
              <a href="#">API Docs</a>
            </div>
            <div class="footer-column">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 VoiceNote Mentor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
`

// Add smooth scrolling functionality
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Make function globally available
window.scrollToSection = scrollToSection;

// Add mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Add animation to voice wave
function animateVoiceWave() {
  const waveBars = document.querySelectorAll('.wave-bar');
  waveBars.forEach((bar, index) => {
    bar.style.animationDelay = `${index * 0.1}s`;
  });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', animateVoiceWave);