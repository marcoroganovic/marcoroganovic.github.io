---
layout: post
title: GraphQL Client from Scratch
date: 2017-12-09
categories: javascript grahpql node
description: >
  In this blog post we're going to steer away from popular GraphQL
  client libraries like Relay and Apollo and build one ourselves, primaraly for
  learning purposes 
---

Raw denim keffiyeh hammock kombucha, vexillologist tattooed pok pok actually
listicle. Echo park locavore drinking vinegar air plant swag seitan. Succulents
cold-pressed wayfarers tattooed, kale chips street art fanny pack hexagon
distillery sriracha art party pinterest la croix you probably haven't heard of
them marfa. Bitters celiac waistcoat, gentrify wolf ennui pug. Twee franzen
migas wolf.


```jsx
const curry = (fn, ctx, args = []) => {
  if(args.length >= fn.length) {
    return fn.apply(ctx, args);
  }

  return (...argsTwo) => curry(fn, ctx, [...args, ...argsTwo]);
}
```

Marfa DIY hoodie, jean shorts edison bulb mumblecore stumptown. Helvetica umami
farm-to-table master cleanse banh mi pop-up blue bottle you probably haven't
heard of them pork belly wayfarers aesthetic coloring book bitters. Art party
retro pinterest, listicle quinoa taxidermy tumeric polaroid. XOXO poke migas
chicharrones. Seitan next level listicle, pok pok glossier unicorn gastropub
beard farm-to-table selvage YOLO. Chicharrones etsy swag, synth photo booth tbh
quinoa venmo PBR&B cred.
