// Experience Gallery System
class ExperienceGallery {
    constructor() {
        this.currentImageIndex = 0;
        this.currentGallery = 'pln';
        this.experienceData = {
            'pln': {
                images: [
                    'img/pln.jpg',
                    'img/pln-2.jpg',
                    'img/pln-3.jpg',
                    'img/pln-4.jpg'
                ],
                altTexts: [
                    'PLN Substation Maintenance',
                    'Grid Monitoring System',
                    'Field Inspection Team',
                    'Power Quality Analysis'
                ],
                title: 'PT PLN (Persero)',
                position: 'Electrical Engineering Intern',
                period: 'December 2024 - February 2025',
                description: 'Assumed substation operator responsibilities in the power distribution division, overseeing grid operations and maintenance activities. Collaborated with transmission line teams to support critical maintenance of protection relays and SCADA RTU systems.',
                responsibilities : [
                    'Performed Condition Based Maintenance on substation equipment',
                    'Analyzed power quality data and prepared comprehensive reports', 
                    'Participated in grid distribution optimization projects',
                    'Supported implementation of smart grid technologies at substation'
                ]
            },
            'tech-innov': {
                images: [
                    'img/bangkit.jpg',
                    'img/bangkit-2.jpg',
                    'img/bangkit-3.jpg',
                    'img/bangkit-4.jpg'
                ],
                altTexts: [
                    'Bangkit Academy Program',
                    'Machine Learning Project',
                    'Cloud Computing Setup',
                    'Mobile Development'
                ],
                title: 'Bangkit Academy',
                position: 'Machine Learning Cohort',
                period: 'August 2024 - December 2024',
                description: 'Completed the competitive, Google-led Bangkit Academy program, specializing in Machine Learning. Gained proficiency in fundamental concepts like Neural Networks, advanced architectures such as GANs, and implemented models using industry-standard tools like TensorFlow. Further honed skills by delivering a team-based capstone project and enhancing crucial soft skills including English proficiency and leadership..',
                responsibilities : [
                    'Mastered machine learning specialization including supervised learning and neural networks',
                    'Implemented various ML models using TensorFlow for framework-based development and manual coding for fundamental understanding',
                    'Collaborated in agile teams to design and deploy end-to-end capstone projects',
                    'Strengthened professional soft skills and English communication through dedicated ILT sessions, alongside technical machine learning training'
                ]
         }
            // 'smart-labs': {
            //     images: [
            //         'img/smart-lab-1.jpg',
            //         'img/smart-lab-2.jpg',
            //         'img/smart-lab-3.jpg'
            //     ],
            //     altTexts: [
            //         'Smart Laboratory Automation System',
            //         'Data Monitoring Dashboard',
            //         'Research Equipment Setup'
            //     ],
            //     title: 'Smart Labs Research',
            //     position: 'Research Assistant',
            //     period: 'September 2022 - December 2022',
            //     description: 'Worked on laboratory automation systems and data acquisition projects. Developed solutions for real-time monitoring and control of lab equipment.',
            //     responsibilities: [
            //         'Automated laboratory measurement systems',
            //         'Developed data acquisition software',
            //         'Integrated sensors with cloud platforms',
            //         'Created real-time monitoring dashboards'
            //     ]
            // },
            // 'energy-sol': {
            //     images: [
            //         'img/energy-1.jpg',
            //         'img/energy-2.jpg',
            //         'img/energy-3.jpg'
            //     ],
            //     altTexts: [
            //         'Renewable Energy System Design',
            //         'Solar Power Installation',
            //         'Energy Monitoring Setup'
            //     ],
            //     title: 'Energy Solutions Inc.',
            //     position: 'Renewable Energy Intern',
            //     period: 'March 2022 - June 2022',
            //     description: 'Focused on renewable energy systems design and implementation. Worked on solar power installations and energy efficiency projects.',
            //     responsibilities: [
            //         'Assisted in solar power system design',
            //         'Conducted energy efficiency audits',
            //         'Installed and tested renewable energy systems',
            //         'Analyzed energy consumption data'
            //     ]
            // },
            // 'automation': {
            //     images: [
            //         'img/automation-1.jpg',
            //         'img/automation-2.jpg'
            //     ],
            //     altTexts: [
            //         'Industrial Automation Control Panel',
            //         'PLC Programming Interface'
            //     ],
            //     title: 'Automation Co.',
            //     position: 'Automation Engineering Trainee',
            //     period: 'July 2021 - September 2021',
            //     description: 'Gained hands-on experience in industrial automation systems. Worked with PLC programming, motor control, and industrial networking.',
            //     responsibilities: [
            //         'Programmed PLC systems for industrial control',
            //         'Designed motor control circuits',
            //         'Configured industrial communication networks',
            //         'Assisted in system installation and commissioning'
            //     ]
            // }
        };
        
        this.boundPrev = this.previousImage.bind(this);
        this.boundNext = this.nextImage.bind(this);
        this.init();
    }

