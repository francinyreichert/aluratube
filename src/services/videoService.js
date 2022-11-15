import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://ujurxqrqdqupahmctycq.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqdXJ4cXJxZHF1cGFobWN0eWNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NjMwNjgsImV4cCI6MTk4NDAzOTA2OH0.IfcJH2NrIxM6V6ofMIR162AH499qSSUwd7FE4WlUiTo";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
