import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
// import { Navbar } from "@/components/navbar";
import Component from "@/components/sidebar/App";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html suppressHydrationWarning lang="en">
//       <head />
//       <body
//         className={clsx(
//           "min-h-screen bg-background font-sans antialiased",
//           fontSans.variable,
//         )}
//       >
//         <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
//           <div className="relative flex flex-col h-screen">
//             <Navbar />
//             <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
//               {children}
//             </main>
//             <footer className="w-full flex items-center justify-center py-3">
//               <Link
//                 isExternal
//                 className="flex items-center gap-1 text-current"
//                 href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
//                 title="nextui.org homepage"
//               >
//                 <span className="text-default-600">Powered by</span>
//                 <p className="text-primary">NextUI</p>
//               </Link>
//             </footer>
//           </div>
//         </Providers>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // 接收子组件作为参数，类型为 React.ReactNode
}) {
  return (
    // suppressHydrationWarning 用于抑制 React hydration 警告
    // lang="en" 设置页面语言为英文
    <html suppressHydrationWarning lang="en">
      <head /> {/* 页面头部，可以包含元数据等 */}
      <body
        className={clsx(
          // clsx 用于组合多个 className
          "min-h-screen bg-background font-sans antialiased", // 设置最小高度为屏幕高度，背景色，字体和抗锯齿
          fontSans.variable // 应用自定义字体变量
        )}
      >
        {/* Providers 组件用于提供主题配置 */}
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
        {/* <Navbar /> */}
          {/* Component 是导入的侧边栏组件 */}
          <Component>
            {children} {/* 渲染传入的子组件 */}
          </Component>
        </Providers>
      </body>
    </html>
  );
}