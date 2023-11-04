# Image Processing API

An API that changes an image's height and width using query parameters.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Scripts](#scripts)

## Introduction

This project provides an API for resizing images based on query parameters. It uses Express and Sharp to handle image processing.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/image-processing.git
   ```

2. Install dependencies:

   ```bash
   cd Image-Processing-API
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start
   ```

## Usage

Make a GET request to the `/api/resize` endpoint with the required query parameters:

`img`: Image name

`width`: New width

`height`: New height

Example:

instead of `myImage` you have to choose one of the images that exist in the `inputs` directory or add your own images

```bash
http://localhost:3000/api/resize?img=myImage&width=100&height=100
```

## Testing

Run tests using the following command:

```bash
npm run test
```

## Scripts

`npm run format`: Format code using Prettier.

`npm run lint`: Run ESLint for linting.

`npm run start`: Start the development server using Nodemon.

`npm run build`: Build the TypeScript project.

`npm run test`: Run tests using Jasmine.

`npm run production`: Build and run the production server.
