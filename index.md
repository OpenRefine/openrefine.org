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

{% capture mainintro%}
  {{% include main-intro.md %}}
{% endcapture %} 

{% capture maincontent %}
  {% include main-content.md %}
{% endcapture %}
{{ mainintro | markdownify }}

 
