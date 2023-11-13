import React, { ChangeEventHandler, useState } from "react";

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange: ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
