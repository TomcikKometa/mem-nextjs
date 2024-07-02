import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { Providers } from "./store/providers";
import { store } from "./store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers store={store}>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
