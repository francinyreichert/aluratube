import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";
function useForm({ initialValues }) {
  const [form, setForm] = useState(initialValues);
  return {
    form,
    handleChange: (event) =>
      setForm({ ...form, [event.target.name]: event.target.value }),
    clearForm: () => setForm({ title: "", url: "" }),
  };
}

const PROJECT_URL = "https://ujurxqrqdqupahmctycq.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqdXJ4cXJxZHF1cGFobWN0eWNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NjMwNjgsImV4cCI6MTk4NDAzOTA2OH0.IfcJH2NrIxM6V6ofMIR162AH499qSSUwd7FE4WlUiTo";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
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
      <button className="add-video" onClick={() => setShowForm(true)}>
        +
      </button>
      {showForm && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setShowForm(false);
            clearForm();
            supabase.from("video").insert({
              title: form.title,
              url: form.url,
              thumb: getThumbnail(form.url),
              playlist: "games",
            }).then(() => {

            }).catch((error) => {
              
            });
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setShowForm(false)}
            >
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
