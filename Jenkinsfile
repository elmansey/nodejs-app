pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-token',usernameVariable: 'GITHUB_USERNAME',passwordVariable: 'GITHUB_PASS')]){
                  git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/elmansey/nodejs-app'
                  sh 'ls'
               }
            }
        }
    }
}