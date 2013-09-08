---
  layout: default
  title: Blog
---

<div id="blog">
  <div id="blog-content">
    {% for post in site.posts %}
    <article>
      <header>
        <h1><a href="{% unless site.baseurl == "/" %}{{ site.baseurl }}{% endunless %}{{ post.url }}">{{ post.title }}</a></h1>
        <p>Posted on {{ post.date | date: "%B %d, %Y" }} by Wolfr</p>
      </header>
    </article>
    {% endfor %}
  
    {% if paginator.page %}
    <div id="paginator" class="content">
      {% if paginator.next_page %}
      <a href="/page{{ paginator.next_page }}/">Older entries</a>
      {% endif %}
      {% if paginator.previous_page %}
      <a href="/page{{ paginator.previous_page }}/">Newer entries</a>
      {% endif %}
    </div>
    {% endif %}

  </div>
</div>
