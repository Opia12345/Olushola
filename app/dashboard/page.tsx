import { AdminDashboard } from "@/components/dashboard/admin-dashboard";
import { ClientDashboard } from "@/components/dashboard/client-dashboard";
import { getCurrentProfile } from "@/lib/supabase/profile";

export default async function DashboardPage() {
  const profile = await getCurrentProfile();

  if (profile?.role === "admin") {
    return <AdminDashboard fullName={profile.full_name} />;
  }

  return <ClientDashboard fullName={profile?.full_name ?? "there"} />;
}
