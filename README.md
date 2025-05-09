<div align="left">
  <img src="https://img.shields.io/static/v1?message=In-Progress&logo=itch&label=Project%20Status&color=000000&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="itch logo"  />
</div>
<div align="left">
  <img src="https://img.shields.io/static/v1?message=View%20dev%20branch%20for%20the%20updates&logo=itch&label=%20&color=000000&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="itch logo"  />
</div>

# CareerGrid : Monolithic Architecture Structure

## Project Overview

CareerGrid is a job search platform connecting job seekers with employers. The platform allows job seekers to create profiles, search jobs, and apply, while employers can post jobs, search for candidates, and manage applications.

## Technology Stack

- **Backend**: Node.js with Express
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger/OpenAPI
- **Testing**: Jest for unit and integration tests

## Project Structure

```
CareerGrid/
├── server/                  # Node.js backend
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Custom middleware
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── services/            # Business logic
│   ├── utils/               # Utility functions
│   └── app.js               # Main application file
├── tests/                   # Test files
├── .env                     # Environment variables
├── package.json             # Project dependencies
└── README.md                # Project documentation
```
