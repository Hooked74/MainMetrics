# MainMetrics [![Build Status](https://travis-ci.org/Hooked74/MainMetrics.svg?branch=master)](https://travis-ci.org/Hooked74/MainMetrics)

[Demo](https://mysterious-peak-44366.herokuapp.com/)

## Start development

```
$ yarn start
```

## Start production

```
$ pip3 install virtualenv
$ virtualenv metrics
$ source metrics/bin/activate
$ pip install pipenv
$ pipenv install
$ yarn build
$ gunicorn server.manage:app
```
