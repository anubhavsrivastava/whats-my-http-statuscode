# Whats my HTTP Status Code - [Visit](https://httpstatuscode.netlify.com)

A UI Based interface to guide you to exact web api - http specification status your server should return for any request.

[![Build Status](https://travis-ci.org/anubhavsrivastava/whats-my-http-statuscode.svg?branch=master)](https://travis-ci.org/anubhavsrivastava/whats-my-http-statuscode)
[![Coverage Status](https://coveralls.io/repos/github/anubhavsrivastava/whats-my-http-statuscode/badge.svg?branch=master)](https://coveralls.io/github/anubhavsrivastava/whats-my-http-statuscode?branch=master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub issues](https://img.shields.io/github/issues/anubhavsrivastava/whats-my-http-statuscode.svg?style=flat-square)](https://github.com/anubhavsrivastava/whats-my-http-statuscode/issues)

## Introduction

This projects helps you choose appropriate HTTP status code for your web APIs. Based on series of questions, it lets arrive to a appropriate HTTP status code (with reason). In short, it makes choosing HTTP code much easier.

## Usage

Answer a series of question regarding your current implementation or problem that you have with the API, starting off with selection of HTTP code series, like 200 series (success) or 500 series (server error). Once you have correctly identified you HTTp status series, you can answer few more questions to get to exact HTTP status code.

### Why should I use it?

There can be a confusion regarding what exact HTTP status code should be for a particular scenario, for eg, should it be `404 Not Found` or `204 No Content` in scenarios where resource exist but has no information. Or should one give `403 Forbidden` for access denied resource and let the user know about existence of the resource (security) or should say `404 Not Found`.

### Who it is meant for?

This is meant for Restful APIs and system that want to follow standard HTTP status code. One should consider following a specification for better usability across system, providing APIs to third party, disconnecting WEB API server with frontend, or simply more ahead with just `200 OK` status across the system with actual reason in body `{ "status": "failure" }`

## Inspiration

Inspired by the awesome work on HTTP status code selection by [Michael Kropat - Codetinkerer.com](https://www.codetinkerer.com/2015/12/04/choosing-an-http-status-code.html)

## Development

To add more features or fix a thing or two, to this project, you need to make sure you have all the requirements checked, this project installed, and a little understanding of this project.

### Requirement

You need to be at least familiar with the following tools and languages:

-   HTML/CSS 3/JavaScript
-   React/Redux/React-Router
-   JSON

### Installation

You can now install the project and start developing. To do so, just follow these steps:

-   Fork this project.
-   Clone your fork git clone
-   Branch out git branch -b NEW-BRANCH
-   Make your changes.
-   Create a pull request.

To run this project locally, perform following steps

-   Install packages via `npm install` or `yarn` , this will install all the dependencies required by the project
-   To start development on local machine, run `npm start` on terminal.

P.S This project is created from ejected `create-react-app`.

## Contribution

One can contribute to this project in following ways,

### Development

This project can be improved so much more, with new features and design. Code refactoring is also welcomed. If you are willing and interested, feel free to help develop it for yourself and others.

### Report issues and help improve

If you feel a feature is missing, or you have encounter a bug, report it in the issues section. Even if you feel question/flow are leading to wrong interpretation, feel free to open a issue.
Please read the [contribution guidelines](CONTRIBUTING.md) to get started.

### Spread the words

Star this project, use it, or share it with your friends. It will really help us to gain motivation and zeal towards working on it.

## License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

Refer `LICENSE` file in this repository.
