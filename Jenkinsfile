pipeline {
    agent {
    docker {
        image 'docker:24.0-dind'
        args '--privileged -v /var/run/docker.sock:/var/run/docker.sock'
    }
}

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
