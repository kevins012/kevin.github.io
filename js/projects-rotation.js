// Projects Rotation System
class ProjectsRotation {
    constructor() {
        this.projects = [
            {
                id: 'smart-grid',
                title: 'Vehicle Emission Detection System with IoT system',
                description: 'Vehicle Emission Monitoring System is an IoT solution I developed using Arduino R4 WiFi to detect and track vehicle carbon emissions in real-time through integrated sensors (MQ-2, MICS6814, DHT22, GPS), featuring a two-layer storage architecture that prioritizes data to microSD before HTTP transmission to ensure reliability in mobile environments and enable historical emission analysis for environmental monitoring',
                duration: '1 Weeks',
                components: '8+ Components',
                efficiency: '-',
                technologies: ['IoT', 'Embedded System', 'C Programming'],
                badge: 'Featured Project',
                icon: 'fas fa-bolt',
                caseStudy: './project.html?id=1',
                caseStudyName: './project.html?id=1'
            },
            {
                id: 'home-automation',
                title: 'IoT and Web Platform for Vehicle Carbon Footprint Analysis & Carbon Credit Management',
                description: 'Thiss platform connects vehicle emission monitoring IoT devices with a carbon credit analysis web application using Node.js and Express.js. The system uses a hybrid database architecture with MongoDB for sensor data and MySQL for financial transactions, equipped with middleware security (Helmet.js, rate limiting, XSS protection) and Google OAuth 2.0 and JWT authentication. Key features include a real-time dashboard, Midtrans payment integration, a task scheduler, and email notifications.',
                duration: '3 Months',
                components: '2+ Components',
                efficiency: '',
                technologies:  ['Node.js','Express.js', 'MySQL','JWT','Midtrans', 'Google OAuth'
                  ],
                badge: 'IoT Project',
                icon: 'fas fa-home',
                caseStudy: './project.html?id=2',
                caseStudyName: './project.html?id=2'
            },
            {
                id: 'ev-charging',
                title: 'Design of Indonesian Sign Language Translation System (SIBI) with MediaPipe using Combination Method of Multilayer Perceptron and Long Short Term Memory',
                description: 'This integrated system combines MLP for static gesture classification and LSTM for dynamic SIBI gestures, achieving accuracies of 0.982 and 1.0 in translating sign language into continuous text.',
                duration: '5 Months',
                components: '12+ Components',
                efficiency: 'Optimized data collection, efficient detection processes, and simplified architecture w',
                technologies: ['Tensorflow', 'OpenCV', 'FastAPI','Python','Mediapipe'],
                badge: 'Energy Project',
                icon: 'fas fa-car-battery',
                caseStudy: './project.html?id=3',
                caseStudyName: './project.html?id=3'
            },
            {
                id: 'industrial-monitor',
                title: 'Design a wheeled soccer robot',
                description: 'The wheeled soccer robot is designed with an omnidirectional mechanical system, integrated STM32F4 electrical, vision-based detection programming for the ball and obstacles, and hybrid WebSocket and Broadcast Station communications that enable real-time team coordination with low latency for optimal performance in dynamic matches.',
                duration: '3 Months',
                components: '10+ Components',
                efficiency: '99% Uptime',
                technologies: [
                    "Computer Vision System",
                    "Omnidirectional Drive System", 
                    "Embedded Control System",
                    "Real-time Communication Protocol",
                    "Power Management System",
                    "Sensor Fusion & Navigation"
                ],
                badge: 'Industrial IoT',
                icon: 'fas fa-industry',
                caseStudy: './project.html?id=4',
                caseStudyName: './project.html?id=4'
            }
        ];

        this.currentMainProject = 0;
        this.init();
    }

    init() {
        this.renderProjects();
        this.setupEventListeners();
    }

    renderProjects() {
        this.renderMainProject();
        this.renderProjectsGrid();
    }

