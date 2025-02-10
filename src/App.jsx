import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { TaskForm } from "./components/TaskForm";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    budget_from: "",
    budget_to: "",
    deadline: "",
    reminds: "",
    rules: "",
  });

  const [token, setToken] = useState(() => {
    return (
      localStorage.getItem("token") || "317ad1fc-e0a9-11ef-a978-0242ac120007"
    );
  });

  const [status, setStatus] = useState("");
  const [successAnimation, setSuccessAnimation] = useState(false);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setSuccessAnimation(false);

    // finding day difference between chosen and today's day
    const today = new Date(),
      chosenDate = new Date(formData.deadline),
      timeDifference = chosenDate - today,
      daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const requestData = {
      token,
      title: formData.title.trim(),
      description: formData.description.trim(),
      tags: formData.tags
        ? formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .join(",")
        : "",
      budget_from: parseInt(formData.budget_from, 10),
      budget_to: parseInt(formData.budget_to, 10),
      deadline: daysDifference,
      reminds: parseInt(formData.reminds, 10),
      all_auto_responses: false,
      rules: JSON.stringify({
        budget_from: parseInt(formData.budget_from, 10),
        budget_to: parseInt(formData.budget_to, 10),
        deadline_days: daysDifference,
        qty_freelancers: Math.floor(Math.random() * 20),
        task_id: Math.floor(Math.random() * 1000),
      }),
    };
    console.log(requestData);

    if (requestData.budget_from > requestData.budget_to) {
      setStatus("error");
      toast.error('Budget "from" cannot be greater than budget "to"');
      return;
    }

    const deadlineDate = new Date(formData.deadline);
    if (deadlineDate < new Date()) {
      setStatus("error");
      toast.error("Deadline cannot be in the past");
      return;
    }

    try {
      const response = await axios.get(
        "https://deadlinetaskbot.productlove.ru/api/v1/tasks/client/newhardtask",
        {
          params: requestData,
        }
      );

      if (response.status === 200) {
        setStatus("success");
        setSuccessAnimation(true);
        toast.success("Task published successfully!");
        setFormData({
          title: "",
          description: "",
          tags: "",
          budget_from: "",
          budget_to: "",
          deadline: "",
          reminds: "",
          rules: "",
        });
        setTimeout(() => setSuccessAnimation(false), 500);
      }
    } catch (error) {
      setStatus("error");
      const errorMsg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "An unexpected error occurred";
      toast.error(errorMsg);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const minDate = new Date().toISOString().slice(0, 16);

  return (
    <div className="min-h-screen gradient-bg py-6 flex flex-col justify-center sm:py-12 ">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            style: {
              background: "#059669",
            },
          },
          error: {
            duration: 4000,
            style: {
              background: "#DC2626",
            },
          },
        }}
      />
      <div className="relative py-3 sm:max-w-2xl sm:mx-auto w-full px-4">
        <div
          className={`relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-2xl rounded-3xl sm:p-10 
          ${successAnimation ? "success-animation" : ""}`}
        >
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Create New Task
                  </h2>
                  <p className="text-gray-600">
                    Fill in the details below to create your task
                  </p>
                </div>

                <TaskForm
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  token={token}
                  setToken={setToken}
                  status={status}
                  minDate={minDate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