    init() {
        this.setupTabSystem();
        this.loadGallery('pln');
    }

    setupTabSystem() {
        const tabButtons = document.querySelectorAll('.tab-btn');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.dataset.tab;
                
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to current button
                button.classList.add('active');
                
                // Hide all tab contents
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Load gallery for this tab
                this.loadGallery(tabId);
            });
        });
    }

    loadGallery(tabId) {
        this.currentGallery = tabId;
        this.currentImageIndex = 0;
        
        const galleryData = this.experienceData[tabId];
        if (galleryData) {
            this.renderExperienceContent(galleryData);
            
            // Show the correct tab content
            const tabContent = document.getElementById(`${tabId}-content`);
            if (tabContent) {
                tabContent.classList.add('active');
            }
        }
    }

    renderExperienceContent(experienceData) {
        const tabContent = document.getElementById(`${this.currentGallery}-content`);
        if (!tabContent) return;

        tabContent.innerHTML = `
            <div class="experience-header">
                <div class="company-info">
                    <h3>${experienceData.title}</h3>
                    <p>${experienceData.position}</p>
                    <span>${experienceData.period}</span>
                </div>
                <div class="company-logo">
                    <i class="fas fa-briefcase"></i>
                </div>
            </div>
            
            <div class="experience-description">
                <p>${experienceData.description}</p>
                
                <div class="experience-highlights">
                    <h4>Key Responsibilities:</h4>
                    <ul>
                        ${experienceData.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
                
                ${experienceData.images && experienceData.images.length > 0 ? `
                <div class="experience-gallery">
                    <h4>Project Gallery</h4>
                    <div class="gallery-container">
                        <div class="gallery-main">
                            <div class="image-container">
                                <img src="${experienceData.images[0]}" 
                                     alt="${experienceData.altTexts[0]}" 
                                     id="gallery-main-img-${this.currentGallery}"
                                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMkYyRjNGIi8+CjxwYXRoIGQ9Ik0xMjAgMTIwSDE0MFYxNDBIMTIwVjEyMFpNMTYwIDEyMEgxODBWMTQwSDE2MFYxMjBaTTIwMCAxMjBIMjIwVjE0MEgyMDBWMTIwWk0xNDAgMTYwSDE2MFYxODBIMTQwVjE2MFpNMTgwIDE2MEgyMDBWMTgwSDE4MFYxNjBaTTE0MCA4MEgxNjBWMTBIMTQwVjgwWk0xODAgODBIMjAwVjEwSDE4MFY4MFoiIGZpbGw9IiM1QjVCNUIiLz4KPHRleHQgeD0iMjAwIiB5PSIyMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM1QjVCNUIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+SW1hZ2UgTm90IEF2YWlsYWJsZTwvdGV4dD4KPC9zdmc+'">
                            </div>
                        </div>
                        <div class="gallery-thumbnails">
                            ${experienceData.images.map((image, index) => `
                                <div class="thumbnail ${index === 0 ? 'active' : ''}" 
                                     data-img="${image}" 
                                     data-index="${index}">
                                    <img src="${image}" 
                                         alt="${experienceData.altTexts[index]}" 
                                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMkYyRjNGIi8+CjxwYXRoIGQ9Ik0zMCAzMEgzNVYzNUgzMFYzMFpNMzUgMzVINDBWNDBIMzVWMzVaTTQ1IDM1SDUwVjQwSDQ1VjM1Wk0zNSA0MEg0MFY0NUgzNVY0MFpNNDAgNDBINDBWNDVINDBWNDBaTTMwIDI1SDM1VjMwSDMwVjI1Wk00NSAyNUg1MFYzMEg0NVYyNVoiIGZpbGw9IiM1QjVCNUIiLz4KPC9zdmc+'">
                                </div>
                            `).join('')}
                        </div>
                        <div class="gallery-controls">
                            <button class="gallery-btn prev-btn" data-gallery="${this.currentGallery}">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button class="gallery-btn next-btn" data-gallery="${this.currentGallery}">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                ` : '<p class="no-gallery">No gallery images available for this experience.</p>'}
            </div>
        `;

        // Setup event listeners untuk gallery yang baru di-render
        setTimeout(() => {
            this.setupGalleryControls();
            this.setupThumbnailEvents();
        }, 100);
    }

    setupGalleryControls() {
        // Hapus semua event listeners lama
        document.querySelectorAll('.prev-btn').forEach(btn => {
            btn.removeEventListener('click', this.boundPrev);
        });
        document.querySelectorAll('.next-btn').forEach(btn => {
            btn.removeEventListener('click', this.boundNext);
        });
    
        // Tambahkan event listeners baru untuk tombol di tab aktif
        const activePrevBtn = document.querySelector(`#${this.currentGallery}-content .prev-btn`);
        const activeNextBtn = document.querySelector(`#${this.currentGallery}-content .next-btn`);
    
        if (activePrevBtn) {
            activePrevBtn.addEventListener('click', this.boundPrev);
        }
    
        if (activeNextBtn) {
            activeNextBtn.addEventListener('click', this.boundNext);
        }
    
        // Update gallery controls visibility
        const galleryData = this.experienceData[this.currentGallery];
        if (galleryData && galleryData.images) {
            this.updateGalleryControls(galleryData.images.length);
        }
    
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Hanya aktif jika user tidak sedang mengisi form
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            if (e.key === 'ArrowLeft') {
                this.previousImage();
            } else if (e.key === 'ArrowRight') {
                this.nextImage();
            }
        });
    }

    setupThumbnailEvents() {
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener('click', () => {
                const index = parseInt(thumbnail.dataset.index);
                this.showImage(index);
            });
        });
    }

    showImage(index) {
        const galleryData = this.experienceData[this.currentGallery];
        if (!galleryData || !galleryData.images) return;

        const totalImages = galleryData.images.length;
        if (index >= 0 && index < totalImages) {
            this.currentImageIndex = index;
            
            const mainImg = document.getElementById(`gallery-main-img-${this.currentGallery}`);
            if (mainImg) {
                // Add fade transition
                mainImg.style.opacity = '0';
                
                setTimeout(() => {
                    mainImg.src = galleryData.images[index];
                    mainImg.alt = galleryData.altTexts[index];
                    mainImg.style.opacity = '1';
                }, 200);
            }

            // Update active thumbnail
            this.updateActiveThumbnail(index);
        }
    }

    nextImage() {
        const galleryData = this.experienceData[this.currentGallery];
        if (!galleryData || !galleryData.images) return;

        const totalImages = galleryData.images.length;
        if (totalImages > 0) {
            const nextIndex = (this.currentImageIndex + 1) % totalImages;
            this.showImage(nextIndex);
        }
    }

    previousImage() {
        const galleryData = this.experienceData[this.currentGallery];
        if (!galleryData || !galleryData.images) return;

        const totalImages = galleryData.images.length;
        if (totalImages > 0) {
            const prevIndex = (this.currentImageIndex - 1 + totalImages) % totalImages;
            this.showImage(prevIndex);
        }
    }

    updateActiveThumbnail(index) {
        // Update thumbnails hanya di tab yang aktif
        const activeTab = this.currentGallery;
        const thumbnails = document.querySelectorAll(`#${activeTab}-content .thumbnail`);
        
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }

    updateGalleryControls(totalImages) {
        const prevBtn = document.querySelector(`#${this.currentGallery}-content .prev-btn`);
        const nextBtn = document.querySelector(`#${this.currentGallery}-content .next-btn`);
    
        if (prevBtn && nextBtn) {
            // Hide controls if only one image
            if (totalImages <= 1) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'flex';
                nextBtn.style.display = 'flex';
            }
        }
    }
    // TAMBAH method cleanup
    cleanupEventListeners() {
        // Hapus semua event listeners untuk menghindari memory leaks
        document.querySelectorAll('.prev-btn').forEach(btn => {
            btn.removeEventListener('click', this.boundPrev);
        });
        document.querySelectorAll('.next-btn').forEach(btn => {
            btn.removeEventListener('click', this.boundNext);
        });
        
        // Hapus keyboard event listener
        document.removeEventListener('keydown', this.boundKeydown);
    }
}

// Initialize experience gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new ExperienceGallery();
});