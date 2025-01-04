# Lentera Cendekia Web Profile

This README provides an overview of the Lentera Cendekia web profile project, instructions for setup, and how to run the application.

## Table of Contents

-   [About](#about)
-   [Features](#features)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Running the Application](#running-the-application)
-   [Folder Structure](#folder-structure)
-   [Contributing](#contributing)
-   [License](#license)

## About

Lentera Cendekia is a tutoring institution dedicated to fostering student excellence through personalized learning. This web profile is built using [Next.js](https://nextjs.org/) to provide a modern, responsive, and fast-loading online presence for the institution.

## Features

-   **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
-   **Program Highlights**: Showcase of key tutoring programs and services.
-   **About Us Section**: Information about the institution's mission, vision, and values.
-   **Contact Form**: Allow visitors to easily get in touch.
-   **Dynamic Routing**: User-friendly and intuitive navigation.

## Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (version 20 or later is recommended)
-   [bun](https://www.bun.sh/) (I recommend using this) or [pnpm](https://pnpm.io/) as package manager

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/<our-organization>/lc-portal.git
    ```

2. Navigate to the project directory:

    ```bash
    cd lc-portal
    ```

3. Install dependencies:

    ```bash
    bun install
    # or
    pnpm install
    ```

## Running the Application

### Development Mode

To start the development server:

```bash
bun run dev
# or
pnpm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Production Mode

1. Build the application:

    ```bash
    bun run build
    # or
    pnpm run build
    ```

2. Start the production server:

    ```bash
    bun run start
    # or
    pnpm run start
    ```

3. The application will be available at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```plaintext
/lentera-cendekia-web-profile
|-- /app         # All page components (routes)
|-- /components    # Reusable components
|-- /public        # Static assets (e.g., images, fonts)
|-- /utils         # Utility functions/helpers
|-- next.config.js # Next.js configuration
|-- package.json   # Project metadata and scripts
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Commit your changes:

    ```bash
    git commit -m "Add your feature description"
    ```

4. Push to your branch:

    ```bash
    git push origin feature/your-feature-name
    ```

    `NB`: _Please ensure your code is properly formatted and tested and also use conventional commit message._

5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
