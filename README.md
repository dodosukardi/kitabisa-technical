This is a Kitabisa Technical Test project built with [Next.js](https://nextjs.org/)

## Table of Contents

- [Setup](#setup)
- [Folder Structure](#folder-structure)
- [Testing](#testing)
- [Scripts](#scripts)
- [Author](#author)

## Setup

1. Install Depedencies
```bash
npm install
```

2. Run development server
```bash
npm run dev
```
3. Open project in your browser:

Navigate to http://localhost:3000 in your web browser.

<br />

## Folder Structure
```
.
├── src/
│   ├── app/            # Main app contain layout and styling
│   ├── pages/          # Directory for routings
│   |     └── api/      # Directory for fetching external API
│   ├── components/     # Directory for reusable component
│   └── utils/          # Directory for helper functions
├── package.json        # Node.js package file
├── babel.config.js     # Babel config file
├── jest.config.js      # Jest config file
├── next.config.js      # Next config file
├── tailwind.config.ts  # TailwindCSS config file
├── postcss.config.js   # PostCSS config file
├── .eslintrc.json      # Eslint config file
├── .gitignore          # Gitignore file
└── README.md           # Project README file
```

<br />

## Testing
This project uses Jest for testing. You can run tests using the following command:
```bash
npm run test
```
Tests are located in some directories and follow the naming convention *.test.ts.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the production application.
- `npm run start`: Start the production server.
- `npm run test`: Run tests using Jest.
- `npm run lint`: Run linting checks.

## Author
Dodo Sukardi (Frontend Developer)

Contact: dodosukardi@gmail.com