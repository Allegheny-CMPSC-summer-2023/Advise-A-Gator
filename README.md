<p align="center">
  <a href="https://www.cs.allegheny.edu">
    <img alt="Allegheny" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Seal_of_Allegheny_College.svg/1200px-Seal_of_Allegheny_College.svg.png" width="169" />
  </a>
</p>
<h1 align="center">
Advise-A-Gator 🐊
</h1>


## Overview

Advise-A-Gator is a visual roadmap and dashboard for Allegheny College's four major and minor programs. The project aims to provide a more user-friendly and interactive way for students to navigate their academic journey, as opposed to traditional bulletins. Each course is visualized as a card or a component in the roadmap, with detailed information available upon clicking.

## Features 🌟

- **Visual Roadmap**: A graphical representation of the academic journey for Computer Science, Data Science, Informatics, and Software Engineering majors.
- **Interactive Dashboard**: Courses are displayed as cards, offering a concise view of the curriculum.
- **Single Source of Truth**: All course data is stored in a centralized `current_data.json` file, ensuring consistency and ease of updates.
- **Modular Components**: The project is structured with reusable components, making it scalable and maintainable.

## Directory Structure 📂

- **components**: Contains reusable UI components like cards, navigation bar, and various roadmap elements.
- **curriculumData**: Houses the JSON data for the courses and the configuration schema.
- **pages**: Includes the main pages of the application like the dashboard for each major and the home page.
- **styles**: Centralized styles for the application.

## How to Use 🚀

1. Navigate to the desired major/minor from the navigation bar.
2. View the roadmap to get an overview of the academic journey.
3. Access the dashboard to see the courses displayed as interactive cards.
4. Click on a course in the roadmap or a card to get detailed information about it.

## License 📜

...

## Using pre-commit 🚀

In order to run pre-commit on your local computer, please follow the steps below.

### 1. Install pre-commit

```
pip install pre-commit
```

### 2. Install the git hooks in your repository's root

```
pre-commit install
```
