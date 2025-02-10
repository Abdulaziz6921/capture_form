# Lead Capture Form

A simple lead capture form built with React, Vite, and Tailwind CSS. This form collects user input and submits a task request to the specified API endpoint.

## 🚀 Features

- Responsive lead capture form with Tailwind CSS.
- Saves API token after page reload.
- Submits data to the API using Axios.
- Displays success and error messages.
- Generates a random task ID to prevent duplicates.
- Deployed on Vercel for easy access.

## 🛠 Technologies Used

- React
- Vite
- Tailwind CSS
- Axios
- Vercel (for deployment)

## 📦 Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Abdulaziz6921/capture_form.git
   ```

2. Navigate to the project directory:

   ```sh
   cd lead-capture-form
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

## 🚀 Usage

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and visit:
   ```sh
   http://localhost:5173
   ```

## 🔗 API Endpoint

The form submits data to the following API endpoint:

```
POST https://deadlinetaskbot.productlove.ru/api/v1/tasks/client/newhardtask
```

### Request Parameters:

| Parameter            | Type      | Description                                               |
| -------------------- | --------- | --------------------------------------------------------- |
| `token`              | `string`  | API authentication token                                  |
| `title`              | `string`  | Title of the task                                         |
| `description`        | `string`  | Task description                                          |
| `tags`               | `string`  | Comma-separated tags                                      |
| `budget_from`        | `number`  | Minimum budget                                            |
| `budget_to`          | `number`  | Maximum budget                                            |
| `deadline`           | `number`  | Number of days until deadline                             |
| `reminds`            | `number`  | Number of reminders                                       |
| `all_auto_responses` | `boolean` | Enable or disable auto-responses                          |
| `rules`              | `object`  | Additional rules (budget, deadline, freelancers, task ID) |

### Example API Request

```sh
POST https://deadlinetaskbot.productlove.ru/api/v1/tasks/client/newhardtask?token=317ad1fc-e0a9-11ef-a978-0242ac120007&title=dsfasdfadsfsdf&description=dfasdfasdfasdfasdfsd&tags=sdfasdfsdf&budget_from=45353&budget_to=45435453&deadline=16&reminds=5&all_auto_responses=false&rules=%7B%22budget_from%22:45353,%22budget_to%22:45435453,%22deadline_days%22:16,%22qty_freelancers%22:3,%22task_id%22:84%7D
```
