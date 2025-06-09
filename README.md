# TravelTrucks Frontend

## Project Overview

The **TravelTrucks** frontend is a web application for a camper rental company,
built to provide a seamless user experience for browsing, filtering, and booking
campers. The application integrates with a backend API to fetch camper data and
includes features like filtering, favorites, and booking functionalities.

## Tech Stack

- **Framework**: React (using Vite as the bundler)
- **State Management**: Redux (with Redux Toolkit and Redux Persist for
  persistent storage)
- **Routing**: React Router
- **HTTP Requests**: Axios
- **Styling**: CSS Modules
- **Backend API**: MockAPI
  (`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`)

## Features

### Pages and Navigation

- **Home Page (`/`)**: Features a banner with a prominent call-to-action ("View
  Now") to navigate to the catalog.
- **Catalog Page (`/catalog`)**: Displays a list of available campers with
  filtering options and the ability to add campers to favorites. Includes a
  "Load More" button for pagination.
- **Camper Details Page (`/catalog/:id`)**: Shows detailed camper information, a
  photo gallery, user reviews (with a 5-star rating system), and a booking form.

### Functionalities

- **Filtering**: Filter campers by:
  - Location (text input)
  - Vehicle type (single selection)
  - Features (e.g., AC, kitchen, multiple selections possible)
- **Favorites**: Users can add/remove campers to a persistent favorites list,
  saved across page reloads using Redux Persist.
- **Pagination**: The catalog page supports loading additional campers via a
  "Load More" button, respecting applied filters.
- **Booking**: Users can submit a booking form on the camper details page, with
  a success notification upon completion.

## API Endpoints

- **GET /campers**: Fetch all campers (supports filtering parameters).
- **GET /campers/:id**: Fetch details for a specific camper by ID.

## State Management

- **Redux**: Manages global state for:
  - List of campers
  - Applied filters
  - Favorites list

## Routes

- `/`: Home page with a call-to-action.
- `/catalog`: Catalog page with camper listings and filters.
- `/catalog/:id`: Camper details page with description, reviews, and booking
  form.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Camper Details

- **Characteristics**: Displays properties like transmission, AC, bathroom,
  kitchen, TV, radio, refrigerator, microwave, gas, water (if available).
- **Details**: Includes form, length, width, height, tank, consumption.

## Notes

- Ensure the backend API is accessible for fetching camper data.
- Favorites are stored in localStorage via Redux Persist for persistence across
  sessions.
- The booking form submission triggers a success notification (no actual backend
  booking endpoint is implemented in the provided API).
