// One-off/dev utility: creates pre-confirmed seed users with a role in
// user_metadata (admin | client). Requires SUPABASE_SERVICE_ROLE_KEY in
// .env.local. Run with: node --env-file=.env.local scripts/seed-users.mjs
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } },
);

const users = [
  {
    email: "olusola.0d2d46a4@olushola-portal.test",
    password: "7fy7zQ44MrBMQo",
    user_metadata: {
      full_name: "Olusola Ogunyemi",
      role: "admin",
      phone: "+2348069563676",
    },
  },
  {
    email: "client.497a77b3@olushola-portal.test",
    password: "MHQUMeZBrAuL4D",
    user_metadata: {
      full_name: "Adaeze Whitfield",
      role: "client",
      phone: "+2348021234567",
    },
  },
];

// Note: the real admin login (preciousopia7@gmail.com) isn't listed here —
// it's an account that already existed in this Supabase project from a
// different app, and was granted role: "admin" via a one-off metadata
// merge rather than created by this script.

for (const u of users) {
  const { data, error } = await supabase.auth.admin.createUser({
    email: u.email,
    password: u.password,
    email_confirm: true,
    user_metadata: u.user_metadata,
  });

  if (error) {
    console.error(`FAILED: ${u.email} ->`, error.message);
    continue;
  }

  console.log(`OK: ${u.email} (role: ${u.user_metadata.role}, id: ${data.user.id})`);
}
