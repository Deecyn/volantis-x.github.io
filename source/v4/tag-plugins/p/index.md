---
robots: noindex,nofollow
sitemap: false
layout: page
group: docs-v4
meta:
  header: [centertitle]
sidebar: [docs-v4, toc, repos]
order: 513
short_title: false
title: 'tag-plugins: p'
---

```md 本插件最后更新于 <u>2.5</u> 版本
{% p 样式参数, 文本内容 %}
```

## 演示效果

### 彩色文字

在一段话中方便插入各种颜色的标签，包括：{% p red, 红色 %}、{% p yellow, 黄色 %}、{% p green, 绿色 %}、{% p cyan, 青色 %}、{% p blue, 蓝色 %}、{% p gray, 灰色 %}。

### 超大号文字

文档「开始」页面中的标题部分就是超大号文字。

{% p center logo large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}

## 上述示例的源码

```md example:
### 彩色文字

在一段话中方便插入各种颜色的标签，包括：{% p red, 红色 %}、{% p yellow, 黄色 %}、{% p green, 绿色 %}、{% p cyan, 青色 %}、{% p blue, 蓝色 %}、{% p gray, 灰色 %}。

### 超大号文字

文档「开始」页面中的标题部分就是超大号文字。

{% p center logo large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}
```

## 可以支持的参数

样式参数位置可以写颜色、大小和对齐方向，多个样式参数用空格隔开。

### 字体

```
logo, code
```

### 颜色

```
red, yellow, green, cyan, blue, gray
```

### 大小

```
small, h4, h3, h2, h1, large, huge, ultra
```

### 对齐方向

```
left, center, right
```
