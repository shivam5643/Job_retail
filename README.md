# Retail Pulse Backend

## Description
This project is a backend service for processing store visit images. The service handles job submission, downloads images, calculates their perimeter, and stores the results in a MongoDB database. The job's status can be queried via API endpoints.

## Assumptions
- The `store_master.csv` file contains `StoreID`, `StoreName`, and `AreaCode`.
- Images are publicly accessible via the provided URLs.
- The system handles multiple concurrent jobs efficiently.

## Installation & Setup
### Prerequisites
- Node.js
- MongoDB

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/retail-pulse-backend.git
   cd retail-pulse-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables by creating a `.env` file:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/retail_pulse
   ```
4. Ensure `store_master.csv` is placed inside the `src/config/` folder.
5. Start the server in development mode:
   ```sh
   npm run dev
   ```

## Testing Instructions
- Use Postman or cURL to test the API endpoints:
  - **Submit a Job:**
    ```sh
    POST http://localhost:5000/api/submit/
    ```
  - **Get Job Status:**
    ```sh
    GET http://localhost:5000/api/status?jobid=123
    ```


## Work Environment
- **IDE:** VS Code
- **Libraries used:** Node.js, Express.js, Mongoose, Multer, csv-parser

## Future Improvements
- we can add authentication and authorization.
- we can Optimize image processing using worker threads.
- we can deploy the service using Docker and Kubernetes.

---


