interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

interface NavGroup {
  id: string;
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    id: "help",
    label: "帮助",
    items: [
      { id: "home", label: "首页", href: "/", icon: "/icon/Home Smile.svg" },
      { id: "design", label: "设计思路", href: "/design" },
      { id: "training-flow", label: "训练流程", href: "/training-flow" },
      { id: "params-intro", label: "参数介绍", href: "/params-intro" },
    ]
  },
  {
    id: "preprocessing",
    label: "预处理",
    items: [
      { id: "upload", label: "图像上传", href: "/upload" },
      { id: "crop", label: "图像裁剪", href: "/crop" },
      { id: "filter", label: "图像筛选", href: "/filter" },
      { id: "labeling", label: "打标", href: "/labeling" },
    ]
  },
  {
    id: "training",
    label: "训练",
    items: [
      { id: "training-settings", label: "训练设置", href: "/training-settings" },
      { id: "training-logs", label: "训练日志", href: "/training-logs" },
      { id: "training-process", label: "训练过程图", href: "/training-process" },
    ]
  },
  {
    id: "inference",
    label: "推理与发布",
    items: [
      { id: "xyz", label: "xyz图标", href: "/xyz" },
      { id: "auto-generate", label: "自动出图", href: "/auto-generate" },
      { id: "publish", label: "发布", href: "/publish" },
    ]
  }
];

export const getAllNavItems = () => {
  return navGroups.reduce<typeof navGroups[0]['items']>((acc, group) => {
    return [...acc, ...group.items];
  }, []);
};

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "EasyTrainer | 傻瓜训练器",
  description: "一个简单的AI训练器",
  navGroups: navGroups,
  navItems: [
    {
      label: "主页",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: getAllNavItems(),
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    huggingface: "https://huggingface.co/shiertier",
    qq: "https://shier.top/qq",
  },
};


