import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function SignOut() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session || loading) {
      router.push("/signout");
    }
    console.log(loading, "signed in session: ", session);
  }, [session, loading]);
  return (
    <>
      Signed in as  <br />
      <button
        className="border-2 border-black"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </>
  );
}
