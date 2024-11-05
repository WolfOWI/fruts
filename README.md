<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/WolfOWI/fruts?color=6ccbd0)
![GitHub watchers](https://img.shields.io/github/watchers/WolfOWI/fruts?color=000000)
![GitHub language count](https://img.shields.io/github/languages/count/WolfOWI/fruts?color=b0d16d)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/WolfOWI/fruts?color=bf5c5c)
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Wolf Botha</h5>
<h5 align="center" style="padding:0;margin:0;">21100255</h5>
<h6 align="center">Development 200 Term 1 - 2024</h6>
</br>
<p align="center">
<p align="center">
  <a href="https://github.com/WolfOWI/fruts">
    <!-- Light mode logo -->
    <img src="./src/assets/img/logos/gradient_logo.svg" alt="Logo for Light Mode" width="140" height="140">
  </a>
</p>
  
  <h2 align="center">Fruts</h2>

  <p align="center">
    For the love of fruit <br>
      <a href="https://github.com/WolfOWI/fruts"><strong>Explore the docs »</strong></a>
   <br />
   <br />
   <a href="https://youtu.be/RZXkFTipCdk">View Demo</a>
    ·
    <a href="https://github.com/WolfOWI/fruts/issues">Report Bug</a>
    ·
    <a href="https://github.com/WolfOWI/fruts/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
  - [Project Description](#project-description)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [How to install](#how-to-install)
  - [Installation](#installation)
- [Features and Functionality](#features-and-functionality)
  - [Feature 1 : Home Page](#feature-1--home-page)
  - [Feature 2 : Compare Page](#feature-2--compare-page)
  - [Feature 3 : Timeline Page](#feature-3--timeline-page)
- [Concept Process](#concept-process)
  - [Ideation](#ideation)
  - [Wireframes](#wireframes)
- [Development Process](#development-process)
  - [Implementation Process](#implementation-process)
    - [Highlights](#highlights)
    - [Challenges](#challenges)
  - [Future Implementation](#future-implementation)
- [Final Outcome](#final-outcome)
  - [Mockups](#mockups)
  - [Video Demonstration](#video-demonstration)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->

## About the Project

<!-- header image of project -->

![header](./src/screenshots/headerImg.png)

### Project Description

Fruts is an interactive, chart-based website that provides detailed insights into the nutrition & price trends of various fruits. Apart from fun facts and info about each fruit on the home page, the platform offers two additional pages; the first, a comparative view where 2 fruits’ nutritional info are compared with engaging visualisations. Secondly, users can explore the historical pricing of fruits in Europe on the timeline page. The site is a great tool for health enthusiasts, nutritionists, and anyone with a love for fruit.

### Built With

- [React](https://react.dev/)
- [Express JS](https://expressjs.com/)
- [Node JS](https://nodejs.org/en)
- [Chart.js](https://www.chartjs.org/)
- [React Chart.js 2](https://react-chartjs-2.js.org/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/en/main)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/)
- [LDRS](https://www.npmjs.com/package/ldrs)
- [React Animated Cursor](https://www.npmjs.com/package/react-animated-cursor)

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [Node.js](https://nodejs.org/) installed on your machine.

### How to install

### Installation

Here are the steps to clone this repo using GitHub Desktop and set up the project:

1. **Clone the Repository**:

   - Open GitHub Desktop.
   - Click on `File` -> `Clone repository...`.
   - In the `URL` tab, enter `https://github.com/WolfOWI/fruts.git` and choose the local path where you want to save the repository.
   - Click `Clone`.

2. **Install Dependencies**:

   - Open your terminal or command prompt.
   - Navigate to the cloned repository directory.
   - Run the following command to install all required dependencies:
     ```sh
     npm install
     ```

3. **Get Your Free Edamam API ID & Key**:

   - Visit [Edamam](https://developer.edamam.com/) and create a free account.
   - Click on `Accounts`, and go to the `Edamam APIs Dashboard`.
   - Go to the `Applications` tab, and click on the `Create a new application` button.
   - Select the `Food Database API` option, and follow the rest of the steps until you have an ID and API key.

4. **Set Up Environment Variables**:

   - Create a `.env` file in the root of your project directory.
   - Add your ID and API key to the `.env` file using this naming convention:
     ```plaintext
     REACT_APP_EDAMAM_APP_ID=your_app_id
     REACT_APP_EDAMAM_APP_KEY=your_app_key
     ```

5. **Run the Project**:
   - In your terminal, run the following command to start the development server:
     ```sh
     npm start
     ```
   - Open your browser and navigate to `http://localhost:3000` to view the site.

By following these steps, you will have the Fruts project up and running on your local machine with your API keys securely stored in the `.env` file. This ensures that your keys are not publicly displayed or included in your repository.

<!-- FEATURES AND FUNCTIONALITY-->

## Features and Functionality

### Feature 1 : Home Page

The Home Page serves as the welcoming interface of the Fruts website. It provides users with engaging and educational content about various fruits.

![homeScreenshot](./src/screenshots/homeScreenshot.png)

### Feature 2 : Compare Page

The Compare Page allows users to compare the nutritional information of two different fruits for 100g each, including their compositional make-up, their recommended daily vitamin intake percentage and their sugar, water and fibre content.

![compareScreenshot](./src/screenshots/compareScreenshot.png)

### Feature 3 : Timeline Page

The Timeline Page provides an overview of the historical price trends of fruits in Europe over a ten year period.

![timelineScreenshot](./src/screenshots/timelineScreenshot.png)

<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->

## Concept Process

The `conceptual process` for the fruts website involved a comprehensive set of actions, activities, and research to establish a strong brand identity and a visually appealing, user-friendly interface. Key elements included: establishing the brand identity, creating a distinctive logo that represents the essence of fruts, choosing typography that is readable, modern, and aligns with the brand identity, developing a vibrant and colourful colour palette that reflects the freshness and diversity of fruits, selecting high-quality images to complement the content and enhance the visual appeal of the website and selecting icons that are simple and intuitive.

### Ideation

![styleGuide2](./src/screenshots/style_guide_02.png)
<br>
![styleGuide3](./src/screenshots/style_guide_03.png)
<br>
![styleGuide4](./src/screenshots/style_guide_04.png)
<br>
![styleGuide5](./src/screenshots/style_guide_05.png)
<br>
![styleGuide6](./src/screenshots/style_guide_06.png)
<br>
![styleGuide7](./src/screenshots/style_guide_07.png)
<br>
![styleGuide8](./src/screenshots/style_guide_08.png)
<br>
![styleGuide9](./src/screenshots/style_guide_09.png)
<br>
![styleGuide10](./src/screenshots/style_guide_10.png)
<br>
![styleGuide11](./src/screenshots/style_guide_11.png)
<br>
![styleGuide12](./src/screenshots/style_guide_12.png)
<br>
![styleGuide13](./src/screenshots/style_guide_13.png)
<br>

### Wireframes

![styleGuide14](./src/screenshots/style_guide_14.png)
<br>
![styleGuide15](./src/screenshots/style_guide_15.png)
<br>
![styleGuide16](./src/screenshots/style_guide_16.png)
<br>

<!-- DEVELOPMENT PROCESS -->

## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process

- **Frontend Implementation**: Developed the user interface using React and Tailwind CSS to ensure a responsive and visually appealing design. Integrated Chart.js for creating interactive and informative data visualisations.
- **Backend Implementation**: Utilised a custom backend to handle API requests and data processing. Integrated with the Edamam API for nutritional data and the EU Agriculture Data API for historical price data.
- **Routing**: Implemented dynamic routing using React Router to facilitate smooth navigation between the Home, Compare, and Timeline pages.
- **State Management**: Used React's state management capabilities to manage data flow and user interactions efficiently.
- **API Integration**: Employed Axios for making HTTP requests to fetch and post data from the APIs, ensuring seamless data retrieval and submission.

#### Highlights

- **Comprehensive Data Integration**: Successfully integrated multiple APIs to provide users with detailed and accurate nutritional and price data for various fruits.
- **User-Friendly Interface**: Created an engaging, colourful and fun user interface that enhances the user experience and facilitates easy navigation.
- **Interactive Visualizations**: Developed interactive charts and graphs that present complex data in an easily understandable format, increasing user engagement and understanding.

#### Challenges

- **Data Handling**: Managing asynchronous data fetching and ensuring the performance optimisation of the website was challenging. This was addressed by implementing efficient data handling techniques and leveraging React's capabilities.
- **Chart Customization**: Customising Chart.js to meet specific visualisation requirements posed difficulties. Frequent reference to the online documentation was needed.
- **Responsive Design**: Ensuring the website's layout and visualisations were responsive across different devices required careful planning and considerations.

### Future Implementation

- **Expand Dataset**: Add more fruits to the database to provide users with a broader range of options for comparison and analysis.
- **User Authentication**: Implement user authentication to allow personalised data tracking and save user preferences.
- **Advanced Visualisations/Charts**: Introduce more advanced data visualisations to enhance the user experience and provide deeper insights.

<!-- MOCKUPS -->

## Final Outcome

### Mockups

![mockup01](./src/screenshots/mockup01.png)
<br>
![mockup02](./src/screenshots/mockup02.png)
<br>
![mockup03](./src/screenshots/mockup03.png)

<!-- VIDEO DEMONSTRATION -->

### Video Demonstration

To see a run through of the `fruts` website, click below:

[View Demonstration](https://youtu.be/RZXkFTipCdk)

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/WolfOWI/fruts/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- AUTHORS -->

## Authors

- **Wolf Botha** - [WolfOWI](https://github.com/WolfOWI)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->

## Contact

- **Wolf Botha** - [21100255@virtualwindow.co.za](mailto:21100255@virtualwindow.co.za) - [@wolfbotha](https://www.instagram.com/wolfbotha)
- **fruts - React Website** - https://github.com/WolfOWI/fruts

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Material Design Icons](https://fonts.google.com/icons)
- [Envato Elements](https://elements.envato.com/)

<!-- MARK UP: -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/wolfbotha/
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&colorB=555
[instagram-url]: https://www.instagram.com/wolfbotha/
