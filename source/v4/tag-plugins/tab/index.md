---
robots: noindex,nofollow
sitemap: false
layout: page
group: docs-v4
meta:
  header: [centertitle]
sidebar: [docs-v4, toc, repos]
order: 531
short_title: false
title: 'tag-plugins: tab'
---

此插件移植自 [NexT #tabs](https://theme-next.org/docs/tag-plugins/tabs)

```md 最后更新于 <u>2.1</u> 版本
{% tabs 页面内不重复的ID %}
<!-- tab 栏目1 -->
内容
<!-- endtab -->
<!-- tab 栏目2 -->
内容
<!-- endtab -->
{% endtabs %}
```

## 演示效果

{% tabs tab-id %}

<!-- tab 栏目1 -->

。。。

<!-- endtab -->

<!-- tab 栏目2 -->

！！！

<!-- endtab -->

{% endtabs %}

## 上述示例的源码

```md example:
{% tabs tab-id %}

<!-- tab 栏目1 -->

。。。

<!-- endtab -->

<!-- tab 栏目2 -->

！！！

<!-- endtab -->

{% endtabs %}
```
