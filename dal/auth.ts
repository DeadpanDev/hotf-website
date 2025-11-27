"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export async function signUpAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm-password") as string;

  if (!name || !email || !password || !confirmPassword) {
    throw new Error("All fields are required");
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof confirmPassword !== "string"
  ) {
    throw new Error("Invalid form data");
  }

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
      role: "user",
    },
  });

  redirect("/");
}

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  redirect("/");
}

export async function logoutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/");
}
