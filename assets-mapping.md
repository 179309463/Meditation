# Assets 资源映射表

## 已识别的资源

### 主要插图
| 文件名 | 用途 | 对应页面 |
|--------|------|----------|
| frame.svg | 欢迎页主插图 - 坐在沙发上的冥想女孩 | WelcomePage (/) |
| group-10.png | 冥想人物 - 盘腿坐姿 | OnboardingWelcome |
| group-11.png | 躺在沙发上看书的女孩 | 可能用于其他页面 |
| group-8.png | 蓝色衣服的女孩 (焦虑/压力) | OnboardingPurpose - Reduce Stress |
| group-9.png | 坐在沙发上的女孩 | OnboardingPurpose - Better Sleep |

### Logo 相关
| 文件名 | 用途 |
|--------|------|
| logo.svg | Silent Moon 完整 logo (带月亮图标) |
| logo-1.svg | 白色版本 logo |
| logo-2.svg | 另一版本 logo |

### 图标类
| 文件名 | 用途 |
|--------|------|
| group-5.png | 用户头像图标 (灰色) |
| group-6.png | 播放按钮图标 |
| group-7.png | 很小的图标 |
| group-12.png | 用户头像图标 |
| group-13.png | 音乐/播放列表图标 |
| group-14.png | 用户头像图标 |
| group-17.png | 用户头像图标 |
| group-18.png | 音乐/播放列表图标 |
| group-19.png | 用户头像图标 |

### 背景/装饰
| 文件名 | 用途 |
|--------|------|
| group-16.png | 睡眠页面背景云彩/星星装饰 |
| group-15.png | 浅色背景元素 |

### Frame 系列 (SVG 矢量图)
| 文件名 | 用途 |
|--------|------|
| frame.svg | 欢迎页主插图 |
| frame-1.svg | 背景装饰 |
| frame-2.svg | 背景装饰 |
| frame-3.svg | 背景装饰 |
| frame-4.svg | 背景装饰 |
| frame-5.svg | 背景装饰 |
| frame-6.svg | 背景装饰 |
| frame-7.svg | 背景装饰 |
| frame-8.svg | 背景装饰 |
| frame-14.svg | 背景装饰 |

### Mask-group 系列 (课程/音乐卡片图片)
用于 HomePage, MeditatePage, SleepPage 等页面的卡片图片

### Vector 系列 (图标 SVG)
各种小图标，如箭头、播放、暂停等

## 页面与资源对应

### 1. WelcomePage (/)
- 需要: logo.svg, frame.svg (主插图)
- 当前: 使用内联 SVG 绘制

### 2. LoginPage (/login)
- 需要: 背景图, Facebook/Google 图标
- 当前: 使用 lucide-react 图标

### 3. SignupPage (/signup)
- 需要: 背景图, Facebook/Google 图标
- 当前: 使用 lucide-react 图标

### 4. OnboardingWelcome (/onboarding/welcome)
- 需要: group-10.png (冥想人物), logo.svg
- 当前: 使用内联 SVG

### 5. OnboardingPurpose (/onboarding/purpose)
- 需要: 各种主题卡片图片 (mask-group 系列)
- 当前: 使用 lucide-react 图标

### 6. OnboardingTime (/onboarding/time)
- 需要: 背景装饰
- 当前: 简单样式

### 7. HomePage (/home)
- 需要: logo-1.svg, 课程卡片图片 (mask-group 系列), 底部导航图标
- 当前: 使用 lucide-react 图标

### 8. MeditatePage (/meditate)
- 需要: 冥想卡片图片, 底部导航图标
- 当前: 使用 lucide-react 图标

### 9. SleepPage (/sleep)
- 需要: 睡眠故事卡片图片, 底部导航图标
- 当前: 使用 lucide-react 图标

### 10. SleepWelcomePage (/sleep-welcome)
- 需要: 睡眠欢迎背景图, 月亮/星星装饰
- 当前: 使用内联 SVG

### 11. MusicPlayerPage (/music)
- 需要: 播放控制图标, 背景
- 当前: 使用 lucide-react 图标

### 12. CourseDetailPage (/course-detail)
- 需要: 课程头图, 播放图标
- 当前: 使用 lucide-react 图标
