// Project Details Interactions
class ProjectDetails {
    constructor() {
        this.init();
    }

    init() {
        this.setupGalleryInteractions();
        this.setupSmoothScrolling();
        this.setupAnimationObservers();
        this.setupBackToTop();
    }

    setupGalleryInteractions() {
        // Gallery image zoom effect
        const galleryImages = document.querySelectorAll('.gallery-image img');
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                this.openImageModal(img.src, img.alt);
            });
        });

        // Keyboard navigation for gallery
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeImageModal();
            }
        });
    }

    openImageModal(src, alt) {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <img src="${src}" alt="${alt}">
                <button class="modal-close">&times;</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Close modal events
        modal.querySelector('.modal-overlay').addEventListener('click', () => this.closeImageModal());
        modal.querySelector('.modal-close').addEventListener('click', () => this.closeImageModal());
    }

    closeImageModal() {
        const modal = document.querySelector('.image-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = '';
        }
    }

    setupSmoothScrolling() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupAnimationObservers() {
        const animateOnScroll = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(animateOnScroll, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements for animation
        const elementsToAnimate = document.querySelectorAll(
            '.achievement, .stat-card, .tech-category, .feature-card, .process-item, .gallery-item, .challenge-card'
        );

        elementsToAnimate.forEach(el => {
            observer.observe(el);
        });
    }

    setupBackToTop() {
        const backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            background: var(--gradient-primary);
            border: none;
            border-radius: 50%;
            color: var(--primary);
            font-size: 1.2rem;
            cursor: pointer;
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            box-shadow: var(--shadow-md);
        `;

        document.body.appendChild(backToTop);

        // Show/hide back to top button
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.transform = 'translateY(0)';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.transform = 'translateY(20px)';
            }
        });

        // Scroll to top
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Image Modal Styles (dynamically added)
const modalStyles = `
.image-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: modalFadeIn 0.3s ease;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
}

.modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    z-index: 10001;
    animation: modalScaleIn 0.3s ease;
}

.modal-content img {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 10px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-close {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@keyframes modalFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes modalScaleIn {
    from { 
        opacity: 0;
        transform: scale(0.8);
    }
    to { 
        opacity: 1;
        transform: scale(1);
    }
}

.back-to-top:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.4);
}
`;

// Add modal styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new ProjectDetails();
    
    // Remove preloader
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1000);
});