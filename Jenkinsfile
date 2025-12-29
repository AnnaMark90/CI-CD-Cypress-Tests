pipeline {
    agent any

    stages {
        stage('Build Cypress image') {
            steps {
                sh 'docker build -t cypress-tests .'
            }
        }

        stage('Run Cypress tests') {
            steps {
                sh 'docker run --rm cypress-tests'
            }
        }
    }

    post {
        success {
            echo '✅ Тесты прошли'
        }
        failure {
            echo '❌ Тесты упали'
        }
    }
}
