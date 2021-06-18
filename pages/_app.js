import { Provider } from "next-auth/client";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  const { session } = pageProps;
  return (
    <div>
        <title>Job Search</title>
        <link rel="icon" href="/favicon.ico" />
      <Provider session={session}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
