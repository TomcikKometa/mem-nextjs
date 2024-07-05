import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Providers } from "./store/providers";
import { store } from "./store/store";
import Link from 'next/link'
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers store={store}>
        {/* <BrowserRouter> */}
        <Navbar />
        <main>
          {/* <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="*" element={<ErrorPage />} /> */}
            <main>{children}</main>
          {/* </Routes> */}
        </main>
      {/* </BrowserRouter> */}
          
          
        </Providers>
      </body>
    </html>
  );
}
