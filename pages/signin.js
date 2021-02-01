import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import {useRouter} from "next/router";

export default function Page() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(session || loading)) {
      router.push("/signin");
    }
  }, [session, loading]);
  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          {" "}
          Signed in as {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </>
  );
}
