# Daily Yoga Practice Website

A simple, responsive website for daily yoga routines and poses. Built with pure HTML, CSS, and JavaScript without any external libraries.

## Features

- Practice timer with countdown functionality
- Categorized yoga routines for different skill levels
- Detailed pose descriptions with:
  - Sanskrit names
  - Step-by-step instructions
  - Difficulty levels
  - Benefits
  - Proper form guidance
- Responsive design that works on all devices
- Filter routines by difficulty level

## Project Structure

```
SampleWebsite/
├── index.html
├── styles.css
├── script.js
├── poses/
│   ├── mountain-pose.html
│   ├── downward-dog.html
│   ├── childs-pose.html
│   ├── warrior-1.html
│   ├── warrior-2.html
│   ├── tree-pose.html
│   ├── crow-pose.html
│   └── headstand.html
└── README.md
```

## Setup

1. Clone this repository:
```bash
git clone https://github.com/EdDiazGRS/EdDiazGRS.github.io
```

2. Open project in your code editor

3. To run locally:
   - Using VS Code: Install "Live Server" extension and right-click `index.html` to "Open with Live Server"
   - Using Python: 
     ```bash
     python -m http.server 8000
     ```
   Then visit `http://localhost:8000`

## Features Breakdown

### Timer
- Input field for practice duration (1-60 minutes)
- Visual countdown display
- Completion alert

### Routines
- Three difficulty levels: Beginner, Intermediate, Advanced
- Detailed routine descriptions
- Time estimates for each routine
- Filterable by difficulty

### Poses
- Individual pages for each pose
- Sanskrit and English names
- Difficulty rating
- Step-by-step instructions
- Benefits of each pose
- Special precautions for advanced poses

## Usage

1. Set your practice duration using the timer
2. Browse routines filtered by your skill level
3. Click on any pose to view detailed instructions
4. Use the navigation to move between sections

## Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## Technical Details

- Built with vanilla HTML, CSS, and JavaScript
- No external dependencies
- CSS Grid and Flexbox for layouts
- Mobile-first design approach

## Future Enhancements

Potential features to add:
- Custom routine builder
- Progress tracking
- Pose image illustrations
- Breathing exercise timer
- Favorite poses bookmarking

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available for anyone to use and modify.

---
Created for educational purposes as part of learning web development.