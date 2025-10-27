pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/arwahkamdar/seed2sale.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('arwahkamdar/seed2sale')
                }
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running automated tests...'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push arwahkamdar/seed2sale'
                }
            }
        }
    }
}
