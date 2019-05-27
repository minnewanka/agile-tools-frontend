pipeline {

  agent any
  options {
    ansiColor('xterm')
    timeout(time: 15, unit: 'MINUTES')
    timestamps()
  }
  environment { 
        APP_NAME = 'agile-frontend'
        APP_VERSION = '1.0.1-SNAPSHOT'
  }

  stages {

    stage('Build init') {
      steps {
        // Use with this syntax to be able to call folder props
        // Such as the teams webhook url
        withFolderProperties {
          buildInit()
        }
      }
    }
    stage ('set local environnement variable') {
      when {
        not {
          branch 'master'
       }
      }
      steps {
        // Create environmment variable for docker environnement
        script {
          sh 'rm -f .env.production'
          sh 'echo -e "REACT_APP_PARSE_SERVER=http://agile-tools-api.forge.labsii.loc/parse\nREACT_APP_APP_ID=DOCKER_AGILE_TOOLS\nGENERATE_SOURCEMAP=false" > .env.production.local'
        }
      }
    }

    stage ('Standard CI Pipeline') {
      steps {
        npmBuild (skipLint: true)
      }
    }

    stage ('Zip application') {
      steps {
        sh "zip -r ${env.APP_NAME}-${env.APP_VERSION}.zip dist/*"
      }
    }
    stage ('Save on Nexus') { 
      steps {
        deployToMavenRepo (
          extractInfos : 'package.json',
          version : "${env.APP_VERSION}",
          artifactId : "${env.APP_NAME}",
          groupId : "com.siicanada.appagile",
          packageLocation : './',
          fileType : "zip"
        )
      }
    }
    stage ('run docker') {
      steps {
        script {
                sh 'cd docker && \
                docker-compose down -v && \
                docker build -f Dockerfile . -t  agile-tools-frontend --network=host && \
                docker-compose up -d --force-recreate'
        }
      }
    }
    stage ('launch cypress') {
      steps {
        script {
          withCredentials([
          usernamePassword(
          credentialsId: 'dev-siicanada',
          passwordVariable: 'PASSWORD',
          usernameVariable: 'USER')]) {
            try{
              currentBuild.result="SUCCESS"
              sh 'npm run cypress:all' 
            } catch(Exception e) {
              currentBuild.result="FAILURE"
              sh "zip -r ${JOB_BASE_NAME}_build_${BUILD_NUMBER}.zip cypress/screenshots/* cypress/videos/* && curl -v -u ${USER}:${PASSWORD} --upload-file ${JOB_BASE_NAME}_build_${BUILD_NUMBER}.zip http://nexus.forge.labsii.loc/repository/cypress_result/${JOB_BASE_NAME}_build_${BUILD_NUMBER}.zip"
           }// fin de try catch
          }// fin de usernamePassword
        }
      }
    }
  }
  post {
    always {
      script {
        if (currentBuild.result != 'FAILURE') {
          echo "Pipeline ${JOB_BASE_NAME} number ${BUILD_NUMBER} finished successfully"
        }else{
          error "Pipeline ${JOB_BASE_NAME} number ${BUILD_NUMBER} finished with failure"
        }// fin de if
      }// fin de script
    }//fin de always
  }//fin de post
}
