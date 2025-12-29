# Silent Moon Meditation App - 图片资源替换报告

## 概述

本次修改将项目中的图片资源从原有的 lucide-react 图标和占位图替换为 Figma 设计稿中导出的 SVG/PNG 资源，以提升图片质量和视觉效果。

## 设计稿页面分析

根据 Figma 设计稿截图，项目共包含 **14 个页面**：

| 序号 | 页面名称 | 路由路径 | 状态 |
|------|----------|----------|------|
| 1 | Sign up and Sign in | `/` | ✅ 已完成 |
| 2 | Sign in | `/login` | ✅ 已完成 |
| 3 | Sign up | `/signup` | ✅ 已完成 |
| 4 | Welcome | `/onboarding/welcome` | ✅ 已完成 |
| 5 | Choose Topic | `/onboarding/purpose` | ✅ 已完成 |
| 6 | Reminders | `/onboarding/time` | ✅ 已完成 |
| 7 | Home | `/home` | ✅ 已完成 |
| 8 | Course Details | `/course-detail` | ✅ 已完成 |
| 9 | Meditate v2 | `/meditate` | ✅ 已完成 |
| 10 | Music v2 | `/music` | ✅ 已完成 |
| 11 | Welcome Sleep | `/sleep-welcome` | ✅ 已完成 |
| 12 | Sleep | `/sleep` | ✅ 已完成 |
| 13 | Play Option | - | 集成在 Sleep 页面 |
| 14 | Sleep Music / Music | `/music` | ✅ 已完成 |

## 资源文件映射

### 主要插图资源

| 资源文件 | 内容描述 | 使用页面 |
|----------|----------|----------|
| `logo.svg` | Silent Moon Logo (深色) | WelcomePage, HomePage |
| `logo-1.svg` | Silent Moon Logo (白色) | OnboardingWelcome |
| `frame.svg` | 女孩在电脑前工作 | WelcomePage |
| `frame-14.svg` | 睡眠小鸟 (两只戴帽子的鸟) | SleepWelcomePage |
| `group-10.png` | 冥想女孩 (盘腿坐姿) | OnboardingWelcome |

### 主题选择卡片

| 资源文件 | 内容描述 | 使用场景 |
|----------|----------|----------|
| `mask-group-1.png` | 冥想女孩 (紫色背景) | 减轻压力 |
| `mask-group-2.png` | 冥想女孩 (粉色背景) | 提高表现 |
| `mask-group-3.png` | 冥想女孩 (黄色背景) | 增加幸福感 |
| `mask-group-4.png` | 冥想女孩 (绿色背景) | 缓解焦虑 |
| `mask-group-8.png` | 蓝色山景 | 改善睡眠 |
| `mask-group-9.png` | 冥想女孩 (浅色背景) | 个人成长 |

### 首页和课程卡片

| 资源文件 | 内容描述 | 使用场景 |
|----------|----------|----------|
| `mask-group-10.png` | 微笑太阳 | 放松卡片, CourseDetail |
| `mask-group-11.png` | 冥想女孩 (紫色背景) | 基础卡片 |
| `mask-group-5.png` | 绿色田野风景 | Focus 推荐 |
| `mask-group-6.png` | 海滩风景 | Happiness 推荐 |
| `mask-group-7.png` | 秋天风景 | Relax 推荐 |

### 冥想页面卡片

| 资源文件 | 内容描述 | 使用场景 |
|----------|----------|----------|
| `mask-group-12.png` | 冥想女孩 | 释放焦虑 |
| `mask-group-13.png` | 冥想女孩 | 每日平静 |
| `mask-group-14.png` | 冥想女孩 | 专注 |
| `mask-group-15.png` | 冥想女孩 | 专注力 |

### 睡眠页面卡片

| 资源文件 | 内容描述 | 使用场景 |
|----------|----------|----------|
| `mask-group-16.png` | 夜景 (月亮、山脉) | 夜之岛 |
| `mask-group-20.png` | 月亮云彩 | 海洋之月 |
| `mask-group-21.png` | 猫头鹰在月亮上睡觉 | 晚安, 音乐播放器 |
| `mask-group-23.png` | 睡眠云彩和月亮 | 甜蜜睡眠 |
| `mask-group-27.png` | 睡眠云彩和月亮 | 月亮云彩 |

## 修改的文件列表

以下文件已被修改以使用 assets 目录中的资源：

1. `src/pages/WelcomePage.tsx` - 使用 logo.svg 和 frame.svg
2. `src/pages/OnboardingWelcome.tsx` - 使用 logo-1.svg 和 group-10.png
3. `src/pages/OnboardingPurpose.tsx` - 使用 mask-group-1~9.png
4. `src/pages/HomePage.tsx` - 使用 logo.svg 和多个 mask-group 图片
5. `src/pages/MeditatePage.tsx` - 使用 mask-group-5, 11~15.png
6. `src/pages/SleepWelcomePage.tsx` - 使用 frame-14.svg (睡眠小鸟)
7. `src/pages/SleepPage.tsx` - 使用 mask-group-16, 20, 21, 23, 27.png
8. `src/pages/MusicPlayerPage.tsx` - 使用 mask-group-21, 23, 27.png
9. `src/pages/CourseDetailPage.tsx` - 使用 mask-group-10.png

## 技术说明

所有图片资源通过 ES Module 导入方式引入，Vite 会自动处理资源路径：

```typescript
import logoSvg from '../assets/logo.svg';
import maskGroup10 from '../assets/mask-group-10.png';

// 在 JSX 中使用
<img src={logoSvg} alt="Logo" />
```

## 验证结果

所有页面已通过浏览器验证，图片资源正确加载显示：

- WelcomePage: Logo 和主插图正确显示
- OnboardingWelcome: 白色 Logo 和冥想女孩插图正确显示
- OnboardingPurpose: 6 个主题卡片图片正确显示
- HomePage: Logo、课程卡片和推荐卡片图片正确显示
- MeditatePage: 所有课程卡片图片正确显示
- SleepWelcomePage: 睡眠小鸟插图正确显示
- SleepPage: 所有睡眠故事卡片图片正确显示
- MusicPlayerPage: 主插图和相关推荐图片正确显示
- CourseDetailPage: 微笑太阳插图正确显示

## 访问地址

项目运行地址：https://5174-i6goy198gkcflx4fx9qmu-42c270c4.us2.manus.computer
