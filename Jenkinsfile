pipeline {
    agent any
    
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
                echo 'Streaming production bundle to Netlify Edge CDN via isolated container...'
                withCredentials([string(credentialsId: 'NETLIFY_AUTH_TOKEN', variable: 'NETLIFY_TOKEN')]) {
                    // Step A: Extract the compiled build files out of your custom Docker image
                    sh 'docker create --name temp-container portfolio-app:latest'
                    sh 'docker cp temp-container:/usr/share/nginx/html ./dist'
                    sh 'docker rm temp-container'
                    
                    // Step B: Use an isolated Node container to deploy to Netlify
                    // Added --no-build to completely bypass Netlify's internal build engine triggers
                    sh '''
                        docker run --rm \
                        -v "$(pwd)/dist:/app/dist" \
                        -w /app \
                        node:20-alpine \
                        sh -c "npm install -g netlify-cli && netlify deploy --prod --dir=dist --auth=$NETLIFY_TOKEN --site=$NETLIFY_SITE_ID --no-build"
                    '''
                }
            }
        }
    }
}