import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

function useForm({ initialValues }) {
  const [form, setForm] = useState(initialValues);
  return {
    form,
    handleChange: (event) =>
      setForm({ ...form, [event.target.name]: event.target.value }),
    clearForm: () => setForm({ title: "", url: "" }),
  };
}

export default function RegisterVideo() {
  const { form, handleChange, clearForm } = useForm({
    initialValues: {
      title: "",
      url: "",
    },
  });
  const [showForm, setShowForm] = useState(false);
  return (
    <StyledRegisterVideo>
      <button
        className="add-video"
        onClick={() => setShowForm(true)}
      >
        +
      </button>
      {showForm && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setShowForm(false);
            clearForm();
          }}
        >
          <div>
            <button type="button" className="close-modal" onClick={() => setShowForm(false)}>
              X
            </button>
            <input
              placeholder="Video title"
              value={form.title}
              name="title"
              onChange={handleChange}
            />
            <input
              placeholder="URL"
              value={form.url}
              name="url"
              onChange={handleChange}
            />
            <button type="submit">Add</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}
