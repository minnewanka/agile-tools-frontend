pipeline {

  agent any
  environment { 
        APP_NAME = 'agile-webapp'
        APP_VERSION = '1.0.0-SNAPSHOT'
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

    stage ('Standard CI Pipeline') {
      steps {
        npmBuild (skipLint: true)
      }
    }

    stage ('Zip application') {
      steps {
        sh "zip ${env.APP_NAME}-${env.APP_VERSION}.zip dist/*"
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
  }
}