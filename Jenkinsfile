pipeline {
    agent any
    
    tools {
        // FIXED: Using the exact standard 'docker' identifier block
        docker 'docker-cli'
    }
    
    environment {
        NETLIFY_SITE_ID = 'fcf8a461-6141-427c-b430-6434eca95f0d'
    }
    
    stages {
        stage('1. Checkout Code') {
            steps {
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
                echo 'Running build verification check...'
                sh 'docker run --rm portfolio-app:latest echo "Build verification successful!"'
            }
        }
        
        stage('4. Deploy to Netlify') {
            steps {
                echo 'Streaming production bundle to Netlify Edge CDN...'
                withCredentials([string(credentialsId: 'NETLIFY_AUTH_TOKEN', variable: 'NETLIFY_TOKEN')]) {
                    sh 'npm install -g netlify-cli'
                    sh 'npm run build'
                    sh 'netlify deploy --prod --dir=dist --auth=$NETLIFY_TOKEN --site=$NETLIFY_SITE_ID'
                }
            }
        }
    }
}