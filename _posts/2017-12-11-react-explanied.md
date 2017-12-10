---
layout: post
title: "React.js: explained"
date: 2017-12-10
categories: javascript dom ui components
description: >
  Today my goal is to try to explain the rationale behind Facebook's popular
  open-source view library React, and explain how new rewrite of it's core
  diffing algorithm works
---

Raw denim keffiyeh hammock kombucha, vexillologist tattooed pok pok actually
listicle. Echo park locavore drinking vinegar air plant swag seitan. Succulents
cold-pressed wayfarers tattooed, kale chips street art fanny pack hexagon
distillery sriracha art party pinterest la croix you probably haven't heard of
them marfa. Bitters celiac waistcoat, gentrify wolf ennui pug. Twee franzen
migas wolf.

{% highlight jsx %}
import React, { Component } from "react";
import { hydrate } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Marco"
    };
  }

  handleKeyDown = ({ target }) => {
    this.setState((prevState) => {
      name: target.value
    });
  }

  render() {
    const { state, props } = this;
    return (
      <main>
        <input onKeyDown={this.handleKeyDown} value={this.state.name} />
        <h1>{state.name}</h1>
      </main>
    )
  }
}

export default App;
{% endhighlight %}

Raw denim keffiyeh hammock kombucha, vexillologist tattooed pok pok actually
listicle. Echo park locavore drinking vinegar air plant swag seitan. Succulents
cold-pressed wayfarers tattooed, kale chips street art fanny pack hexagon
distillery sriracha art party pinterest la croix you probably haven't heard of
them marfa. Bitters celiac waistcoat, gentrify wolf ennui pug. Twee franzen
migas wolf.
