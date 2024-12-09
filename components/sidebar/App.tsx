"use client";

import React from "react";
import {Avatar, Button, ScrollShadow, Spacer, Tooltip} from "@nextui-org/react";
// import {Icon} from "@iconify/react";
import {useMediaQuery} from "usehooks-ts";
import {cn} from "@nextui-org/react";

import {Logo} from "@/components/icons";
import {sectionItemsWithTeams} from "./sidebar-items";

import Sidebar from "./sidebar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import * as Icon from "@/components/icons";

/**
 *  This example requires installing the `usehooks-ts` package:
 * `npm install usehooks-ts`
 *
 * import {useMediaQuery} from "usehooks-ts";
 *
 * 💡 TIP: You can use the usePathname hook from Next.js App Router to get the current pathname
 * and use it as the active key for the Sidebar component.
 *
 * ```tsx
 * import {usePathname} from "next/navigation";
 *
 * const pathname = usePathname();
 * const currentPath = pathname.split("/")?.[1]
 *
 * <Sidebar defaultSelectedKey="home" selectedKeys={[currentPath]} />
 * ```
 */
export default function Component({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isCompact = isCollapsed || isMobile;

  const onToggle = React.useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <div className="flex h-dvh max-w-screen-2xl mx-auto">
      {/* 侧边栏 */}
      <div
        className={cn(
          "relative flex h-full w-72 flex-col !border-r-small border-divider p-6 transition-width",
          {
            "w-16 items-center px-2 py-6": isCompact,
          },
        )}
      >
        {/* 侧边栏头部 */}
        <div
          className={cn(
            "flex items-center gap-3 px-3",

            {
              "justify-center gap-0": isCompact,
            },
          )}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
            <Logo className="text-background" />
          </div>
          <span
            className={cn("text-small font-bold uppercase opacity-100", {
              "w-0 opacity-0": isCompact,
            })}
          >
            Easy Trainer
          </span>
        </div>
        <Spacer y={4} />
        {/* 侧边栏用户信息 */}
        <div className="flex items-center justify-between px-3">
          <div className="flex items-center gap-3">
            <Avatar
              isBordered
              className="flex-none"
              size="sm"
              src="/shiertier.jpg"
            />
            <div className={cn("flex max-w-full flex-col", {hidden: isCompact})}>
              <p className="truncate text-small font-medium text-default-600">shiertier</p>
              <p className="truncate text-tiny text-default-400">Coder | Designer</p>
            </div>
          </div>
          <ThemeSwitch />
        </div>
        {/* 添加距离 */}
        <Spacer y={2} />
        {/* 将社交图标移动到这里 */}
        {/* 容器居中 */}
        {/* <div className={cn("flex gap-4 px-3", {
            "justify-center": true,
            "flex-nowrap": true, // 强制不换行
          })}>
            <Link isExternal aria-label="QQ" href={siteConfig.links.qq}>
              <Icon.QQIcon size={20} className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
              <Icon.DiscordIcon size={22} className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <Icon.GithubIcon size={20} className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Huggingface" href={siteConfig.links.huggingface}>
              <Icon.HuggingFaceIcon size={18} className="text-default-500" />
            </Link>
          </div> */}
        {/* 侧边栏内容 */}
        <ScrollShadow className="-mr-1 h-full max-h-full py-3 pr-6 maxWidth"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none"
        }}>
          <Sidebar defaultSelectedKey="home" isCompact={isCompact} items={sectionItemsWithTeams} />
          <Spacer y={8} />
        </ScrollShadow>
        <Spacer y={2} />
        {/* 侧边栏底部只保留主题切换 */}
        {/* <div
          className={cn("mt-auto flex justify-center", {
            "items-center": isCompact,
          })}
        >
          <ThemeSwitch />
        </div> */}
      </div>
      {/* 主要内容区域 */}
      <div className="w-full flex-1 flex-col p-4">
        {/* 主要内容区域头部 */}
        {/* <header className="flex items-center gap-3 rounded-medium border-small border-divider p-4">
          <Button isIconOnly size="sm" variant="light" onPress={onToggle}>
            <Icon
              className="text-default-500"
              height={24}
              icon="solar:sidebar-minimalistic-outline"
              width={24}
            />
          </Button>
          <h2 className="text-medium font-medium text-default-700">Overview</h2>
        </header> */}
        {/* 主要内容区域内容 */}
        {/* <main className="mt-4 h-full w-full overflow-visible">
          <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium border-small border-divider">
            {children}
          </div>
        </main> */}
        <main className="mt-4 h-full w-full overflow-visible">
          <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
