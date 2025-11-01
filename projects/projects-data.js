// Projects Data Configuration
const PROJECTS_DATA = {
    "smart-grid": {
        title: "Smart Grid Monitoring System",
        badge: "Featured Project",
        subtitle: "Revolutionizing electrical grid management with AI-powered predictive maintenance",
        duration: "Duration: 6 Months",
        category: "Category: Industrial IoT",
        role: "Role: Lead Engineer",
        
        demoButton: '<a href="#live-demo" class="btn btn-primary"><i class="fas fa-play"></i><span>View Live Demo</span></a>',
        githubButton: '<a href="https://github.com/kevinjonathan/smart-grid" class="btn btn-secondary" target="_blank"><i class="fab fa-github"></i><span>Source Code</span></a>',
        downloadButton: '<a href="../assets/documents/smart-grid-case-study.pdf" download class="btn btn-outline"><i class="fas fa-download"></i><span>Case Study PDF</span></a>',
        
        animation: `
            <div class="grid-visualization">
                <div class="grid-node" data-node="1"></div>
                <div class="grid-node" data-node="2"></div>
                <div class="grid-node" data-node="3"></div>
                <div class="grid-connection"></div>
                <div class="data-flow"></div>
            </div>
        `,
        
        description: `The Smart Grid Monitoring System is an advanced IoT solution designed to transform traditional 
                     electrical grids into intelligent, self-healing networks. By leveraging machine learning algorithms 
                     and real-time data analytics, the system predicts potential failures and optimizes energy distribution.`,
        
        achievements: `
            <div class="achievement">
                <div class="achievement-icon">
                    <i class="fas fa-chart-line"></i>
                </div>
                <div class="achievement-content">
                    <h4>40% Efficiency Gain</h4>
                    <p>Improved overall grid efficiency through intelligent load balancing</p>
                </div>
            </div>
            <div class="achievement">
                <div class="achievement-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="achievement-content">
                    <h4>60% Faster Response</h4>
                    <p>Reduced fault detection and response time significantly</p>
                </div>
            </div>
            <div class="achievement">
                <div class="achievement-icon">
                    <i class="fas fa-bolt"></i>
                </div>
                <div class="achievement-content">
                    <h4>99.8% Uptime</h4>
                    <p>Achieved exceptional system reliability and availability</p>
                </div>
            </div>
        `,
        
        stats: `
            <div class="stat-card">
                <div class="stat-value">15+</div>
                <div class="stat-label">Components Integrated</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">50K+</div>
                <div class="stat-label">Data Points/Hour</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">12</div>
                <div class="stat-label">Sensor Types</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">3</div>
                <div class="stat-label">ML Models</div>
            </div>
        `,
        
        technicalDetails: `
            <div class="tech-category">
                <div class="tech-header">
                    <i class="fas fa-microchip"></i>
                    <h3>Hardware Architecture</h3>
                </div>
                <ul class="tech-list">
                    <li>ESP32 Microcontrollers for edge computing</li>
                    <li>Current and Voltage Sensors (ACS712, ZMPT101B)</li>
                    <li>Temperature and Humidity Sensors (DHT22)</li>
                    <li>Power Quality Analyzers</li>
                    <li>Raspberry Pi 4 for local data processing</li>
                </ul>
            </div>
            <div class="tech-category">
                <div class="tech-header">
                    <i class="fas fa-code"></i>
                    <h3>Software Stack</h3>
                </div>
                <ul class="tech-list">
                    <li>Embedded C++ for microcontroller programming</li>
                    <li>Python for data analysis and ML models</li>
                    <li>Node.js for backend services</li>
                    <li>React.js for dashboard interface</li>
                    <li>InfluxDB for time-series data</li>
                </ul>
            </div>
            <div class="tech-category">
                <div class="tech-header">
                    <i class="fas fa-cloud"></i>
                    <h3>Cloud & IoT</h3>
                </div>
                <ul class="tech-list">
                    <li>MQTT protocol for real-time communication</li>
                    <li>AWS IoT Core for device management</li>
                    <li>TensorFlow for predictive maintenance</li>
                    <li>Grafana for data visualization</li>
                    <li>WebSocket for live updates</li>
                </ul>
            </div>
        `,
        
        features: `
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-brain"></i>
                </div>
                <h4>Predictive Maintenance</h4>
                <p>Machine learning algorithms predict equipment failures before they occur, reducing downtime by 75%.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-bolt"></i>
                </div>
                <h4>Real-time Monitoring</h4>
                <p>Continuous monitoring of voltage, current, frequency, and power quality with sub-second latency.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-chart-bar"></i>
                </div>
                <h4>Data Analytics</h4>
                <p>Advanced analytics provide insights into energy consumption patterns and optimization opportunities.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <h4>Mobile Alerts</h4>
                <p>Instant notifications for critical events and system anomalies via mobile app and SMS.</p>
            </div>
        `,
        
        gallery: `
            <div class="gallery-item">
                <div class="gallery-image">
                    <div class="image-placeholder">
                        <i class="fas fa-desktop"></i>
                    </div>
                </div>
                <p>Dashboard Interface</p>
            </div>
            <div class="gallery-item">
                <div class="gallery-image">
                    <div class="image-placeholder">
                        <i class="fas fa-microchip"></i>
                    </div>
                </div>
                <p>Hardware Setup</p>
            </div>
            <div class="gallery-item">
                <div class="gallery-image">
                    <div class="image-placeholder">
                        <i class="fas fa-network-wired"></i>
                    </div>
                </div>
                <p>System Architecture</p>
            </div>
        `,
        
        challenges: `
            <div class="challenge-card">
                <h4>Data Synchronization</h4>
                <p><strong>Challenge:</strong> Synchronizing data from multiple sensors across different locations with varying network conditions.</p>
                <p><strong>Solution:</strong> Implemented hybrid sync strategy combining real-time MQTT with periodic HTTP fallback.</p>
            </div>
            <div class="challenge-card">
                <h4>Power Consumption</h4>
                <p><strong>Challenge:</strong> Maintaining continuous operation while minimizing power consumption in remote locations.</p>
                <p><strong>Solution:</strong> Developed intelligent sleep modes and solar-powered backup systems.</p>
            </div>
            <div class="challenge-card">
                <h4>Scalability</h4>
                <p><strong>Challenge:</strong> Designing a system that can scale from small microgrids to city-wide implementations.</p>
                <p><strong>Solution:</strong> Modular architecture with containerized microservices and load balancing.</p>
            </div>
        `
    },

    "home-automation": {
        title: "Home Automation System",
        badge: "IoT Project",
        subtitle: "Smart home solution with voice control and energy optimization for modern living",
        duration: "Duration: 4 Months",
        category: "Category: Smart Home IoT",
        role: "Role: Full Stack Developer",
        
        demoButton: '<a href="#live-demo" class="btn btn-primary"><i class="fas fa-play"></i><span>View Demo</span></a>',
        githubButton: '<a href="https://github.com/kevinjonathan/home-automation" class="btn btn-secondary" target="_blank"><i class="fab fa-github"></i><span>Source Code</span></a>',
        downloadButton: '<a href="../assets/documents/home-automation-docs.pdf" download class="btn btn-outline"><i class="fas fa-download"></i><span>Documentation</span></a>',
        
        animation: `
            <div class="home-automation-visual">
                <div class="home-node" data-room="living"></div>
                <div class="home-node" data-room="kitchen"></div>
                <div class="home-node" data-room="bedroom"></div>
                <div class="automation-flow"></div>
            </div>
        `,
        
        description: `A comprehensive home automation system that integrates various smart devices into a unified ecosystem. 
                     The system enables voice control, energy optimization, and remote monitoring through a user-friendly mobile application.`,
        
        achievements: `
            <div class="achievement">
                <div class="achievement-icon">
                    <i class="fas fa-leaf"></i>
                </div>
                <div class="achievement-content">
                    <h4>30% Energy Savings</h4>
                    <p>Reduced energy consumption through intelligent scheduling</p>
                </div>
            </div>
            <div class="achievement">
                <div class="achievement-icon">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="achievement-content">
                    <h4>Voice Control</h4>
                    <p>Integrated natural language processing for voice commands</p>
                </div>
            </div>
            <div class="achievement">
                <div class="achievement-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="achievement-content">
                    <h4>Mobile App</h4>
                    <p>Cross-platform mobile application for remote control</p>
                </div>
            </div>
        `,
        
        stats: `
            <div class="stat-card">
                <div class="stat-value">15+</div>
                <div class="stat-label">Devices Integrated</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">95%</div>
                <div class="stat-label">Uptime</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">8</div>
                <div class="stat-label">Room Types</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">5</div>
                <div class="stat-label">Control Methods</div>
            </div>
        `,
        
        technicalDetails: `
            <div class="tech-category">
                <div class="tech-header">
                    <i class="fas fa-microchip"></i>
                    <h3>Hardware Components</h3>
                </div>
                <ul class="tech-list">
                    <li>ESP32 Microcontrollers</li>
                    <li>Relay Modules for appliance control</li>
                    <li>PIR Motion Sensors</li>
                    <li>DHT22 Temperature/Humidity Sensors</li>
                    <li>Smart Switches and Outlets</li>
                </ul>
            </div>
            <div class="tech-category">
                <div class="tech-header">
                    <i class="fas fa-code"></i>
                    <h3>Software Stack</h3>
                </div>
                <ul class="tech-list">
                    <li>React Native for mobile app</li>
                    <li>Node.js for backend API</li>
                    <li>Python for voice processing</li>
                    <li>MQTT for device communication</li>
                    <li>SQLite for local storage</li>
                </ul>
            </div>
            <div class="tech-category">
                <div class="tech-header">
                    <i class="fas fa-cloud"></i>
                    <h3>Integration</h3>
                </div>
                <ul class="tech-list">
                    <li>Google Assistant Integration</li>
                    <li>IFTTT Webhooks</li>
                    <li>RESTful APIs</li>
                    <li>WebSocket for real-time updates</li>
                    <li>OAuth 2.0 for security</li>
                </ul>
            </div>
        `,
        
        features: `
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-voice"></i>
                </div>
                <h4>Voice Control</h4>
                <p>Natural language processing for intuitive voice commands and control.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-bolt"></i>
                </div>
                <h4>Energy Optimization</h4>
                <p>Smart scheduling and automation to reduce energy consumption by 30%.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <h4>Security</h4>
                <p>Advanced security features including encryption and access controls.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-sync-alt"></i>
                </div>
                <h4>Automation Scenes</h4>
                <p>Pre-configured scenes for different activities and times of day.</p>
            </div>
        `,
        
        gallery: `
            <div class="gallery-item">
                <div class="gallery-image">
                    <div class="image-placeholder">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                </div>
                <p>Mobile App Interface</p>
            </div>
            <div class="gallery-item">
                <div class="gallery-image">
                    <div class="image-placeholder">
                        <i class="fas fa-home"></i>
                    </div>
                </div>
                <p>System Dashboard</p>
            </div>
            <div class="gallery-item">
                <div class="gallery-image">
                    <div class="image-placeholder">
                        <i class="fas fa-network-wired"></i>
                    </div>
                </div>
                <p>Network Architecture</p>
            </div>
        `,
        
        challenges: `
            <div class="challenge-card">
                <h4>Device Compatibility</h4>
                <p><strong>Challenge:</strong> Integrating various smart devices from different manufacturers with different protocols.</p>
                <p><strong>Solution:</strong> Developed universal adapter layer supporting multiple protocols (WiFi, Zigbee, Z-Wave).</p>
            </div>
            <div class="challenge-card">
                <h4>Latency Issues</h4>
                <p><strong>Challenge:</strong> Ensuring real-time responsiveness for voice commands and automation.</p>
                <p><strong>Solution:</strong> Implemented edge computing with local processing for critical commands.</p>
            </div>
            <div class="challenge-card">
                <h4>Security Concerns</h4>
                <p><strong>Challenge:</strong> Protecting user privacy and preventing unauthorized access.</p>
                <p><strong>Solution:</strong> Multi-layer security with encryption, authentication, and regular updates.</p>
            </div>
        `
    },

    "ev-charging": {
        title: "EV Charging Station",
        badge: "Power Electronics",
        subtitle: "Smart electric vehicle charging station with payment system and energy management",
        duration: "Duration: 5 Months",
        category: "Category: Power Systems",
        role: "Role: Hardware Engineer",
        
        demoButton: '<a href="#live-demo" class="btn btn-primary"><i class="fas fa-play"></i><span>View Prototype</span></a>',
        githubButton: '<a href="https://github.com/kevinjonathan/ev-charger" class="btn btn-secondary" target="_blank"><i class="fab fa-github"></i><span>Source Code</span></a>',
        downloadButton: '<a href="../assets/documents/ev-charger-specs.pdf" download class="btn btn-outline"><i class="fas fa-download"></i><span>Technical Specs</span></a>',
        
        animation: `
            <div class="ev-charging-visual">
                <div class="charging-station"></div>
                <div class="energy-flow"></div>
                <div class="payment-indicator"></div>
            </div>
        `,
        
        description: `A smart electric vehicle charging station designed for public use with integrated payment system, 
                     energy management, and remote monitoring capabilities. The system supports fast charging and smart grid integration.`,
        
        achievements: `
            <div class="achievement">
                <div class="achievement-icon">
                    <i class="fas fa-bolt"></i>
                </div>
                <div class="achievement-content">
                    <h4>Fast Charging</h4>
                    <p>80% charge in 30 minutes with advanced power management</p>
                </div>
            </div>
            <div class="achievement">
                <div class="achievement-icon">
                    <i class="fas fa-money-bill-wave"></i>
                </div>
                <div class="achievement-content">
                    <h4>Payment System</h4>
                    <p>Integrated RFID and mobile payment options</p>
                </div>
            </div>
            <div class="achievement">
                <div class="achievement-icon">
                    <i class="fas fa-chart-line"></i>
                </div>
                <div class="achievement-content">
                    <h4>Grid Friendly</h4>
                    <p>Smart charging to reduce grid impact during peak hours</p>
                </div>
            </div>
        `,
        
        stats: `
            <div class="stat-card">
                <div class="stat-value">50kW</div>
                <div class="stat-label">Max Power Output</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">4</div>
                <div class="stat-label">Payment Methods</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">30min</div>
                <div class="stat-label">Fast Charge Time</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">99.5%</div>
                <div class="stat-label">Efficiency</div>
            </div>
        `,
        
        technicalDetails: `
            <div class="tech-category">
                <div class="tech-header">
                    <i class="fas fa-bolt"></i>
                    <h3>Power Electronics</h3>
                </div>
                <ul class="tech-list">
                    <li>Three-phase AC-DC conversion</li>
                    <li>IGBT-based power switching</li>
                    <li>Power factor correction</li>
                    <li>Thermal management system</li>
                    <li>Safety interlocks and protection</li>
                </ul>
            </div>
            <div class="tech-category">
                <div class="tech-header">
                    <i class="fas fa-microchip"></i>
                    <h3>Control System</h3>
                </div>
                <ul class="tech-list">
                    <li>STM32 Microcontroller</li>
                    <li>Real-time operating system</li>
                    <li>CAN bus communication</li>
                    <li>Touch screen interface</li>
                    <li>Remote firmware updates</li>
                </ul>
            </div>
            <div class="tech-category">
                <div class="tech-header">
                    <i class="fas fa-network-wired"></i>
                    <h3>Connectivity</h3>
                </div>
                <ul class="tech-list">
                    <li>4G/LTE cellular connectivity</li>
                    <li>WiFi and Ethernet options</li>
                    <li>OCPP protocol compliance</li>
                    <li>Cloud management platform</li>
                    <li>Mobile app integration</li>
                </ul>
            </div>
        `,
        
        features: `
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-charging-station"></i>
                </div>
                <h4>Fast Charging</h4>
                <p>DC fast charging capability with advanced thermal management.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-credit-card"></i>
                </div>
                <h4>Multiple Payments</h4>
                <p>Support for RFID, credit card, and mobile payment methods.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-cloud"></i>
                </div>
                <h4>Remote Management</h4>
                <p>Cloud-based management system for monitoring and control.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <h4>Safety Features</h4>
                <p>Comprehensive safety systems including ground fault protection.</p>
            </div>
        `,
        
        gallery: `
            <div class="gallery-item">
                <div class="gallery-image">
                    <div class="image-placeholder">
                        <i class="fas fa-charging-station"></i>
                    </div>
                </div>
                <p>Charging Station</p>
            </div>
            <div class="gallery-item">
                <div class="gallery-image">
                    <div class="image-placeholder">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                </div>
                <p>Mobile App</p>
            </div>
            <div class="gallery-item">
                <div class="gallery-image">
                    <div class="image-placeholder">
                        <i class="fas fa-tachometer-alt"></i>
                    </div>
                </div>
                <p>Control Panel</p>
            </div>
        `,
        
        challenges: `
            <div class="challenge-card">
                <h4>Power Management</h4>
                <p><strong>Challenge:</strong> Managing high power levels while maintaining efficiency and safety.</p>
                <p><strong>Solution:</strong> Advanced thermal management and power electronics design.</p>
            </div>
            <div class="challenge-card">
                <h4>Payment Integration</h4>
                <p><strong>Challenge:</strong> Integrating multiple payment systems with high security requirements.</p>
                <p><strong>Solution:</strong> Secure payment gateway with encryption and tokenization.</p>
            </div>
            <div class="challenge-card">
                <h4>Grid Impact</h4>
                <p><strong>Challenge:</strong> Minimizing impact on the electrical grid during peak demand.</p>
                <p><strong>Solution:</strong> Smart charging algorithms and grid communication.</p>
            </div>
        `
    }
};