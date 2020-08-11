$(document).ready(function () {
    var projetsModel = {
        projects: [
            {
                id: 'ci-cd-pipeline',
                name: "CI/CD Pipeline - Ericsson",
                description: `Using tools like Jenkins and Docker, integrated and tested 
                versions of the project was delivered with an average of 7 minutes
                `,
                thumbnail: "jenkins-icon.png",
                stack: ['Groovy', 'Jenkins', 'GitLab', 'Docker', 'Docker-Compose', 'Docker-Swarm', 'Linux', 'Ansible', 'Katalon', 'Jmeter'],
                demo_uri: 'https://drive.google.com/file/d/1jA91J9g4xnjrEiYguTZ4xgluORiHkq9l/view',
                code_uri: '#',
                isPrivate: true
            },
            {
                id: 'gabrielslima-blog',
                name: "Blog - Gabriel Lima",
                description: `Built from scratch using open source tools, the blog is intended 
                to spread experiences, ideas and help the programming community
                `,
                thumbnail: "blog.PNG",
                stack: ['HTML5', 'HTML', 'CSS', 'CSS3', 'JavaSCript'],
                demo_uri: 'https://gabrielslima.github.io/blog/',
                code_uri: 'https://github.com/GabrielSlima/blog',
                isPrivate: false
            },
            {
                id: 'static-project',
                name: "Static Project",
                description: `Command-line interface (CLI) tool for automatic Static Pages creation.
                              <br>
                              The template is Bootstrap, JavaScript, HTML and CSS based
                `,
                thumbnail: "bash.jpeg",
                stack: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'],
                demo_uri: 'https://darkarmybrasil.github.io/conteudo/redes/user-agent.html?valor=user-agent',
                code_uri: 'https://github.com/GabrielSlima/Static-Project',
                isPrivate: false
            },
            {
                id: 'spotify-clone',
                name: "Spotify Clone",
                description: `Main page clone from one of the first Spotify's Web Site Design.
                              <br>
                              The project was Hosted using GitHub pages
                `,
                thumbnail: "spotify-clone-min.png",
                stack: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'],
                demo_uri: 'https://gabrielslima.github.io/spotifyclone/',
                code_uri: 'https://github.com/GabrielSlima/spotifyclone',
                isPrivate: false
            },
            {
                id: 'medical-center',
                name: "Zé Garoto - Centro Médico",
                description: `Single page Website for a medical center based in São Gonçalo - Rio de Janeiro.
                              <br>
                              The project was Hosted using GitHub pages
                `,
                thumbnail: "medicalcenter.png",
                stack: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap', 'Font Awesome', 'Owl Carousel', 'Leaflet', 'Python3', 'Flask'],
                demo_uri: 'http://centromedicozegaroto.com.br/',
                code_uri: 'https://github.com/centromedicozegaroto/centromedicozegaroto.github.io',
                isPrivate: false
            }
        ]
    };

    var projectController = {
        init: function(){
            projectView.view();
        },

        getProjects: function () {
            return projetsModel.projects;
        }
    };

    var projectView = {
        view: function(){
            this.projectsContainer = $('#projects-setction-row');
            this.project_html_template = $('script[data-template="project"]').html();
            this.private_project_html_template = $('script[data-template="private-project"]').html();
            this.stack_item_template = $('script[data-template="stack-item"]').html();
            this.projects_container = $('#projects-setction-row');
            this.render();
        },

        render: function(){
            var project_html_template = this.project_html_template;
            var private_project_html_template = this.private_project_html_template;
            var stack_item_template = this.stack_item_template;
            var projects_container = this.projects_container;

            var enriched_project = '';
            var enriched_stack_item_list = ''
            var html = '';

            this.projectsList = projectController.getProjects();
            this.projectsList.forEach(project => {
                // debugger;
                // /{{project_id}}/g REPLACES ALL OCCURRENCES OF project_id
                if(project.isPrivate){
                    enriched_project = this.renderTemplate(private_project_html_template, project);
                } else{
                    enriched_project = this.renderTemplate(project_html_template, project);
                }
                html += enriched_project;
                enriched_project = '';
                enriched_stack_item_list = '';
            });
            projects_container.html(html);
        },
        renderTemplate: function(html_template, project){
            // project.stack.forEach(function(tool, index) {
            //     if(index == project.stack.length -1 ) {
            //         enriched_stack_item_list += stack_item_template.replace('{{tool_name}}', tool);
            //     } else {
            //         enriched_stack_item_list += stack_item_template.replace('{{tool_name}}', tool + ',');
            //     }
            // });
            
            enriched_project = html_template.replace(/{{project_id}}/g, project.id);
            enriched_project = enriched_project.replace('{{project_name}}', project.name);
            enriched_project = enriched_project.replace('{{project_description}}', project.description);
            enriched_project = enriched_project.replace('{{project_image_name_and_extension}}', project.thumbnail);
           // enriched_project = enriched_project.replace('{{project_stack_items}}', enriched_stack_item_list);
            enriched_project = enriched_project.replace('{{project_demo_uri}}', project.demo_uri);
            enriched_project = enriched_project.replace('{{project_code_uri}}', project.code_uri);
            return enriched_project;
        }

    };
    projectController.init();
});