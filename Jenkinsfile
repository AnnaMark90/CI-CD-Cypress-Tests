pipeline {
    agent any
    stages {
        stage('Prepare workspace') {
            steps {
                sh '''
                    # Убедимся, что Dockerfile и проект находятся в рабочем каталоге
                    cp -r /var/jenkins_home/workspace/cypress-ci-cd/. ${WORKSPACE}/
                '''
            }
        }
        stage('Build Cypress image') {
            steps {
                dir("${env.WORKSPACE}") {
                    sh 'docker build -t cypress-tests .'
                }
            }
        }
        stage('Run Cypress tests') {
            steps {
                sh 'docker run --rm cypress-tests'
            }
        }
    }
}
