import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../../theme/themeConfig";
import { GeistSans } from "geist/font/sans";
import { ConfigProvider } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ConfigProvider theme={theme}>
    <main className={GeistSans.className}>
      <Component {...pageProps} />
    </main>
  </ConfigProvider>)
}
