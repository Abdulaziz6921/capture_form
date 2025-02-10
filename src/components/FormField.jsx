export function FormField({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  minLength,
  maxLength,
  placeholder,
  rows,
  min,
  className = "",
}) {
  const InputComponent = type === "textarea" ? "textarea" : "input";

  return (
    <div className={`form-section ${className}`}>
      <label className="form-label">{label}</label>
      <InputComponent
        type={type !== "textarea" ? type : undefined}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        rows={rows}
        min={min}
        className="form-input"
      />
    </div>
  );
}
