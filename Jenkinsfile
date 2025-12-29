pipeline {
    agent {
        docker {
            image 'hannamarkouskaya/my-cypress-tests:latest'
            args '-v /dev/shm:/dev/shm:rw'
        }
    }
    
    environment {
        CYPRESS_baseUrl = 'https://www.saucedemo.com/inventory.html'   
    }
    
    stages {
        stage('Cypress E2E Tests') {
            steps {
                sh '''
                    echo "Запуск Cypress тестов..."
                    npx cypress run --browser chrome --headed=false
                    echo "Тесты завершены"
                '''
            }
        }
    }
    
    post {
        always {
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports',
                reportFiles: 'index.html',
                reportName: 'Cypress Dashboard'
            ])
            archiveArtifacts(
                artifacts: 'cypress/videos/**,cypress/screenshots/**',
                allowEmptyArchive: true
            )
        }
        success {
            echo 'Тесты прошли'
        }
        failure {
            echo 'Тесты упали'
        }
    }
}
