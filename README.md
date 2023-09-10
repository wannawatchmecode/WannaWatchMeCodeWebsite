# WannaWatchMeCodeWebsite
The website for wanna watch me code! Created in Episode 2

Docker build:

```
 docker build . -t wannawatchmecode/wanna-watch-me-code-website
```

Docker run

```
 docker run -p 3000:3000 -d wannawatchmecode/wanna-watch-me-code-website
```

Build image

```
gcloud builds submit --region=us-west2 --tag us-east1-docker.pkg.dev/wanna-watch-me-code-website/cloud-run-source-deploy/wannawatchmecodewebsite
```

Deploy to GCloud CloudRun
```
gcloud run deploy wannawatchmecodewebsite --image us-east1-docker.pkg.dev/wanna-watch-me-code-website/cloud-run-source-deploy/wannawatchmecodewebsite:latest --region us-east1
```