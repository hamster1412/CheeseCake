import {Provider} from "next-auth/client";
//this above really was an annoying error no one would ever expected
//try remove {} and app crash
import "tailwindcss/tailwind.css";
export default function App({ Component, pageProps }) {
  const { session } = pageProps;
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
}
