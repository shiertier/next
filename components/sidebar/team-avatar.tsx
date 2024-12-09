"use client";

import type {AvatarProps} from "@nextui-org/react";
import React from "react";
import {Avatar} from "@nextui-org/react";
import {cn} from "@nextui-org/react";

// 创建一个 TeamAvatar 组件，继承自 NextUI 的 Avatar 组件
// 使用 React.forwardRef 以支持引用传递
const TeamAvatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({name, className, classNames = {}, ...props}, ref) => (
    <Avatar
      {...props} // 传递所有其他 props
      ref={ref}   // 传递引用
      classNames={{
        ...classNames,
        // 设置基础样式：透明背景和边框
        base: cn("bg-transparent border border-divider", classNames?.base, className),
        // 设置名称样式：默认文本颜色、小字体和加粗
        name: cn("text-default-500 text-[0.6rem] font-semibold", classNames?.name),
      }}
      // 自定义获取头像初始字母的方法
      // 获取名字的第一个字母和最后一个空格后的第一个字母，并转为大写
      getInitials={(name: string) =>
        (name[0] || "") + (name[name.lastIndexOf(" ") + 1] || "").toUpperCase()
      }
      name={name}      // 显示的名称
      radius="md"      // 中等圆角
      size="sm"        // 小尺寸头像
    />
  ),
);

// 设置组件显示名称，用于开发工具中的调试
TeamAvatar.displayName = "TeamAvatar";

export default TeamAvatar;