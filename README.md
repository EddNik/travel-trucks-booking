# 🚐 TravelTrucks Booking

**TravelTrucks** — is a web application for a camper rental company. The app allows users to browse a catalog of available vehicles, filter them by various criteria, add them to "Favorites," and book campers for trips.

## 📋 Project Description

The goal of the project is to provide a convenient interface for searching and renting campers. The application consists of a homepage, a catalog with filtering, and a detailed page for each camper with reviews and a booking form.

The project was developed as a test assignment with a focus on using modern frontend technologies, optimization, and user convenience.

## 🛠 Tech Stack

The project is implemented using the following technologies and libraries:

- **Core:** [Next.js](https://nextjs.org/) (App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand) (for global state of filters and favorites)
- **Data Fetching:** [Axios](https://axios-http.com/) / TanStack Query (for API interaction)
- **Styling:** CSS Modules (vanilla CSS with local scope)
- **Forms:** Formik + Yup (for booking form validation)
- **UI Components:** `react-datepicker`, `react-hot-toast` (for notifications)

## 🌟 Main Features

### 1. 🏠 Homepage

- Banner with a call to action.
- "View Now" button for quick navigation to the catalog.

### 2. 🚐 Catalog

- **Card Display:** List of available campers with photos, price, and short description.
- **Filtering:**
  - By location.
  - By vehicle type (Van, Fully Integrated, Alcove).
  - By equipment (AC, Kitchen, TV, Shower, etc.).
- **Pagination:** "Load More" button to fetch additional cards.
- **Favorites:** Ability to add campers to a favorites list (persisted after page reload).

### 3. 📄 Camper Detail Page

- **Gallery:** Camper photos.
- **Information:** Detailed description, technical specifications (engine, transmission, dimensions).
- **Tabs:**
  - _Features:_ Characteristics and amenities.
  - _Reviews:_ User reviews with star ratings.
- **Booking:** Form to submit a booking request with field validation and a success notification.

## 🚀 Installation & Setup

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/YOUR_USERNAME/travel-trucks-booking.git](https://github.com/EddNik/travel-trucks-booking.git)
   cd travel-trucks-booking
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed.

   ```bash
   npm install
   ```

3. **Run in development mode:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Go to [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

- `/src/app` — pages and routing (App Router).
- `/src/components` — reusable UI components.
- `/src/lib` — helper functions, API configuration, and Zustand stores.
- `/public` — static files (images, icons).

## 👤 Author

Project completed as part of a technical assignment.  
**Developer:** Eduard Vyskrebtsov / EddNik

---

_Note: Data filtering is performed on the backend (MockAPI). All forms and requests simulate real application behavior._
