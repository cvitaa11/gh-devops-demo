[![Publish npm package to GitHub Packages](https://github.com/cvitaa11/gh-devops-demo/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/cvitaa11/gh-devops-demo/actions/workflows/publish-npm.yml) [![Test, build and package application](https://github.com/cvitaa11/gh-devops-demo/actions/workflows/build-docker.yml/badge.svg)](https://github.com/cvitaa11/gh-devops-demo/actions/workflows/build-docker.yml)

## gh-devops-demo

This repository demonstrates usage of GitHub as a DevOps platform.

It consists of a small React application that checks if string is palindrome. That funcionality is implemented and stored as a private npm package.

React code is located in [app directory](./app/). Application is packaged as a Docker container and container image is published [here](https://github.com/cvitaa11/gh-devops-demo/pkgs/container/app-demo) on the GitHub Container registry.\
Logic behind our palindrome funcionality is stored in [package directory](./package/) and the npm package is published [here](https://github.com/cvitaa11/gh-devops-demo/pkgs/npm/is-palindrome) on GitHub Packages.

Application is deployed as a Docker container on Azure App Services.
