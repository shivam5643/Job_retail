# Retail Pulse Backend

## Description
This project is a backend service for processing store visit images. The service handles job submission, downloads images, calculates their perimeter, and stores the results in a MongoDB database. The job's status can be queried via API endpoints.

## Assumptions
- The `store_master.csv` file contains `StoreID`, `StoreName`, and `AreaCode`.
- Images are publicly accessible via the provided URLs.
- The system handles multiple concurrent jobs efficiently.

## Installation & Setup
### Prerequisites
- Node.js (>=20.17.0 recommended)
- MongoDB (running locally or a cloud database)

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
6. Start the server in production mode:
   ```sh
   npm start
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
- Run tests (if applicable):
  ```sh
  npm test
  ```

## Work Environment
- **OS:** Ubuntu 22.04 LTS
- **IDE:** VS Code
- **Libraries:** Node.js, Express.js, Mongoose, Multer, csv-parser

## Future Improvements
- Implement proper error handling and logging.
- Add authentication and authorization.
- Optimize image processing using worker threads.
- Deploy the service using Docker and Kubernetes.

---

This README provides a complete overview of the project. Let me know if any changes are needed! 🚀

