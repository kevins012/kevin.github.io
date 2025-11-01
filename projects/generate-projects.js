// Project Page Generator
class ProjectGenerator {
    constructor() {
        this.template = '';
        this.loadTemplate();
    }

    async loadTemplate() {
        const response = await fetch('project-template.html');
        this.template = await response.text();
    }

    generateProject(projectId) {
        const projectData = PROJECTS_DATA[projectId];
        if (!projectData) {
            console.error(`Project data not found for: ${projectId}`);
            return;
        }

        let html = this.template
            .replace(/{PROJECT_TITLE}/g, projectData.title)
            .replace(/{PROJECT_BADGE}/g, projectData.badge)
            .replace(/{PROJECT_SUBTITLE}/g, projectData.subtitle)
            .replace(/{PROJECT_DURATION}/g, projectData.duration)
            .replace(/{PROJECT_CATEGORY}/g, projectData.category)
            .replace(/{PROJECT_ROLE}/g, projectData.role)
            .replace(/{DEMO_BUTTON}/g, projectData.demoButton || '')
            .replace(/{GITHUB_BUTTON}/g, projectData.githubButton || '')
            .replace(/{DOWNLOAD_BUTTON}/g, projectData.downloadButton || '')
            .replace(/{PROJECT_ANIMATION}/g, projectData.animation || '')
            .replace(/{PROJECT_DESCRIPTION}/g, projectData.description)
            .replace(/{ACHIEVEMENTS}/g, projectData.achievements)
            .replace(/{STATS}/g, projectData.stats)
            .replace(/{TECHNICAL_DETAILS}/g, projectData.technicalDetails)
            .replace(/{FEATURES}/g, projectData.features)
            .replace(/{GALLERY_ITEMS}/g, projectData.gallery)
            .replace(/{CHALLENGES}/g, projectData.challenges);

        return html;
    }

    saveProject(projectId, html) {
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${projectId}.html`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Usage: Generate all project pages
const generator = new ProjectGenerator();

// Generate individual project pages
function generateProjectPage(projectId) {
    const html = generator.generateProject(projectId);
    generator.saveProject(projectId, html);
}

// Generate all projects
function generateAllProjects() {
    Object.keys(PROJECTS_DATA).forEach(projectId => {
        generateProjectPage(projectId);
    });
}