# bpm-people-time-ui

## Build Status and Code coverage
[![Build Status](https://travis-ci.com/ioet/bpm-people-time-ui.svg?branch=master)](https://travis-ci.com/ioet/bpm-people-time-ui)
[![Code Coverage](https://codecov.io/gh/ioet/bpm-people-time-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/ioet/bpm-people-time-ui)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ioet_bpm-people-time-ui&metric=alert_status)](https://sonarcloud.io/dashboard?id=ioet_bpm-people-time-ui)

## Run it locally
Run this command and everything should be setup
```
npm install
```

Export these environment variables to define the APIs URL:  
`BPM_PEOPLE_TIME_API_URL`  
`BPM_ORGANIZATIONS_API_URL`  
`BPM_PEOPLE_API_URL`  
`BPM_PROJECTS_API_URL`  
`BPM_SKILLS_API_URL`  

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
