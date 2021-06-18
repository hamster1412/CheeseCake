import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function SignIn() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(session || loading)) {
      router.push("/signin");
    }
    if ((session, loading)) {
    router.push("/signin");
    }
    console.log("not signed in session: ", session);
  }, [session, loading]);

  return (
    <>
      Have an account already? <br />
      <button
        className="border-2 border-black rounded mt-5"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  );
}
