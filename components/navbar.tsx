import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import * as Icon from "@/components/icons";
import { NavSearchInput } from "@/components/input/search-input";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">   {/* 导航栏组件 */}
      {/* 导航栏内容组件 */}
      <NavbarContent 
        className="basis-1/5 sm:basis-full" 
        justify="start"
      >    
        {/* 导航栏品牌组件 */}
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <Icon.ShiertierLogoRound />
            <p className="font-bold text-inherit">
              <span className="hidden sm:inline">shiertier</span>
              <span className="sm:hidden">傻瓜训练器</span>
            </p>
          </NextLink>
        </NavbarBrand>
        {/* 移除顶部导航，迁移到侧面导航栏 */}
        {/* <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul> */}
      </NavbarContent>

      {/* 添加中间标题 */}
      <NavbarContent 
        className="hidden sm:flex basis-1/5 sm:basis-full absolute left-1/2 transform -translate-x-1/2" 
        justify="center"
      >
        <NavbarItem>
          <p className="font-bold text-inherit text-xl whitespace-nowrap">
            EasyTrainer | 傻瓜训练器
          </p>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* 跳转链接 */}
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <Icon.TwitterIcon className="text-default-500" />
          </Link> */}
          <Link isExternal aria-label="QQ" href={siteConfig.links.qq}>
            <Icon.QQIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <Icon.DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <Icon.GithubIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Huggingface" href={siteConfig.links.huggingface}>
            <Icon.HuggingFaceIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>

        {/* 搜索组件 */}
        {/* <NavbarItem className="hidden lg:flex">
          <NavSearchInput />
        </NavbarItem> */}

        {/* 赞助按钮 */}
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<Icon.HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>

      </NavbarContent>

      {/* 移动端导航栏 */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <Icon.GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <NavSearchInput />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
