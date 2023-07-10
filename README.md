# Color Shades and Tint Spawner React App (built with Vite)

This is a React app built using Vite that allows users to pick a color using a color picker or by entering a hex code value. The app then generates different shades and tints of that color. It utilizes the `values.js` library to generate the list of colors and the browser's built-in `Clipboard API` to enable users to copy the hex code of the generated colors. Additionally, the React `Toastify` library is used to create toasts for interactive user interface feedback.

## Features

- Color picker: Users can select a color by using a color picker.
- Hex code input: Users can manually enter a hex code to select a color.
- Generated shades and tints: The app generates a list of shades and tints for the selected color.
- Copy to clipboard: Users can copy the hex code of any generated color to their clipboard.
- Toast notifications: The React Toastify library is used to display toasts for interactive UI feedback.

## Installation

To run this React app locally, please follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project's root directory.
3. Install the dependencies by running the following command:

   ```bash
   npm install
   ```

4. Once the installation is complete, start the development server with the following command:

   ```bash
   npm run dev
   ```

5. Open your web browser and visit `http://localhost:5173` to access the Color Generator app.

## Dependencies

This React app built with Vite relies on the following dependencies:

- React: JavaScript library for building user interfaces.
- ReactDOM: Provides DOM-specific methods that can be used with React.
- Values.js: Library for manipulating colors and generating shades and tints.
- React Toastify: Library for displaying toasts to provide interactive UI feedback.

These dependencies are listed in the `package.json` file and will be automatically installed when running `npm install`.

## Usage

Once you have the Color Generator React app running locally, you can start using it by following these steps:

1. Use the color picker to select a color, or manually enter a hex code value in the input field.
2. Press Enter or click the "Generate" button to generate the shades and tints of the selected color.
3. The generated colors will be displayed in a list.
4. To copy the hex code of a generated color, click the "Copy" button next to the desired color. A toast notification will appear to confirm the successful copying of the hex code.
5. You can repeat the above steps to generate shades and tints for different colors.

## Credits

This React app built with Vite was developed by [ProfessorBunny] as a simple demonstration of color manipulation using React, values.js, and React Toastify.
