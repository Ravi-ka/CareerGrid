## Database Design

### MongoDB Collections

#### Users Collection

```json
{
  "_id": "ObjectId",
  "userType": "jobSeeker|employer|admin",
  "email": "string",
  "passwordHash": "string",
  "firstName": "string",
  "lastName": "string",
  "phone": "string",
  "location": {
    "country": "string",
    "state": "string",
    "city": "string"
  },
  "profileComplete": "boolean",
  "isVerified": "boolean",
  "createdAt": "date",
  "updatedAt": "date",
  "lastLogin": "date"
}
```

#### JobSeeker Profiles Collection

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId (ref: Users)",
  "headline": "string",
  "summary": "string",
  "currentPosition": "string",
  "education": [
    {
      "institution": "string",
      "degree": "string",
      "field": "string",
      "startDate": "date",
      "endDate": "date",
      "description": "string"
    }
  ],
  "experience": [
    {
      "company": "string",
      "title": "string",
      "location": "string",
      "startDate": "date",
      "endDate": "date",
      "description": "string",
      "isCurrent": "boolean"
    }
  ],
  "skills": ["string"],
  "certifications": [
    {
      "name": "string",
      "issuer": "string",
      "issueDate": "date",
      "expiryDate": "date"
    }
  ],
  "resumeUrl": "string",
  "profilePictureUrl": "string",
  "jobPreferences": {
    "jobTypes": ["fullTime", "partTime", "contract"],
    "locations": ["string"],
    "remotePreference": "onsite|remote|hybrid",
    "expectedSalary": "number",
    "industries": ["string"]
  }
}
```

#### Employer Profiles Collection

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId (ref: Users)",
  "companyName": "string",
  "industry": "string",
  "companySize": "string",
  "foundedYear": "number",
  "description": "string",
  "website": "string",
  "logoUrl": "string",
  "socialMedia": {
    "linkedin": "string",
    "twitter": "string",
    "facebook": "string"
  },
  "locations": [
    {
      "country": "string",
      "state": "string",
      "city": "string",
      "address": "string"
    }
  ],
  "isVerified": "boolean"
}
```

#### Jobs Collection

```json
{
  "_id": "ObjectId",
  "employerId": "ObjectId (ref: Users)",
  "companyId": "ObjectId (ref: Employer Profiles)",
  "title": "string",
  "description": "string",
  "requirements": ["string"],
  "responsibilities": ["string"],
  "location": {
    "country": "string",
    "state": "string",
    "city": "string",
    "remote": "boolean"
  },
  "employmentType": "fullTime|partTime|contract|internship",
  "experienceLevel": "entry|mid|senior|executive",
  "educationLevel": "highSchool|bachelor|master|phd|none",
  "salaryRange": {
    "min": "number",
    "max": "number",
    "currency": "string"
  },
  "skills": ["string"],
  "applicationDeadline": "date",
  "isActive": "boolean",
  "createdAt": "date",
  "updatedAt": "date",
  "applicationsCount": "number",
  "viewCount": "number"
}
```

#### Applications Collection

```json
{
  "_id": "ObjectId",
  "jobId": "ObjectId (ref: Jobs)",
  "jobSeekerId": "ObjectId (ref: Users)",
  "employerId": "ObjectId (ref: Users)",
  "status": "applied|reviewing|shortlisted|rejected|interview|offered|hired",
  "resumeUrl": "string",
  "coverLetter": "string",
  "appliedAt": "date",
  "updatedAt": "date",
  "notes": "string"
}
```

#### Messages Collection

```json
{
  "_id": "ObjectId",
  "conversationId": "ObjectId",
  "senderId": "ObjectId (ref: Users)",
  "receiverId": "ObjectId (ref: Users)",
  "content": "string",
  "attachments": ["string"],
  "readAt": "date",
  "createdAt": "date"
}
```

#### Conversations Collection

```json
{
  "_id": "ObjectId",
  "participants": ["ObjectId (ref: Users)"],
  "lastMessageAt": "date",
  "createdAt": "date"
}
```

### Indexes

- `Users`: email (unique)
- `Jobs`: employerId, location.city, skills, createdAt
- `Applications`: jobId, jobSeekerId, status
- `Messages`: conversationId, senderId, receiverId

## 5. API Endpoints Documentation

### Authentication API

#### POST /api/auth/register

Register a new user (job seeker or employer)

