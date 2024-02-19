pipeline{
           agent any
           environment {
                      DOCKERHUB_CREDENTIALS=credentials('dockerhub ')
           }
           stages {
                      stage('Build') {
                                    steps {
                                                sh 'docker build -t ahmedwahid/angular-app:latest .'
                                          }
                      }
                      stage('Login') {
                                    steps {
                                                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                                          }
                      }
                      stage('Push') {
                                    steps {
                                                sh 'docker push ahmedwahid/angular-app:latest'
                                          }
                      }
                      stage('deploy') {
                                    steps {
                                                sh 'docker run -d -p 5200:5200 --name app ahmedwahid/angular-app:latest'
                                          }
                      }
           }
           post {
                      always {
                                                sh 'docker logout'
                             }
                }
}
