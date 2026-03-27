pipeline {
    agent any

    environment {
        RESOURCE_GROUP = 'jenkins-get-started-rg-cc'
        WEBAPP_NAME = 'jiayi-node-app-2026'
        TENANT_ID = '3491626d-47b1-45d0-bb04-4af294f419e5'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Login Azure') {
            steps {
                withCredentials([azureServicePrincipal('azure-credentialzh')]) {
                    sh '''
                        az login --service-principal \
                        --username $AZURE_CLIENT_ID \
                        --password $AZURE_CLIENT_SECRET \
                        --tenant $TENANT_ID
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    zip -r app.zip .
                    az webapp deploy \
                      --resource-group $RESOURCE_GROUP \
                      --name $WEBAPP_NAME \
                      --src-path app.zip \
                      --type zip
                '''
            }
        }
    }
}
