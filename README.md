# Fruts Website

## Introduction

The Fruts website is an place to explore everything related to fruit! Created for a university assignment learning about Chart.js and React, this interactive platform will provide detailed information on 9 different fruits, including comparing nutritional info and viewing price trends.

## Installation and Setup

To get started with the Fruts website locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and install the dependencies using npm:

```bash
npm install
```

## Structure Overview

The project is structured as follows:

- `src/`: Contains the source code, including React components, utility functions, and styles.
  - `api/`: Integration with external data sources for nutritional and agricultural information.
  - `assets/`: Static assets, including design materials, logos, and fruit images.
  - `components/`: Reusable React components, such as navigation bars and footers.
  - `pages/`: The main sections of the website, including the landing, comparison and timeline page.
  - `utils/`: Utility functions for data manipulation and UI behavior.
- `public/`: Contains the `index.html` file and other assets directly served to the browser.

## Running the Project

To run the project on your local development server:

```bash
npm start
```

Navigate to `http://localhost:3000` to view the site in your browser.

## API Integration

This project integrates with 2 x APIs:

- **Edamam API** for nutritional facts
- **EU Agriculture Data API** for price trends.

### By Wolf Botha, 21100255 (DV200 Term 1)

Thanks for stopping by!
