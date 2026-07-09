pipeline {
    agent any
    
    environment {
        // Replace this with your actual Netlify Site ID from your Netlify Dashboard
        NETLIFY_SITE_ID = 'YOUR_NETLIFY_SITE_ID'
    }
    
    stages {
        stage('1. Checkout Code') {
            steps {
                // Pulls down the latest code from your GitHub repository
                checkout scm
            }
        }
        
        stage('2. Build Docker Image') {
            steps {
                echo 'Building production Docker image...'
                sh 'docker build -t portfolio-app:latest .'
            }
        }
        
        stage('3. Run Automation Tests') {
            steps {
                echo 'Running frontend checks...'
                // If you don't have unit tests set up yet, you can use a basic build validation check:
                sh 'docker run --rm portfolio-app:latest echo "Build verification successful!"'
            }
        }
        
        stage('4. Deploy to Netlify') {
            steps {
                echo 'Streaming artifact files to Netlify Edge CDN...'
                // Pulls your secret token securely from Jenkins credentials manager
                withCredentials([string(credentialsId: 'NETLIFY_AUTH_TOKEN', variable: 'NETLIFY_TOKEN')]) {
                    // Installs Netlify tool dynamically inside the runner environment
                    sh 'npm install -g netlify-cli'
                    // Compiles local project files out to production
                    sh 'npm run build'
                    sh 'netlify deploy --prod --dir=dist --auth=$NETLIFY_TOKEN --site=$NETLIFY_SITE_ID'
                }
            }
        }
    }
}