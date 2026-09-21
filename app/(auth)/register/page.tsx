import { siteConfig } from "@/lib/site-config";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  redirect(siteConfig.whatsappUrl);
}