```json
{
  "userType": "jobSeeker|employer",
  "email": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string"
}
```

#### POST /api/auth/login

Login user and get authentication token

```json
{
  "email": "string",
  "password": "string"
}
```

#### POST /api/auth/refresh-token

Refresh authentication token

#### POST /api/auth/forgot-password

Initiate password reset flow

```json
{
  "email": "string"
}
```

#### POST /api/auth/reset-password

Reset password with token

```json
{
  "token": "string",
  "password": "string"
}
```

### User Management API

#### GET /api/users/me

Get current user profile

#### PUT /api/users/me

Update current user profile

```json
{
  "firstName": "string",
  "lastName": "string",
  "phone": "string",
  "location": {
    "country": "string",
    "state": "string",
    "city": "string"
  }
}
```

#### GET /api/users/:id/profile

Get user profile by ID (public view)

#### POST /api/users/upload-profile-picture

Upload profile picture

### Job Seeker API

#### PUT /api/job-seekers/profile

Update job seeker profile

```json
{
  "headline": "string",
  "summary": "string",
  "skills": ["string"],
  "jobPreferences": {
    "jobTypes": ["fullTime", "partTime", "contract"],
    "locations": ["string"],
    "remotePreference": "onsite|remote|hybrid",
    "expectedSalary": "number"
  }
}
```

#### POST /api/job-seekers/education

Add education entry

```json
{
  "institution": "string",
  "degree": "string",
  "field": "string",
  "startDate": "date",
  "endDate": "date",
  "description": "string"
}
```

#### POST /api/job-seekers/experience

Add experience entry

```json
{
  "company": "string",
  "title": "string",
  "location": "string",
  "startDate": "date",
  "endDate": "date",
  "description": "string",
  "isCurrent": "boolean"
}
```

#### POST /api/job-seekers/upload-resume

Upload resume

### Employer API

#### PUT /api/employers/profile

Update employer profile

```json
{
  "companyName": "string",
  "industry": "string",
  "companySize": "string",
  "description": "string",
  "website": "string"
}
```

#### POST /api/employers/upload-logo

Upload company logo

### Jobs API

#### POST /api/jobs

Create new job posting

```json
{
  "title": "string",
  "description": "string",
  "requirements": ["string"],
  "responsibilities": ["string"],
  "location": {
    "country": "string",
    "state": "string",
    "city": "string",
    "remote": "boolean"
  },
  "employmentType": "fullTime|partTime|contract|internship",
  "experienceLevel": "entry|mid|senior|executive",
  "educationLevel": "highSchool|bachelor|master|phd|none",
  "salaryRange": {
    "min": "number",
    "max": "number",
    "currency": "string"
  },
  "skills": ["string"],
  "applicationDeadline": "date"
}
```

#### GET /api/jobs

Search/list jobs with filters

```
Query parameters:
- q: Search query
- location: Location filter
- type: Employment type
- experience: Experience level
- remote: Boolean for remote jobs
- page: Page number
- limit: Results per page
- sort: Sort order (newest, relevance)
```

#### GET /api/jobs/:id

Get job details by ID

#### PUT /api/jobs/:id

Update job posting (employer only)

#### DELETE /api/jobs/:id

Delete job posting (employer only)

### Applications API

#### POST /api/jobs/:jobId/apply

Apply for a job

```json
{
  "coverLetter": "string",
  "resumeUrl": "string"
}
```

#### GET /api/applications

Get all applications (job seeker: submitted applications, employer: received applications)

```
Query parameters:
- status: Filter by status
- jobId: Filter by job ID
- page: Page number
- limit: Results per page
```

#### PUT /api/applications/:id/status

Update application status (employer only)

```json
{
  "status": "reviewing|shortlisted|rejected|interview|offered|hired",
  "notes": "string"
}
```

### Messaging API

#### GET /api/conversations

Get all conversations for current user

#### GET /api/conversations/:id/messages

Get messages in a conversation

```
Query parameters:
- page: Page number
- limit: Results per page
```

#### POST /api/conversations/:id/messages

Send a message

```json
{
  "content": "string",
  "attachments": ["string"]
}
```

#### POST /api/conversations

Start a new conversation

```json
{
  "receiverId": "string",
  "content": "string"
}
```

### Analytics API

#### GET /api/analytics/job/:jobId

Get job posting analytics (employer only)

#### GET /api/analytics/profile

Get profile view analytics
