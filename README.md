
# AfriCuisine-Web-Administrator-Dashboard

Intercultural Food Cuisine Web Dashboard: Explore diverse culinary traditions worldwide with recipe search, cultural info, ingredient database, translation support, and more. Build apps that celebrate intercultural cuisine!

## Enabling HTTPS for Development

This section provides step-by-step instructions on how to enable HTTPS for your development environment in the "AfriCuisine-Web-Administrator-Dashboard" project.

### Prerequisites

Before you start, ensure you have the following:

- [Node.js and npm](https://nodejs.org/) installed.
- [Angular CLI](https://angular.io/cli) installed (`npm install -g @angular/cli`).
- [OpenSSL](https://www.openssl.org/) installed for generating SSL certificates.

### Generating SSL Certificates

If you already have SSL certificates, skip this step. Otherwise, you can generate self-signed certificates for development using OpenSSL.

1. **Navigate to the "certificates" Folder**:

   Open a terminal and navigate to the "certificates" folder within your project's root directory:

   ```bash
   cd certificates

2. **Generate the SSL Certificates**:

  Run the following commands to generate the SSL certificates:
    ```bash
    openssl req -newkey rsa:2048 -new -nodes -keyout localhost.key -out localhost.csr
    openssl x509 -req -days 365 -in localhost.csr -signkey localhost.key -out localhost.crt
3. **Running the Angular Application**:

   If your angular.json file is already configured correctly for HTTPS (with the certificate and key paths), you can now start the development server with HTTPS enabled:

   ```bash
   ng serve --ssl
   ```

   Your Angular application will be accessible at [AfriCuisineDashboard](https://localhost:4200/)
