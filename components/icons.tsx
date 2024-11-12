'use client';

// 图标组件

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
  HuggingFaceIcon,   
  DiscordIcon,       
  TwitterIcon,       
  GithubIcon,        
  Logo,              
  MoonFilledIcon,    
  SunFilledIcon,     
  HeartFilledIcon,   
  SearchIcon,        
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

export const Icon = {
  HuggingFace: HuggingFaceIcon,
  Discord: DiscordIcon,
  Twitter: TwitterIcon,
  Github: GithubIcon,
  Logo: Logo,
  MoonFilled: MoonFilledIcon,
  SunFilled: SunFilledIcon,
  HeartFilled: HeartFilledIcon,
  Search: SearchIcon,
} as const;