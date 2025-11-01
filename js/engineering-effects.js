// Advanced Engineering Animation System
class EngineeringEffects {
    constructor() {
        this.canvas = document.getElementById('engineeringCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.circuitNodes = [];
        this.mouse = { x: 0, y: 0 };
        this.init();
    }

    init() {
        this.setupCanvas();
        this.createParticles();
        this.createCircuitNodes();
        this.setupEventListeners();
        this.animate();
    }

    setupCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx.globalCompositeOperation = 'lighter';
    }

    createParticles() {
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: this.getRandomColor(),
                life: Math.random() * 100,
                maxLife: 100
            });
        }
    }

    createCircuitNodes() {
        const nodeCount = 20;
        const padding = 100;
        
        for (let i = 0; i < nodeCount; i++) {
            this.circuitNodes.push({
                x: Math.random() * (this.canvas.width - padding * 2) + padding,
                y: Math.random() * (this.canvas.height - padding * 2) + padding,
                radius: Math.random() * 3 + 1,
                connections: [],
                pulse: Math.random() * Math.PI * 2
            });
        }

        // Create connections between nearby nodes
        this.circuitNodes.forEach((node, index) => {
            node.connections = this.circuitNodes
                .map((otherNode, otherIndex) => {
                    if (index !== otherIndex) {
                        const dx = node.x - otherNode.x;
                        const dy = node.y - otherNode.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < 200) {
                            return {
                                target: otherIndex,
                                distance: distance,
                                active: Math.random() > 0.7
                            };
                        }
                    }
                    return null;
                })
                .filter(conn => conn !== null);
        });
    }

    getRandomColor() {
        const colors = [
            'rgba(0, 212, 255, 0.8)',
            'rgba(0, 153, 255, 0.8)',
            'rgba(123, 104, 238, 0.8)',
            'rgba(0, 255, 157, 0.8)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.setupCanvas();
            this.createCircuitNodes();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        // Create interactive sparks on click
        window.addEventListener('click', (e) => {
            this.createClickSparks(e.clientX, e.clientY);
        });
    }

    createClickSparks(x, y) {
        for (let i = 0; i < 10; i++) {
            this.particles.push({
                x: x,
                y: y,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 10,
                speedY: (Math.random() - 0.5) * 10,
                color: this.getRandomColor(),
                life: 0,
                maxLife: 30
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.updateCircuitNodes();
        this.drawCircuit();
        this.drawParticles();
        this.drawMouseEffects();

        requestAnimationFrame(() => this.animate());
    }

    updateParticles() {
        this.particles.forEach((particle, index) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.life++;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.speedY *= -1;
            }
            
            // Remove dead particles
            if (particle.life > particle.maxLife) {
                this.particles.splice(index, 1);
            }
        });

        // Add new particles occasionally
        if (this.particles.length < 50 && Math.random() < 0.1) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: this.getRandomColor(),
                life: 0,
                maxLife: 100
            });
        }
    }

    updateCircuitNodes() {
        this.circuitNodes.forEach(node => {
            node.pulse += 0.02;
            
            // Occasionally toggle connection activity
            if (Math.random() < 0.01) {
                node.connections.forEach(conn => {
                    conn.active = Math.random() > 0.5;
                });
            }
        });
    }

    drawCircuit() {
        // Draw connections
        this.circuitNodes.forEach(node => {
            node.connections.forEach(conn => {
                if (conn.active) {
                    const targetNode = this.circuitNodes[conn.target];
                    const alpha = (Math.sin(node.pulse) + 1) * 0.5;
                    
                    const gradient = this.ctx.createLinearGradient(
                        node.x, node.y, targetNode.x, targetNode.y
                    );
                    
                    gradient.addColorStop(0, `rgba(0, 212, 255, ${alpha * 0.3})`);
                    gradient.addColorStop(1, `rgba(0, 153, 255, ${alpha * 0.3})`);
                    
                    this.ctx.strokeStyle = gradient;
                    this.ctx.lineWidth = 1;
                    this.ctx.setLineDash([5, 5]);
                    this.ctx.lineDashOffset = -Date.now() / 50;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(node.x, node.y);
                    this.ctx.lineTo(targetNode.x, targetNode.y);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);
                }
            });
        });

        // Draw nodes
        this.circuitNodes.forEach(node => {
            const pulse = (Math.sin(node.pulse) + 1) * 0.5;
            const radius = node.radius + pulse * 2;
            
            const gradient = this.ctx.createRadialGradient(
                node.x, node.y, 0,
                node.x, node.y, radius
            );
            
            gradient.addColorStop(0, `rgba(0, 212, 255, ${0.8 + pulse * 0.2})`);
            gradient.addColorStop(1, `rgba(0, 212, 255, 0)`);
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    drawParticles() {
        this.particles.forEach(particle => {
            const lifeRatio = particle.life / particle.maxLife;
            const alpha = 1 - lifeRatio;
            
            this.ctx.fillStyle = particle.color.replace('0.8', alpha.toString());
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    drawMouseEffects() {
        // Draw magnetic field around mouse
        const gradient = this.ctx.createRadialGradient(
            this.mouse.x, this.mouse.y, 0,
            this.mouse.x, this.mouse.y, 100
        );
        
        gradient.addColorStop(0, 'rgba(0, 212, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(this.mouse.x, this.mouse.y, 100, 0, Math.PI * 2);
        this.ctx.fill();

        // Affect nearby particles
        this.particles.forEach(particle => {
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                const force = (150 - distance) / 150;
                particle.speedX += (dx / distance) * force * 0.1;
                particle.speedY += (dy / distance) * force * 0.1;
            }
        });
    }
}

// Interactive Components System
class InteractiveComponents {
    constructor() {
        this.components = document.querySelectorAll('.component');
        this.orbitingElements = document.querySelectorAll('.satellite, .robot-arm, .data-node');
        this.init();
    }

    init() {
        this.setupComponentInteractions();
        this.setupOrbitalAnimations();
        this.startRandomActivations();
    }

    setupComponentInteractions() {
        this.components.forEach(component => {
            // Add tooltip
            const tooltip = component.getAttribute('data-tooltip');
            if (tooltip) {
                component.addEventListener('mouseenter', () => {
                    this.showTooltip(component, tooltip);
                });
                
                component.addEventListener('mouseleave', () => {
                    this.hideTooltip(component);
                });
            }

            // Add click effect
            component.addEventListener('click', () => {
                this.activateComponent(component);
            });

            // Add magnetic hover effect
            component.addEventListener('mousemove', (e) => {
                this.magneticEffect(component, e);
            });
        });
    }

    setupOrbitalAnimations() {
        this.orbitingElements.forEach((element, index) => {
            const orbit = element.closest('.orbit');
            if (orbit) {
                const duration = 20 + (index * 5); // Different speeds for variety
                orbit.style.animationDuration = `${duration}s`;
            }
        });
    }

    showTooltip(component, text) {
        let tooltip = component.querySelector('.component-tooltip');
        
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'component-tooltip';
            tooltip.textContent = text;
            component.appendChild(tooltip);
        }
        
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(-100%)';
    }

    hideTooltip(component) {
        const tooltip = component.querySelector('.component-tooltip');
        if (tooltip) {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(0)';
        }
    }

    activateComponent(component) {
        // Add activation animation
        component.style.animation = 'componentActivate 0.6s ease';
        
        // Create ripple effect
        this.createRipple(component);
        
        // Reset animation
        setTimeout(() => {
            component.style.animation = '';
        }, 600);
    }

    createRipple(component) {
        const rect = component.getBoundingClientRect();
        const ripple = document.createElement('div');
        ripple.className = 'component-ripple';
        
        Object.assign(ripple.style, {
            position: 'absolute',
            left: `${rect.width / 2}px`,
            top: `${rect.height / 2}px`,
            width: '0px',
            height: '0px',
            background: 'rgba(0, 212, 255, 0.3)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
        });
        
        component.appendChild(ripple);
        
        // Animate ripple
        setTimeout(() => {
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.opacity = '0';
        }, 10);
        
        // Remove ripple
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    magneticEffect(component, event) {
        const rect = component.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceX = event.clientX - centerX;
        const distanceY = event.clientY - centerY;
        
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const maxDistance = 100;
        
        if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const moveX = distanceX * force * 0.1;
            const moveY = distanceY * force * 0.1;
            
            component.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            component.style.transform = 'translate(0, 0)';
        }
    }

    startRandomActivations() {
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% chance every interval
                const randomComponent = this.components[Math.floor(Math.random() * this.components.length)];
                this.activateComponent(randomComponent);
            }
        }, 3000);
    }
}

