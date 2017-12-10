---
layout: post
title: "Data-binding: Under the hood"
date: 2017-12-10
categories: javascript dom ui components
description: >
  Today we're going to discuss how data-binding works under
  the hood and actually build a version of it ourselves with
  ES2015 Proxies that allow us to easily monitor for changes on
  an POJO.
---

Raw denim keffiyeh hammock kombucha, vexillologist tattooed pok pok actually
listicle. Echo park locavore drinking vinegar air plant swag seitan. Succulents
cold-pressed wayfarers tattooed, kale chips street art fanny pack hexagon
distillery sriracha art party pinterest la croix you probably haven't heard of
them marfa. Bitters celiac waistcoat, gentrify wolf ennui pug. Twee franzen
migas wolf.

{% highlight jsx %}

const observe = (obj, handler) => {
  return new Proxy(obj, handler);
};

{% endhighlight %}

Raw denim keffiyeh hammock kombucha, vexillologist tattooed pok pok actually
listicle. Echo park locavore drinking vinegar air plant swag seitan. Succulents
cold-pressed wayfarers tattooed, kale chips street art fanny pack hexagon
distillery sriracha art party pinterest la croix you probably haven't heard of
them marfa. Bitters celiac waistcoat, gentrify wolf ennui pug. Twee franzen
migas wolf.

{% highlight jsx %}

const user = {
  name: "Marco",
  surname: "Roganovic",
  job: "Software developer"
};

observe(user, () => console.log("Changed!"));

{% endhighlight %}
