// Main Portfolio JavaScript - Electrical Engineering Theme
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all systems
    initPreloader();
    initNavigation();
    initSmoothScrolling();
    initThemeToggle();
    initFormHandling();
    initScrollAnimations();
    initPerformanceOptimizations();
});

// Preloader System
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    
    // Simulate loading process
    setTimeout(() => {
        preloader.classList.add('fade-out');
        
        setTimeout(() => {
            preloader.style.display = 'none';
            
            // Start background animations after preloader
            startBackgroundAnimations();
        }, 500);
    }, 2000);
}

function startBackgroundAnimations() {
    // Add any delayed animations here
    const floatingElements = document.querySelectorAll('.floating-elements > div');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });
}

// Navigation System
function initNavigation() {
    const nav = document.querySelector('.glass-nav');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Scroll effect for navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Update active navigation link
        updateActiveNavLink();
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    function updateActiveNavLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
}

// Smooth Scrolling System
function initSmoothScrolling() {
    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                window.scrollTo({
                    top: aboutSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });

        // Hide scroll indicator after first scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            }
        });
    }
}

// Theme Toggle System
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('engineering-theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('engineering-theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add theme transition
        body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'light') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }
}

// Form Handling System
function initFormHandling() {
    const contactForm = document.querySelector('.engineering-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = Object.fromEntries(formData);
            
            // Validate form
            if (validateForm(formObject)) {
                // Simulate form submission
                simulateFormSubmission(this);
            }
        });

        // Add real-time validation
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateField(input);
            });
            
            input.addEventListener('input', () => {
                clearFieldError(input);
            });
        });
    }
}

function validateForm(formData) {
    let isValid = true;
    
    if (!formData.name || formData.name.trim().length < 2) {
        showFieldError('name', 'Please enter a valid name');
        isValid = false;
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!formData.subject) {
        showFieldError('subject', 'Please select a project type');
        isValid = false;
    }
    
    if (!formData.message || formData.message.trim().length < 10) {
        showFieldError('message', 'Please enter a message with at least 10 characters');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    
    switch (field.type) {
        case 'text':
            if (value.length < 2) {
                showFieldError(field.id, 'Please enter a valid name');
                return false;
            }
            break;
            
        case 'email':
            if (!isValidEmail(value)) {
                showFieldError(field.id, 'Please enter a valid email address');
                return false;
            }
            break;
            
        case 'select-one':
            if (!value) {
                showFieldError(field.id, 'Please select a project type');
                return false;
            }
            break;
            
        case 'textarea':
            if (value.length < 10) {
                showFieldError(field.id, 'Please enter a message with at least 10 characters');
                return false;
            }
            break;
    }
    
    clearFieldError(field);
    return true;
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    
    // Remove existing error
    clearFieldError(field);
    
    // Add error class
    field.classList.add('error');
    
    // Create error message
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #ff6b6b;
        font-size: 0.8rem;
        margin-top: 0.25rem;
    `;
    
    formGroup.appendChild(errorElement);
}

function clearFieldError(field) {
    field.classList.remove('error');
    const formGroup = field.closest('.form-group');
    const existingError = formGroup.querySelector('.field-error');
    
    if (existingError) {
        existingError.remove();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function simulateFormSubmission(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.querySelector('span').textContent;
    const originalHTML = submitButton.innerHTML;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.querySelector('span').textContent = 'Sending...';
    submitButton.style.opacity = '0.7';
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        form.reset();
        submitButton.disabled = false;
        submitButton.innerHTML = originalHTML;
        submitButton.style.opacity = '1';
    }, 2000);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `engineering-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--glass-light);
        border: 1px solid var(--glass-border);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        color: var(--text-primary);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Scroll Animations System
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.expertise-card, .project-card, .feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
                // Handle scroll actions
            }, 100);
        }
    });

    // Preload critical resources
    function preloadCriticalResources() {
        const criticalResources = [
            // Add paths to critical CSS, fonts, or images
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.endsWith('.css') ? 'style' : 'image';
            document.head.appendChild(link);
        });
    }

    preloadCriticalResources();
}

// Utility Functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}
// Simple CV Download with PDF file
class CVDownloadSystem {
    constructor() {
        this.downloadBtn = document.getElementById('download-cv-btn');
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Jika menggunakan button (bukan direct link)
        if (this.downloadBtn.tagName === 'BUTTON') {
            this.downloadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.downloadCV();
            });
        }
        
        // Jika menggunakan direct link, tambahkan tracking
        if (this.downloadBtn.tagName === 'A') {
            this.downloadBtn.addEventListener('click', () => {
                this.trackDownload();
            });
        }
    }

    downloadCV() {
        // Show downloading state
        this.downloadBtn.classList.add('downloading');
        this.downloadBtn.innerHTML = '<i class="fas fa-download"></i> Downloading...';

        // Create temporary link untuk download
        const link = document.createElement('a');
        link.href = 'assets/cv.pdf';
        link.download = 'CV_Kevin_Jonathan_Sinaga.pdf';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset button setelah 2 detik
        setTimeout(() => {
            this.downloadBtn.classList.remove('downloading');
            this.downloadBtn.innerHTML = '<span>Download CV</span><i class="fas fa-download"></i>';
        }, 2000);

        // Track download
        this.trackDownload();
    }

    trackDownload() {
        // Anda bisa menambahkan analytics tracking di sini
        console.log('CV downloaded at:', new Date().toLocaleString());
        
        // Contoh Google Analytics (jika ada)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'download', {
                'event_category': 'CV',
                'event_label': 'PDF_CV_Download'
            });
        }
    }
}
document.getElementById('explore-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    new CVDownloadSystem();
});
// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initPreloader,
        initNavigation,
        initSmoothScrolling,
        initThemeToggle,
        initFormHandling,
        initScrollAnimations,
        initPerformanceOptimizations,
        debounce,
        throttle
    };
}
