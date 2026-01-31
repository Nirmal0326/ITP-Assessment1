# SinglishToSinhalaTranslator – Playwright Test Automation

This repository contains **end-to-end UI automation tests** developed using **Playwright** to verify the **Singlish to Sinhala translation** feature of the **SwiftTranslator** web application.

**Target Website:** https://www.swifttranslator.com/

The automation suite covers both **valid and invalid input scenarios** to ensure the translation functionality works as expected under different conditions.

---

## Project Details

- **Automation Tool:** Playwright  
- **Programming Language:** JavaScript  
- **Testing Type:** End-to-End UI Testing  
- **Application Under Test:** SwiftTranslator (Singlish → Sinhala)

---

## Repository Structure
├── tests/ # Test scripts
├── playwright.config.js # Playwright configuration file
├── package.json # Dependencies and scripts
├── .gitignore # Ignored files
└── README.md # Project documentation


---

## Prerequisites

Ensure the following software is installed on your system:

- Node.js (version 16 or higher)
- npm (included with Node.js)
- Git

### Verify Installation

```bash
node -v
npm -v
git --version
Project Setup
Step 1: Clone the Repository
git clone https://github.com/Nirmal0326/ITP-Assessment1

Step 2: Open the Project Folder
cd SinglishToSinhalaTranslator

Step 3: Install Required Dependencies
npm install

Step 4: Install Playwright Browsers
npx playwright install

Executing the Tests

Run all Playwright test cases using the following command:

npx playwright test

Viewing Test Results

After test execution, open the HTML test report using:

npx playwright show-report


The report will open automatically in your default web browser.

Test Coverage Overview

The automation suite includes:

Positive Test Scenarios

Valid Singlish sentences

Expected Sinhala translations

Negative Test Scenarios

Empty input fields

Invalid or unsupported text

Unexpected input formats

These scenarios help validate the reliability and stability of the translation feature.

Additional Information

This project is created for academic and learning purposes

Tests focus on frontend UI behavior

Test results may vary based on website availability

Author

Nirmal Samarasinghe

Academic Automation Testing Project
Playwright | JavaScript | UI Automation

