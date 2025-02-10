import { FormField } from "./FormField";

export function BudgetFields({ formData, handleChange }) {
  return (
    <div className="form-section grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        label="Budget From"
        type="number"
        name="budget_from"
        value={formData.budget_from}
        onChange={handleChange}
        required
        min="0"
        placeholder="0"
      />
      <FormField
        label="Budget To"
        type="number"
        name="budget_to"
        value={formData.budget_to}
        onChange={handleChange}
        required
        min="0"
        placeholder="1000"
      />
    </div>
  );
}
