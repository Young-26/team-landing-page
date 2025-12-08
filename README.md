# Team Landing Page - Git 学习项目

这是一个用于学习和练习 Git 协作的团队主页项目。

## 项目简介

这个项目旨在帮助团队成员学习 Git 的基本操作，包括：
- 克隆仓库
- 创建分支
- 提交更改
- 推送代码
- 创建 Pull Request
- 代码审查与合并

## 快速开始

### 1. Fork 并克隆仓库

```bash
# 克隆你 fork 的仓库
git clone https://github.com/你的用户名/team-landing-page.git
cd team-landing-page
```

### 2. 查看项目

在浏览器中打开 `index.html` 文件，查看团队主页。

### 3. 添加你的信息

创建一个新分支来添加你的团队成员信息：

```bash
# 创建并切换到新分支
git checkout -b add-member-你的名字
```

在 `index.html` 中找到团队成员部分，添加你的卡片：

```html
<div class="team-member">
    <div class="member-avatar">😊</div>
    <h3>你的名字</h3>
    <p class="member-role">你的角色</p>
    <p class="member-description">简短的自我介绍</p>
</div>
```

### 4. 提交更改

```bash
# 查看修改
git status
git diff

# 添加文件到暂存区
git add index.html

# 提交更改
git commit -m "添加团队成员: 你的名字"
```

### 5. 推送到远程仓库

```bash
git push origin add-member-你的名字
```

### 6. 创建 Pull Request

在 GitHub 上访问你的仓库，点击 "Compare & pull request" 按钮，创建一个 PR。

## Git 常用命令

```bash
# 查看状态
git status

# 查看提交历史
git log

# 查看分支
git branch

# 切换分支
git checkout 分支名

# 创建并切换分支
git checkout -b 新分支名

# 拉取最新代码
git pull origin main

# 合并分支
git merge 分支名
```

## 项目结构

```
team-landing-page/
├── index.html      # 主页面
├── style.css       # 样式文件
└── README.md       # 项目说明
```

## 学习资源

- [Git 官方文档](https://git-scm.com/doc)
- [GitHub 指南](https://guides.github.com/)
- [Git 简明指南](https://rogerdudler.github.io/git-guide/index.zh.html)

## 贡献指南

欢迎所有团队成员贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 许可证

本项目仅用于学习目的。
