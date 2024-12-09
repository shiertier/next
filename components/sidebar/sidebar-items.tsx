import {Chip} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {type SidebarItem, SidebarItemType} from "./sidebar";
import TeamAvatar from "./team-avatar";

/**
 * Please check the https://nextui.org/docs/guide/routing to have a seamless router integration
 */

export const sectionItems: SidebarItem[] = [
  {
    key: "overview",
    title: "教程帮助",
    items: [
      {
        key: "home",
        href: "#",
        icon: "solar:home-smile-linear",
        title: "首页",
      },
      {
        key: "projects",
        href: "#ideas",
        icon: "solar:lightbulb-linear",
        title: "设计思路",
      },
      {
        key: "tasks",
        href: "#",
        icon: "solar:routing-linear",
        title: "训练流程",
        // endContent: (
        //   <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
        // ),
      },
      // {
      //   key: "team",
      //   href: "#",
      //   icon: "solar:users-group-two-rounded-outline",
      //   title: "参数介绍",
      // },
      // {
      //   key: "tracker",
      //   href: "#",
      //   icon: "solar:sort-by-time-linear",
      //   title: "Tracker",
      //   // endContent: (
      //   //   <Chip size="sm" variant="flat">
      //   //     New
      //   //   </Chip>
      //   // ),
      // },
    ],
  },
  {
    key: "preprocess",
    title: "预处理",
    items: [
      {
        key: "preprocess_upload",
        href: "#",
        icon: "solar:file-text-linear",
        title: "图像上传",
      },
      {
        key: "preprocess_crop",
        href: "#",
        icon: "solar:file-text-linear",
        title: "图像裁剪",
      },
      {
        key: "preprocess_filter",
        href: "#",
        icon: "solar:file-text-linear",
        title: "图像筛选",
      },
      {
        key: "preprocess_tagger",
        href: "#",
        icon: "solar:file-text-linear",
        title: "图像打标",
      },
    ],
  },
  {
    key: "train",
    title: "配置/训练",
    items: [
      {
        key: "train_train",
        href: "#",
        icon: "solar:file-text-linear",
        title: "训练设置",
      },
      {
        key: "train_train",
        href: "#",
        icon: "solar:file-text-linear",
        title: "训练日志",
      },
      {
        key: "train_train",
        href: "#",
        icon: "solar:file-text-linear",
        title: "训练结果",
      },
    ],
  },
  {
    key: "postprocess",
    title: "验证/发布",
    items: [
      {
        key: "postprocess_upload",
        href: "#",
        icon: "solar:file-text-linear",
        title: "xyz图表",
      },
      {
        key: "postprocess_crop",
        href: "#",
        icon: "solar:file-text-linear",
        title: "批量验证",
      },
      {
        key: "postprocess_upload",
        href: "#",
        icon: "solar:file-text-linear",
        title: "上传",
      },
    ],
  },
];

export const TeamsItens: SidebarItem[] = [
  {
    key: "your-teams",
    title: "Your Teams",
    items: [
      {
        key: "nextui",
        href: "#",
        title: "NextUI",
        startContent: <TeamAvatar name="Next UI" />,
      },
      {
        key: "tailwind-variants",
        href: "#",
        title: "Tailwind Variants",
        startContent: <TeamAvatar name="Tailwind Variants" />,
      },
      {
        key: "nextui-pro",
        href: "#",
        title: "NextUI Pro",
        startContent: <TeamAvatar name="NextUI Pro" />,
      },
    ],
  },
];

export const NoneTeamsItems: SidebarItem[] = [];

export const sectionItemsWithTeams: SidebarItem[] = [
  ...sectionItems,
  ...NoneTeamsItems,
];