// Skill Matrix Animation
class SkillMatrix {
    constructor() {
        this.matrixItems = document.querySelectorAll('.matrix-item');
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.matrixItems.forEach(item => {
            observer.observe(item.closest('.about-section'));
        });
    }

    animateSkills() {
        this.matrixItems.forEach((item, index) => {
            const progress = item.querySelector('.matrix-fill');
            const skillLevel = progress.parentElement.getAttribute('data-skill');
            
            setTimeout(() => {
                progress.style.width = `${skillLevel}%`;
            }, index * 200);
        });
    }
}

// Initialize all effects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize engineering background effects
    new EngineeringEffects();
    
    // Initialize interactive components
    new InteractiveComponents();
    
    // Initialize skill matrix animations
    new SkillMatrix();
    
    // Add additional interactive features
    initAdvancedInteractions();
});

// Advanced Interactions
function initAdvancedInteractions() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Magnetic buttons
    const magneticButtons = document.querySelectorAll('.btn-magnetic');
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const distanceX = x - centerX;
            const distanceY = y - centerY;
            
            btn.style.transform = `translate(${distanceX * 0.1}px, ${distanceY * 0.1}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // 3D card effects
    const cards3D = document.querySelectorAll('.card-3d');
    cards3D.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 10;
            const rotateX = (centerY - y) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Dynamic background based on time
    updateBackgroundByTime();
}

function updateBackgroundByTime() {
    const hour = new Date().getHours();
    const body = document.body;
    
    if (hour >= 6 && hour < 18) {
        // Day theme
        body.style.setProperty('--primary', '#0a0a0f');
        body.style.setProperty('--secondary', '#1a1a2e');
    } else {
        // Night theme - slightly darker
        body.style.setProperty('--primary', '#050508');
        body.style.setProperty('--secondary', '#0f0f1a');
    }
}
// Project Download System
class ProjectDownloadSystem {
    constructor() {
        this.init();
    }

    init() {
        this.setupDownloadTracking();
    }

    setupDownloadTracking() {
        // Track all project download links
        const downloadLinks = document.querySelectorAll('a[href*="case-study.pdf"]');
        
        downloadLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.trackDownload(link);
                this.showDownloadLoading(link);
            });
        });
    }

    trackDownload(link) {
        const projectName = this.getProjectNameFromURL(link.href);
        const fileName = link.download || 'project_case_study.pdf';
        
        console.log(`Project downloaded: ${projectName} - ${fileName}`);
        
        // Anda bisa menambahkan Google Analytics tracking di sini
        if (typeof gtag !== 'undefined') {
            gtag('event', 'download', {
                'event_category': 'Project Case Study',
                'event_label': projectName,
                'value': 1
            });
        }
    }

    getProjectNameFromURL(url) {
        const matches = url.match(/\/([^\/]+)-case-study\.pdf$/);
        return matches ? matches[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Unknown Project';
    }

    showDownloadLoading(link) {
        const loading = document.getElementById('download-loading');
        if (loading) {
            loading.style.display = 'flex';
            
            // Hide loading after 3 seconds (simulate download time)
            setTimeout(() => {
                loading.style.display = 'none';
            }, 3000);
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    new ProjectDownloadSystem();
});
// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EngineeringEffects, InteractiveComponents, SkillMatrix };
}