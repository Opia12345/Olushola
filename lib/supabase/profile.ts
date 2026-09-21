import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

export type Profile = {
  full_name: string;
  role: "admin" | "client";
  phone: string | null;
};

export const getCurrentProfile = cache(async (): Promise<Profile | null> => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data } = await supabase
    .from("profiles")
    .select("full_name, role, phone")
    .eq("id", user.id)
    .single();

  return data;
});
