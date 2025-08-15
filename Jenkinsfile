pipeline {
  agent any // or 'any' if Docker CLI is available on the node

  environment {
    DOCKERHUB_NAMESPACE     = 'nadigatlaparimala'
    IMAGE_NAME              = 'second-wave'
    DOCKERHUB_CREDENTIALS_ID = 'dockerhub-creds'
    FULL_IMAGE              = "nadigatlaparimala/second-wave:latest"
  }

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main',
        url: 'https://github.com/your-username/your-repo.git',
        credentialsId: 'github-creds'
      }
    }

    stage('Build') {
      steps {
        sh 'docker version'
        sh 'docker build -t "$FULL_IMAGE" .'
      }
    }

    stage('Login & Push (main only)') {
      when {
        anyOf {
          // For Multibranch: this is the branch filter
          branch 'main'
          // For single-job pipelines that always build main: remove this block if unnecessary
        }
      }
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub-creds',
          usernameVariable: 'DOCKER_USER',
          passwordVariable: 'DOCKER_PASS'
        )]) {
          sh '''
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push "$FULL_IMAGE"
            docker logout || true
          '''
        }
      }
    }
  }

  post {
    always {
      // Optional cleanup to save disk space on busy agents
      sh '''
        docker image prune -f || true
        docker builder prune -f || true
      '''
    }
  }
}
