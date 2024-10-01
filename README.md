# Vehicle Models Filter App

This application allows users to filter and view vehicle models based on the selected make and year. It provides a simple user interface for selecting a vehicle's make and year and retrieves corresponding models from an external API.

## Features

- **Make and Year Selection**: Users can select a vehicle's make and model year from dropdown lists.
- **Model Retrieval**: Upon selecting the make and year, the app fetches the corresponding vehicle models from an external API.
- **Result Display**: Displays the models for the selected make and year.
- **Responsive Design**: The app adjusts its layout and styles based on the screen size, providing a user-friendly experience on both mobile and desktop devices.

## Project Structure

The app is built using **Next.js** with **React** functional components. It uses **TailwindCSS** for styling and **Axios** for API calls.

### Key Components

- **`VehicleForm.jsx`**: The main form for selecting the vehicle make and year.
- **`SelectInput.jsx`**: A reusable dropdown component used for both make and year selections.
- **`result/[makeId]/[year]/page.jsx`**: Displays the models based on the selected make and year, retrieved from an API.
- **`api/api.js`**: A utility file for making API requests to fetch vehicle makes and models.
- **`page.jsx`**: The main entry point for the home page, responsible for loading vehicle makes and rendering the `VehicleForm` component.

## Environment Variables

The application requires an environment variable to define the base URL for API requests.

I didn't delete my `.env.local` file, so you can open it and see what API I was using.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js (v14 or higher)**
- **npm or Yarn**

## API Overview

The base URL for these API requests is defined in the `.env.local` file using the `NEXT_PUBLIC_BASE_API_URL` variable.

The application interacts with the following endpoints of the vehicle data API:

### 1. `fetchMakes()`

**Description**: Retrieves a list of vehicle makes available in the system.

**Endpoint**: 
```bash
GET /GetMakesForVehicleType/car?format=json
```

**Returns**: An array of objects where each object contains:

- **`MakeId`**: The unique identifier for the vehicle make.
- **`MakeName`**: The name of the vehicle make.

### 2. `fetchModelsForMakeAndYear(makeId, year)`

**Description**: Fetches a list of vehicle models for a given make and year.

**Endpoint**: 
```bash
GET GET /GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json
```

**Parameters**:

- **`makeId`**: (string or number): The ID of the vehicle make.
- **`year`**: (string or number): The manufacturing year of the vehicle models.

**Returns**: An array of objects where each object contains:

- **`Model_ID`**: The unique identifier for the vehicle model.
- **`Model_Name`**: The name of the vehicle model.

## Installation

### 1. Clone the repository:

```bash
git clone <repository-url>
```

Replace <repository-url> with the actual repository URL.

### 2. Navigate to the project directory:

```bash
cd vehicle-models-filter
```

### 3. Install the dependencies:

Run the following command to install all required Node.js packages:

```bash
npm install
```

Or if you are using Yarn:

```bash
yarn install
```
### 4. Run the application:

After setting up the environment variables, run the app in development mode:

```bash
npm run dev
```
Or for Yarn users:

```bash
yarn dev
```

The app will be available at http://localhost:3000.

---

## Postscript

> **Note:** This section contains additional information and notes regarding the project.

- **Eventually:** I would have liked to use `TypeScript` in this project, but since the time to develop it was limited and it wasn't a requirement in the terms of reference, I did without it. I also would have liked to add some kind of application state manager like `Redux` or `Redux Toolkit`, but I didn't for the same reasons as `TypeScript`.
- **Contact Information:** For any questions or feedback, please reach out to [bohdantykhonov@gmail.com](mailto:bohdantykhonov@gmail.com).

Thank you for reviewing the project!
