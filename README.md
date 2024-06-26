# Multi-Step Form with React

This project implements a responsive multi-step form using React.js, featuring three steps for entering personal information, address information, and confirmation. The form includes data validation, error handling, local storage persistence, and a polished user interface.

## Features

    Multi-step Form: Divided into three steps: Personal Information, Address Information, and Confirmation.
    Navigation Controls: Tabbed navigation to switch between steps, with back and next buttons appropriately enabled/disabled.
    Validation: Client-side validation ensures all fields are filled correctly before allowing navigation to the next step.
    Local Storage: Persist entered data to local storage, pre-filling form fields if the user revisits the form.
    Responsive Design: Ensures the form works seamlessly across desktop, tablet, and mobile screens.

## Technologies Used

    React.js
    styled-components for styling
    Bootstrap for additional styling and responsiveness

### Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:

git clone <repository-url>

2. Navigate into the project directory:

cd multi-step-form-react

3. Install dependencies:

npm install

4. Start the development server:

npm start


## Usage

    Fill in the form fields across the three steps.
    Use tabbed navigation or buttons to switch between steps.
    Ensure all required fields are correctly filled before proceeding to the next step.
    Upon submitting the form in the Confirmation step, a modal will appear confirming successful submission.
    Data is persisted to local storage, allowing the form to be revisited and fields pre-filled.

