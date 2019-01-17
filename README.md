# bpm-people-time-ui

##Build Status and Code coverage
[![Build Status](https://travis-ci.com/ioet/bpm-people-time-ui.svg?branch=master)](https://travis-ci.com/ioet/bpm-people-time-ui)
[![Code Coverage](https://codecov.io/gh/ioet/bpm-people-time-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/ioet/bpm-people-time-ui)

## Run it locally
Run this command and everything should be setup
```
npm install
```

## To run the app locally with docker-compose
You will need a file called `aws.env` inside your root directory containing these environment variables.
```
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY
```

Login to AWS CLI with this command:
```
$(aws ecr get-login --no-include-email --region us-east-1)
```
 
Then run this command to start the edge-server, the eureka-server and the bpm-people-api
```
docker-compose up
```

## Running the app

Export this environment variable `BPM_PEOPLE_TIME_API_URL` to define the APIs URL.  
If you're running the API with docker-compose this is the URL:
```
export BPM_PEOPLE_TIME_API_URL=http://localhost:9081/people-time-service
```

Then run this command to start the application
```
npm start
```

## Running tests

```
npm test
```


## Docker?

```
$ docker build -t bpm-people-ui .
```


```
$ docker run -p 8080:8080 bpm-people-ui
```
