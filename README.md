# Sauce Demo Automation Testing

## Description
This project aims to automate the testing of the [Sauce Demo](https://www.saucedemo.com/) application using Cypress and JavaScript. The focus is on ensuring the application's quality by implementing comprehensive end-to-end (E2E) tests that cover the main functionalities of the system.

## Tested Features
The following set of scenarios has been automated:

### 1. Authentication
#### 1.1. Scenario: Login with Valid Credentials
- **Given** the user is on the login page
- **When** the user enters a valid username and password (e.g., `standard_user` / `secret_sauce`)
- **Then** the user should be redirected to the inventory page (`/inventory.html`).

#### 1.2. Scenario: Login with Invalid Credentials
- **Given** the user is on the login page
- **When** the user enters an invalid username or password
- **Then** an error message should be displayed (e.g., "Username and password do not match").

#### 1.3. Scenario: Login with Blocked User
- **Given** the user is on the login page
- **When** the user enters the credentials for `locked_out_user` / `secret_sauce`
- **Then** an error message should be displayed (e.g., "Sorry, this user has been locked out").

#### 1.4. Scenario: Logout
- **Given** the user is logged into the application
- **When** the user clicks on the hamburger menu and selects the logout option
- **Then** the user should be redirected to the login page.

### 2. Navigation and Product Display
#### 2.1. Scenario: Viewing Items on the Inventory Page
- **Given** the user is on the inventory page
- **Then** all available items should be displayed correctly (e.g., images, names, descriptions, prices).

#### 2.2. Scenario: Sorting Products
- **Given** the user is on the inventory page
- **When** the user selects the sorting option by "Name (A to Z)" or "Price (low to high)"
- **Then** the products should be displayed in the correct order.

### 3. Shopping Cart
#### 3.1. Scenario: Add Product to Cart
- **Given** the user is on the inventory page
- **When** the user adds a product to the cart
- **Then** the cart icon should be updated to show that the item has been added.

#### 3.2. Scenario: Remove Product from Cart
- **Given** the user has a product in the cart
- **When** the user removes the product from the cart
- **Then** the cart icon should be updated to show that the item has been removed.

#### 3.3. Scenario: View Shopping Cart
- **Given** the user has products in the cart
- **When** the user clicks on the cart icon
- **Then** the list of products and their prices should be displayed correctly.

### 4. Checkout
#### 4.1. Scenario: Successfully Complete Checkout
- **Given** the user has products in the cart
- **When** the user fills in the necessary information for checkout (first name and last name, postal code)
- **Then** the user should be redirected to the order summary page and see a confirmation message.

#### 4.2. Scenario: Checkout with Invalid Information
- **Given** the user is on the checkout page
- **When** the user enters invalid information (e.g., leaving fields empty)
- **Then** an error message should be displayed.

### 5. Responsiveness Testing
#### 5.1. Scenario: Test Interface on Mobile Devices
- **Given** the user accesses the site on a mobile device
- **Then** the layout should be responsive and all elements should be accessible.

## Prerequisites
Make sure to have [Node.js](https://nodejs.org/) installed on your machine.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-project.git
