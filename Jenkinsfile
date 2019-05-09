pipeline {

  agent any
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
       sh 'echo -e "REACT_APP_PARSE_SERVER=agile-tools-backend/parse\nREACT_APP_APP_ID=DOCKER_AGILE_TOOLS" > .env.production.local'
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
  }
}