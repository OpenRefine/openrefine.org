---
layout: home
title: "Welcome to the new OpenRefine site"
---

<div id="banner">
  <div class="inner-content">
    <div class="copy">
      <h1></h1>
      <p class="intro">A free, open source, power tool for working with messy data</p>
    </div>
  </div>
</div>  

<div id="content">
  <div class="inner-content">
{% capture intro %}
  {{% include intro.md %}}
 {% endcapture %}
  </div>
</div>

<div id="content">
  <div class="inner-content">
    <div class="cols">
      <div class="col">
{% capture video%}
  {{% include video.md %}}
 {% endcapture %}  
      </div>
      <div class="col">
{% capture download%}
  {{% include download.md %}}
 {% endcapture %}
    <h3>Post archive</h3>
    <ul class="bordered-list">
      {% for post in site.posts %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <span class="date">{{ post.date | date: "%d-%m-%Y" }}</span>
      </li>
      {% endfor %}
    </ul>
      </div>
    </div>
  </div>
</div>
