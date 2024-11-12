'use client';

import * as React from "react";
import { IconSvgProps } from "@/types";

// SVG图标组件工厂函数
// 接收一个SVG组件作为参数，返回一个新的React组件，统一处理图标的尺寸和属性
const createSvgIcon = (SvgComponent: any): React.FC<IconSvgProps> => {
  return ({ size = 24, width, height, ...props }) => (
    <div style={{ width: size || width, height: size || height }}>
      <SvgComponent
        width={size || width}
        height={size || height}
        {...props}
      />
    </div>
  );
};

// 社交媒体图标导入
import HuggingFaceSvg from '@/public/logo/huggingface.svg';  // HuggingFace平台图标
import DiscordIconSvg from '@/public/logo/discord.svg';      // Discord社区图标
import TwitterIconSvg from '@/public/logo/twitter.svg';      // Twitter社交图标
import GithubIconSvg from '@/public/logo/github.svg';        // Github仓库图标

// 主题和功能图标导入
import LogoSvg from '@/public/logo/nextui.svg';              // NextUI框架logo
import MoonFilledSvg from '@/public/logo/moon.svg';          // 夜间模式图标
import SunFilledSvg from '@/public/logo/sun.svg';           // 日间模式图标
import HeartFilledSvg from '@/public/logo/heart.svg';        // 喜欢/收藏图标
import SearchSvg from '@/public/logo/search.svg';            // 搜索功能图标

// 使用工厂函数批量创建并导出图标组件
export const [
  HuggingFaceIcon,   // HuggingFace平台图标组件
  DiscordIcon,       // Discord社区图标组件
  TwitterIcon,       // Twitter社交图标组件
  GithubIcon,        // Github仓库图标组件
  Logo,              // NextUI框架logo组件
  MoonFilledIcon,    // 夜间模式切换图标组件
  SunFilledIcon,     // 日间模式切换图标组件
  HeartFilledIcon,   // 喜欢/收藏功能图标组件
  SearchIcon,        // 搜索功能图标组件
] = [
  HuggingFaceSvg,
  DiscordIconSvg,
  TwitterIconSvg,
  GithubIconSvg,
  LogoSvg,
  MoonFilledSvg,
  SunFilledSvg,
  HeartFilledSvg,
  SearchSvg,
].map(createSvgIcon);  // 使用map批量转换SVG为React组件