export const brandItems: SidebarItem[] = [
  {
    key: "overview",
    title: "Overview",
    items: [
      {
        key: "home",
        href: "#",
        icon: "solar:home-2-linear",
        title: "Home",
      },
      {
        key: "projects",
        href: "#",
        icon: "solar:widget-2-outline",
        title: "Projects",
        endContent: (
          <Icon
            className="text-primary-foreground/60"
            icon="solar:add-circle-line-duotone"
            width={24}
          />
        ),
      },
      {
        key: "tasks",
        href: "#",
        icon: "solar:checklist-minimalistic-outline",
        title: "Tasks",
        endContent: (
          <Icon
            className="text-primary-foreground/60"
            icon="solar:add-circle-line-duotone"
            width={24}
          />
        ),
      },
      {
        key: "team",
        href: "#",
        icon: "solar:users-group-two-rounded-outline",
        title: "Team",
      },
      {
        key: "tracker",
        href: "#",
        icon: "solar:sort-by-time-linear",
        title: "Tracker",
        endContent: (
          <Chip className="bg-primary-foreground font-medium text-primary" size="sm" variant="flat">
            New
          </Chip>
        ),
      },
    ],
  },
  {
    key: "your-teams",
    title: "Your Teams",
    items: [
      {
        key: "nextui",
        href: "#",
        title: "NextUI",
        startContent: (
          <TeamAvatar
            classNames={{
              base: "border-1 border-primary-foreground/20",
              name: "text-primary-foreground/80",
            }}
            name="Next UI"
          />
        ),
      },
      {
        key: "tailwind-variants",
        href: "#",
        title: "Tailwind Variants",
        startContent: (
          <TeamAvatar
            classNames={{
              base: "border-1 border-primary-foreground/20",
              name: "text-primary-foreground/80",
            }}
            name="Tailwind Variants"
          />
        ),
      },
      {
        key: "nextui-pro",
        href: "#",
        title: "NextUI Pro",
        startContent: (
          <TeamAvatar
            classNames={{
              base: "border-1 border-primary-foreground/20",
              name: "text-primary-foreground/80",
            }}
            name="NextUI Pro"
          />
        ),
      },
    ],
  },
];

export const sectionLongList: SidebarItem[] = [
  ...sectionItems,
  {
    key: "payments",
    title: "Payments",
    items: [
      {
        key: "payroll",
        href: "#",
        title: "Payroll",
        icon: "solar:dollar-minimalistic-linear",
      },
      {
        key: "invoices",
        href: "#",
        title: "Invoices",
        icon: "solar:file-text-linear",
      },
      {
        key: "billing",
        href: "#",
        title: "Billing",
        icon: "solar:card-outline",
      },
      {
        key: "payment-methods",
        href: "#",
        title: "Payment Methods",
        icon: "solar:wallet-money-outline",
      },
      {
        key: "payouts",
        href: "#",
        title: "Payouts",
        icon: "solar:card-transfer-outline",
      },
    ],
  },
  {
    key: "your-teams",
    title: "Your Teams",
    items: [
      {
        key: "nextui",
        href: "#",
        title: "NextUI",
        startContent: <TeamAvatar name="Next UI" />,
      },
      {
        key: "tailwind-variants",
        href: "#",
        title: "Tailwind Variants",
        startContent: <TeamAvatar name="Tailwind Variants" />,
      },
      {
        key: "nextui-pro",
        href: "#",
        title: "NextUI Pro",
        startContent: <TeamAvatar name="NextUI Pro" />,
      },
    ],
  },
];

export const sectionNestedItems: SidebarItem[] = [
  {
    key: "home",
    href: "#",
    icon: "solar:home-2-linear",
    title: "Home",
  },
  {
    key: "projects",
    href: "#",
    icon: "solar:widget-2-outline",
    title: "Projects",
    endContent: (
      <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
    ),
  },
  {
    key: "tasks",
    href: "#",
    icon: "solar:checklist-minimalistic-outline",
    title: "Tasks",
    endContent: (
      <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
    ),
  },
  {
    key: "team",
    href: "#",
    icon: "solar:users-group-two-rounded-outline",
    title: "Team",
  },
  {
    key: "tracker",
    href: "#",
    icon: "solar:sort-by-time-linear",
    title: "Tracker",
    endContent: (
      <Chip size="sm" variant="flat">
        New
      </Chip>
    ),
  },
  {
    key: "analytics",
    href: "#",
    icon: "solar:chart-outline",
    title: "Analytics",
  },
  {
    key: "perks",
    href: "#",
    icon: "solar:gift-linear",
    title: "Perks",
    endContent: (
      <Chip size="sm" variant="flat">
        3
      </Chip>
    ),
  },
  {
    key: "cap_table",
    title: "Cap Table",
    icon: "solar:pie-chart-2-outline",
    type: SidebarItemType.Nest,
    items: [
      {
        key: "shareholders",
        icon: "solar:users-group-rounded-linear",
        href: "#",
        title: "Shareholders",
      },
      {
        key: "note_holders",
        icon: "solar:notes-outline",
        href: "#",
        title: "Note Holders",
      },
      {
        key: "transactions_log",
        icon: "solar:clipboard-list-linear",
        href: "#",
        title: "Transactions Log",
      },
    ],
  },
  {
    key: "expenses",
    href: "#",
    icon: "solar:bill-list-outline",
    title: "Expenses",
  },
];
