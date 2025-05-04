"use client";
import { Button } from "@nextui-org/react";
import { ExitToApp } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function LogOutButton() {
  const router = useRouter();

  async function handleLogOut(event) {
    event.preventDefault();

    const response = await fetch("/api/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleLogOut}>
      <Button isIconOnly color="danger" type="submit" size="sm">
        <ExitToApp />
      </Button>
    </form>
  );
}
