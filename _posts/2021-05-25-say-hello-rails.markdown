---
layout: post
title:  Say "Hello", Rails
date:   2021-05-25 06:28:14 +0000
categories: technology
tags: ruby rails
---

To get Rails saying "Hello", you need to create at minimum a route, a controller with an action,
and a view. A route maps a request to a controller action.
A controller action performs the necessary work to handle the request,
and prepares any data for the view. A view displays data in a desired format.

In terms of implementation: Routes are rules written in a Ruby [`DSL (Domain-Specific Language)`](https://en.wikipedia.org/wiki/Domain-specific_language).
Controllers are Ruby classes, and their public methods are actions.
And views are templates, usually written in a mixture of HTML and Ruby.

Let's start by adding a route to our routes file,
`config/routes.rb`, at the top of the `Rails.application.routes.draw` block:

```ruby
Rails.application.routes.draw do
  get "/articles", to: "articles#index"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
```

The route above declares that `GET /articles` requests are mapped to the `index` action of `ArticlesController`.

To create `ArticlesController` and its `index` action,
we'll run the controller generator (with the `--skip-routes` option because we already have an appropriate route):

```shell
$ bin/rails generate controller Articles index --skip-routes
```

Rails will create several files for you:

```text
create  app/controllers/articles_controller.rb
invoke  erb
create    app/views/articles
create    app/views/articles/index.html.erb
invoke  test_unit
create    test/controllers/articles_controller_test.rb
invoke  helper
create    app/helpers/articles_helper.rb
invoke    test_unit
invoke  assets
invoke    scss
create      app/assets/stylesheets/articles.scss
```

The most important of these is the controller file, app/controllers/articles_controller.rb. Let's take a look at it:

```ruby
class ArticlesController < ApplicationController
  def index
  end
end
```

The `index` action is empty.
When an action does not explicitly render a view (or otherwise trigger an HTTP response),
Rails will automatically render a view that matches the name of the controller and action.
Convention Over Configuration! Views are located in the app/views directory.
So the index action will render `app/views/articles/index.html.erb` by default.

```html
<h1>Hello, Rails!</h1>
```

If you previously stopped the web server to run the controller generator,
restart it with `bin/rails` server. Now visit http://localhost:3000/articles, and see our text displayed!
