# 页面差异分析 - 设计稿 vs 当前实现

## 1. WelcomePage (/) - 对应设计稿: "sign up and Sign in"

### 设计稿元素:
- Silent Moon logo (带月亮图标)
- 主插图: 女孩坐在沙发上冥想，旁边有植物
- 阳光放射线背景
- "We are what we do" 标题
- 注册/登录按钮

### 当前实现问题:
- ❌ Logo 使用内联 SVG 简单月亮图标
- ❌ 主插图使用内联 SVG 绘制，质量差
- ❌ 缺少真实的冥想女孩插图

### 需要替换的资源:
- `logo.svg` → Logo
- `frame.svg` → 主插图 (坐在沙发上的女孩)

---

## 2. LoginPage (/login) - 对应设计稿: "sign in"

### 设计稿元素:
- 返回箭头按钮
- "Welcome Back!" 标题
- Facebook/Google 登录按钮
- 邮箱/密码输入框
- 登录按钮

### 当前实现问题:
- ✅ 布局基本正确
- ❌ Facebook/Google 图标使用 lucide-react

### 需要替换的资源:
- `vector-1.svg` 或相关 → 返回箭头
- Facebook/Google 图标 (如有)

---

## 3. SignupPage (/signup) - 对应设计稿: "sign up"

### 设计稿元素:
- 返回箭头
- "Create your account" 标题
- Facebook/Google 登录按钮
- 姓名/邮箱/密码输入框
- 隐私政策复选框
- 开始按钮

### 当前实现问题:
- ✅ 布局基本正确
- ❌ 图标使用 lucide-react

---

## 4. OnboardingWelcome (/onboarding/welcome) - 对应设计稿: "welcome"

### 设计稿元素:
- Silent Moon logo (白色)
- 紫色背景
- 冥想女孩插图 (盘腿坐姿)
- "Hi Afsar, Welcome to Silent Moon" 标题

### 当前实现问题:
- ❌ 冥想女孩使用内联 SVG 简单绘制
- ❌ 缺少真实的冥想插图

### 需要替换的资源:
- `logo-1.svg` → 白色 Logo
- `group-10.png` → 冥想女孩插图

---

## 5. OnboardingPurpose (/onboarding/purpose) - 对应设计稿: "choose topic"

### 设计稿元素:
- "What Brings you to Silent Moon?" 标题
- 6个主题卡片，每个有独特插图:
  - Reduce Stress (减轻压力)
  - Improve Performance (提高表现)
  - Increase Happiness (增加幸福感)
  - Reduce Anxiety (缓解焦虑)
  - Personal Growth (个人成长)
  - Better Sleep (改善睡眠)

### 当前实现问题:
- ❌ 卡片使用 emoji 代替真实插图
- ❌ 缺少设计稿中的精美插图

### 需要替换的资源:
- `mask-group-1.png` ~ `mask-group-6.png` → 各主题卡片图片

---

## 6. OnboardingTime (/onboarding/time) - 对应设计稿: "Reminders"

### 设计稿元素:
- 时间选择器
- 日期选择器
- 保存/跳过按钮

### 当前实现问题:
- ✅ 功能基本完整
- 可能需要微调样式

---

## 7. HomePage (/home) - 对应设计稿: "home"

### 设计稿元素:
- Silent Moon logo
- "Good Morning, Afsar" 问候
- 两个主卡片 (Basics, Relaxation) 带插图
- Daily Thought 卡片
- Recommended for you 横向滚动列表
- 底部导航栏 (Home, Sleep, Meditate, Music, Afsar)

### 当前实现问题:
- ❌ 卡片插图使用简单圆形/emoji
- ❌ 底部导航使用 lucide-react 图标
- ❌ 缺少设计稿中的精美课程卡片图片

### 需要替换的资源:
- `logo.svg` → Logo
- `mask-group-*.png` → 课程卡片图片
- `frame-*.svg` → 背景装饰
- 底部导航图标 (Home, Sleep, Meditate, Music, User)

---

## 8. CourseDetailPage (/course-detail) - 对应设计稿: "COURSE Details"

### 设计稿元素:
- 顶部大图 (Happy Morning 太阳插图)
- 返回/收藏/下载按钮
- 课程标题和描述
- 收藏数/收听数统计
- 旁白选择 (男声/女声)
- 课程列表

### 当前实现问题:
- ❌ 顶部插图使用内联 SVG
- ❌ 缺少真实的太阳微笑插图

### 需要替换的资源:
- `1.svg` 或 `2.svg` → 太阳插图
- 播放图标

---

## 9. MeditatePage (/meditate) - 对应设计稿: "Meditate v2"

### 设计稿元素:
- "Meditate" 标题
- 分类标签 (All, My, Anxious, Sleep, Kids)
- Daily Calm 卡片
- 冥想课程网格 (7 Days of Calm, Anxious Release 等)
- 底部导航

### 当前实现问题:
- ❌ 分类图标使用 lucide-react
- ❌ 课程卡片使用 emoji
- ❌ 缺少真实课程插图

### 需要替换的资源:
- 分类图标 SVG
- `mask-group-*.png` → 课程卡片图片

---

## 10. SleepWelcomePage (/sleep-welcome) - 对应设计稿: "welcome sleep"

### 设计稿元素:
- 深蓝色背景
- "Welcome to Sleep" 标题
- 两只睡觉的小鸟插图
- 树枝和叶子装饰
- 开始按钮

### 当前实现问题:
- ❌ 小鸟插图使用内联 SVG 简单绘制
- ❌ 缺少真实的睡眠小鸟插图

### 需要替换的资源:
- `group-6795.png` 或相关 → 睡眠小鸟插图

---

## 11. SleepPage (/sleep) - 对应设计稿: "sleep"

### 设计稿元素:
- "Sleep Stories" 标题
- 分类标签
- The Ocean Moon 特色卡片
- 睡眠故事网格 (Night Island, Sweet Sleep 等)
- 底部导航

### 当前实现问题:
- ❌ 插图使用 emoji
- ❌ 缺少真实的月亮/睡眠插图

### 需要替换的资源:
- `mask-group-*.png` → 睡眠故事卡片图片
- 月亮云彩装饰

---

## 12. MusicPlayerPage (/music) - 对应设计稿: "music V2" / "music"

### 设计稿元素:
- 关闭/收藏/下载按钮
- 大圆形月亮插图
- "Focus Attention" / "Night Island" 标题
- 播放控制 (进度条、播放/暂停、前进/后退)
- 相关推荐

### 当前实现问题:
- ❌ 月亮插图使用 emoji
- ❌ 播放控制图标使用 lucide-react

### 需要替换的资源:
- 月亮/星星插图
- 播放控制图标 (播放、暂停、前进、后退)

---

## 总结 - 需要替换的主要资源

### Logo 相关:
- `logo.svg` - 主 Logo
- `logo-1.svg` - 白色 Logo
- `logo-2.svg` - 备用 Logo

### 主要插图:
- `frame.svg` - 欢迎页主插图
- `group-10.png` - 冥想女孩 (盘腿坐姿)
- `group-6795.png` - 睡眠小鸟

### 课程/卡片图片:
- `mask-group-1.png` ~ `mask-group-30.png` - 各种课程卡片

### 图标:
- `vector-*.svg` - 各种小图标
- `group-5.png`, `group-12.png` 等 - 用户/音乐图标

### 底部导航图标:
需要找到对应的 Home, Sleep, Meditate, Music, User 图标
