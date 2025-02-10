import { FormField } from "./FormField";
import { BudgetFields } from "./BudgetFields";
import { SubmitButton } from "./SubmitButton";

export function TaskForm({
  formData,
  handleChange,
  handleSubmit,
  token,
  setToken,
  status,
  minDate,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6 ">
      <FormField
        label="Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />

      <FormField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        minLength={3}
        maxLength={100}
        placeholder="Enter task title"
      />

      <FormField
        label="Description"
        type="textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        minLength={10}
        maxLength={1000}
        rows="4"
        placeholder="Describe your task in detail"
      />

      <FormField
        label="Tags"
        name="tags"
        value={formData.tags}
        onChange={handleChange}
        placeholder="e.g., design, development, urgent"
      />

      <BudgetFields formData={formData} handleChange={handleChange} />

      <FormField
        label="Deadline"
        type="datetime-local"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        required
        min={minDate}
      />

      <FormField
        label="Reminders"
        name="reminds"
        type="number"
        value={formData.reminds}
        onChange={handleChange}
        placeholder="Add any reminders"
        required
        min="0"
      />

      <FormField
        label="Rules"
        type="textarea"
        name="rules"
        value={formData.rules}
        onChange={handleChange}
        rows="4"
        placeholder="Add any specific rules or requirements"
      />

      <SubmitButton status={status} />
    </form>
  );
}
