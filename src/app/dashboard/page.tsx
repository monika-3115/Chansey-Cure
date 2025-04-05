import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";

export default async function Page() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const authenticated = await isAuthenticated();

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

  if (!authenticated || !user || user.email !== ADMIN_EMAIL) {
    return redirect("/api/auth/login");
  }

  return <DashboardClient userEmail={user.email} />;
}
