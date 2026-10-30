# Student Directory Viewer

## Project Description

Student Directory Viewer is a simple mobile application
developed using React Native and Expo.

It allows an adviser to view, search, and flag students
who need academic advising.

## Features

- Display student photos, names, and year levels.
- Search students by name.
- Scroll through the student directory.
- Flag and unflag students for advising.
- Display a message when no students match the search.

## Component Structure

### StudentCard

StudentCard is a reusable component that displays
a student's photo, name, year level, and flag button.

### StudentDirectory

StudentDirectory is the parent screen. It manages
the student list, search query, and flagged states.

## React Native Core Components

- View: Organizes the screen layout.
- Text: Displays text information.
- Image: Displays student photos.
- ScrollView: Makes the student list scrollable.
- TextInput: Allows users to search for students.
- Pressable: Handles the flag button interaction.

## Technologies

- React Native
- Expo
- TypeScript
- Visual Studio Code

## How to Run

1. Install Node.js.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Install dependencies using npm install.
5. Start the Expo development server.

```bash
npm install
npx expo start
```
