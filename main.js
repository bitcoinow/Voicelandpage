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

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2>Get in Touch</h2>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email Us</h4>
                <p>support@voicenotementor.com</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div>
                <h4>Support Hours</h4>
                <p>Mon-Fri: 9AM-6PM EST</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form id="contactForm">
              <div class="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required>
              </div>
              <div class="form-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required>
              </div>
              <div class="form-group">
                <select id="subject" name="subject" required>
                  <option value="">Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                </select>
              </div>
              <div class="form-group">
                <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" class="primary-button">
                <i class="fas fa-paper-plane"></i>
                Send Message
              </button>
            </form>
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
              <a href="#contact" onclick="scrollToSection('contact')">Contact</a>
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

// Add form submission handler
function handleContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Show success message
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.innerHTML;
      
      button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      button.style.background = '#10b981';
      
      // Reset form after 2 seconds
      setTimeout(() => {
        form.reset();
        button.innerHTML = originalText;
        button.style.background = '';
      }, 2000);
      
      // In a real app, you would send this data to your backend
      console.log('Contact form submitted:', data);
    });
  }
}
// Add mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize contact form
  handleContactForm();
  
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Add click handlers for all navigation links
  const navLinksElements = document.querySelectorAll('.nav-links a[href^="#"]');
  navLinksElements.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
      
      // Close mobile menu if open
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });
  
  // Test all external links
  const externalLinks = document.querySelectorAll('a[href^="https://startling-daffodil-714b24.netlify.app/"]');
  console.log(`Found ${externalLinks.length} external links to VoiceNote Mentor app`);
  
  // Add click tracking for external links
  externalLinks.forEach(link => {
    link.addEventListener('click', function() {
      console.log('External link clicked:', this.href);
      // You can add analytics tracking here
    });
  });
});

// Global function for microphone test button
function toggleMicTest() {
  if (!micTest) {
    micTest = new MicrophoneTest();
  }
  
  if (micTest.isRecording) {
    micTest.stopMicTest();
  } else {
    micTest.startMicTest();
  }
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Microphone Test Functionality
class MicrophoneTest {
  constructor() {
    this.isRecording = false;
    this.mediaRecorder = null;
    this.audioContext = null;
    this.analyser = null;
    this.microphone = null;
    this.dataArray = null;
    this.animationId = null;
  }

  async startMicTest() {
    try {
      // Request microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        } 
      });

      // Create audio context for visualization
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.analyser = this.audioContext.createAnalyser();
      this.microphone = this.audioContext.createMediaStreamSource(stream);
      
      this.analyser.fftSize = 256;
      const bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(bufferLength);
      
      this.microphone.connect(this.analyser);
      
      this.isRecording = true;
      this.updateMicTestUI();
      this.visualizeMicrophone();
      
      console.log('Microphone test started successfully');
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
      this.showMicError(error.message);
    }
  }

  stopMicTest() {
    this.isRecording = false;
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (this.audioContext) {
      this.audioContext.close();
    }
    
    // Stop all tracks
    if (this.microphone && this.microphone.mediaStream) {
      this.microphone.mediaStream.getTracks().forEach(track => track.stop());
    }
    
    this.updateMicTestUI();
    this.resetVisualization();
    
    console.log('Microphone test stopped');
  }

  visualizeMicrophone() {
    if (!this.isRecording) return;
    
    this.analyser.getByteFrequencyData(this.dataArray);
    
    // Calculate average volume
    let sum = 0;
    for (let i = 0; i < this.dataArray.length; i++) {
      sum += this.dataArray[i];
    }
    const average = sum / this.dataArray.length;
    
    // Update wave bars based on audio input
    const waveBars = document.querySelectorAll('.mic-test-wave .wave-bar');
    waveBars.forEach((bar, index) => {
      const intensity = this.dataArray[index * 4] || 0;
      const height = Math.max(20, (intensity / 255) * 80);
      bar.style.height = `${height}px`;
      bar.style.opacity = Math.max(0.3, intensity / 255);
    });
    
    // Update volume indicator
    const volumeIndicator = document.querySelector('.volume-level');
    if (volumeIndicator) {
      const volumePercent = (average / 255) * 100;
      volumeIndicator.style.width = `${volumePercent}%`;
      
      // Change color based on volume
      if (volumePercent > 50) {
        volumeIndicator.style.background = '#10b981'; // Green for good volume
      } else if (volumePercent > 20) {
        volumeIndicator.style.background = '#f59e0b'; // Yellow for medium volume
      } else {
        volumeIndicator.style.background = '#ef4444'; // Red for low volume
      }
    }
    
    // Update status text
    const statusText = document.querySelector('.mic-status-text');
    if (statusText) {
      if (average > 30) {
        statusText.textContent = '🎤 Microphone working perfectly!';
        statusText.style.color = '#10b981';
      } else if (average > 10) {
        statusText.textContent = '🔊 Speak louder for better detection';
        statusText.style.color = '#f59e0b';
      } else {
        statusText.textContent = '🔇 No audio detected - check your mic';
        statusText.style.color = '#ef4444';
      }
    }
    
    this.animationId = requestAnimationFrame(() => this.visualizeMicrophone());
  }

  updateMicTestUI() {
    const testButton = document.querySelector('.mic-test-button');
    const statusIndicator = document.querySelector('.mic-status-indicator');
    
    if (testButton) {
      if (this.isRecording) {
        testButton.innerHTML = '<i class="fas fa-stop"></i> Stop Mic Test';
        testButton.classList.add('recording');
      } else {
        testButton.innerHTML = '<i class="fas fa-microphone"></i> Test Your Microphone';
        testButton.classList.remove('recording');
      }
    }
    
    if (statusIndicator) {
      statusIndicator.classList.toggle('active', this.isRecording);
    }
  }

  resetVisualization() {
    const waveBars = document.querySelectorAll('.mic-test-wave .wave-bar');
    waveBars.forEach(bar => {
      bar.style.height = '20px';
      bar.style.opacity = '0.3';
    });
    
    const volumeIndicator = document.querySelector('.volume-level');
    if (volumeIndicator) {
      volumeIndicator.style.width = '0%';
    }
    
    const statusText = document.querySelector('.mic-status-text');
    if (statusText) {
      statusText.textContent = 'Click "Test Your Microphone" to begin';
      statusText.style.color = '#64748b';
    }
  }

  showMicError(errorMessage) {
    const statusText = document.querySelector('.mic-status-text');
    if (statusText) {
      if (errorMessage.includes('Permission denied')) {
        statusText.textContent = '❌ Microphone access denied. Please allow microphone permission.';
      } else if (errorMessage.includes('NotFound')) {
        statusText.textContent = '❌ No microphone found. Please connect a microphone.';
      } else {
        statusText.textContent = '❌ Microphone error. Please check your device settings.';
      }
      statusText.style.color = '#ef4444';
    }
  }
}

// Initialize microphone test
let micTest = null;

// Add animation to voice wave
function animateVoiceWave() {
  const waveBars = document.querySelectorAll('.wave-bar');
  waveBars.forEach((bar, index) => {
    bar.style.animationDelay = `${index * 0.1}s`;
  });
}

// Initialize animations when page loads
  
  // Initialize microphone test
  micTest = new MicrophoneTest();