    renderMainProject() {
        const mainProjectContainer = document.getElementById('main-project');
        const project = this.projects[this.currentMainProject];

        mainProjectContainer.innerHTML = `
            <div class="project-visual">
                <div class="project-animation">
                    <div class="animation-core"></div>
                    <div class="animation-rays"></div>
                    <div class="animation-particles"></div>
                </div>
            </div>
            <div class="project-info">
                <div class="project-badge">${project.badge}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-stats">
                    <div class="project-stat">
                        <i class="fas fa-clock"></i>
                        <span>${project.duration}</span>
                    </div>
                    <div class="project-stat">
                        <i class="fas fa-cogs"></i>
                        <span>${project.components}</span>
                    </div>
                    <div class="project-stat">
                        <i class="fas fa-chart-line"></i>
                        <span>${project.efficiency}</span>
                    </div>
                </div>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-actions">
                    <a href="${project.caseStudy}" class="btn btn-primary">
                        <span>View Study</span>
                     
                    </a>
                   
                </div>
            </div>
        `;
    }

    renderProjectsGrid() {
        const gridContainer = document.getElementById('projects-grid');
        const gridProjects = this.projects.filter((_, index) => index !== this.currentMainProject);

        gridContainer.innerHTML = gridProjects.map(project => `
            <div class="project-card" data-project-id="${project.id}">
                <div class="project-image">
                    <div class="image-placeholder">
                        <i class="${project.icon}"></i>
                    </div>
                    <div class="project-overlay">
                        <a href="${project.caseStudy}" download="${project.caseStudyName}" class="project-view">
                            <i class="fas fa-download"></i>
                        </a>
                    </div>
                </div>
                <div class="project-content">
                    <h4>${project.title}</h4>
                    <p>${project.description.split('.')[0]}.</p>
                    <div class="project-meta">
                        <span>${project.technologies.join(' • ')}</span>
                    </div>
                   
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            // Handle project card clicks for rotation
            const projectCard = e.target.closest('.project-card');
            if (projectCard) {
                e.preventDefault();
                const projectId = projectCard.dataset.projectId;
                this.rotateProject(projectId);
            }

            // Handle source code button clicks
            const sourceBtn = e.target.closest('.view-source-btn');
            if (sourceBtn) {
                e.preventDefault();
                const projectId = sourceBtn.dataset.project;
                this.showSourceCode(projectId);
            }
        });

        // Handle download links
        document.addEventListener('click', (e) => {
            const downloadLink = e.target.closest('a[download]');
            if (downloadLink) {
                this.trackDownload(downloadLink.href);
            }
        });
    }

    rotateProject(projectId) {
        const newMainIndex = this.projects.findIndex(project => project.id === projectId);
        
        if (newMainIndex !== -1 && newMainIndex !== this.currentMainProject) {
            // Add animation class
            const mainProject = document.getElementById('main-project');
            mainProject.classList.add('rotating-out');
            
            setTimeout(() => {
                this.currentMainProject = newMainIndex;
                this.renderProjects();
                
                // Remove animation class and add entrance animation
                mainProject.classList.remove('rotating-out');
                mainProject.classList.add('rotating-in');
                
                setTimeout(() => {
                    mainProject.classList.remove('rotating-in');
                }, 500);
                
            }, 300);
        }
    }

    showSourceCode(projectId) {
        // Map project IDs to GitHub repositories or code examples
        const githubLinks = {
            'smart-grid': 'https://github.com/kevinjs/project.html',
            'home-automation': 'https://github.com/kevinjs/home-automation',
            'ev-charging': 'https://github.com/kevinjs/ev-charging-station',
            'industrial-monitor': 'https://github.com/kevinjs/industrial-monitor'
        };

        const githubUrl = githubLinks[projectId];
        if (githubUrl) {
            window.open(githubUrl, '_blank');
        } else {
            showNotification('Source code not available for this project yet.', 'info');
        }
    }

    trackDownload(fileUrl) {
        console.log(`File downloaded: ${fileUrl} at ${new Date().toLocaleString()}`);
        
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'download', {
                'event_category': 'case_study',
                'event_label': fileUrl
            });
        }
    }
}

// Initialize projects rotation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new ProjectsRotation();
});