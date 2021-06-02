# technia

technia is a simple Jekyll theme for writers.

[Demo](http://blog.technia.site/technia/)

## Installation
Install with github page:

### GitHub Pages
1. Add these 2 lines in to your `Gemfile`:

```ruby
gem "jekyll-remote-theme"
gem "jekyll-paginate"
```

2. Install the newly added gems:

```bash
$ bundle
```

3. In `_config.yml` add these lines:

```yaml
remote_theme: alex-1900/technia

permalink: /:year/:month/:day/:title.markdown
paginate: 5

plugins:
  - jekyll-paginate
  - jekyll-remote-theme
```

Remove any other `theme:` or `remote_theme:` lines.

4. Rename `index.md` to `index.html`. Without this, the `jekyll-paginate` gem will not work.

## Layouts

### Add tags and categories page
1. create new pages `tags.html` and `categories.html` and add these lines to heads:
```html
---
layout: classify
source: tags
---
```

```text
---
layout: classify
source: categories
---
```

2. add these lines to your `_config.yml`:
```yml
technia:
  pages:
    - name: tags
      path: /tags
    - name: categories
      path: /categories
```

and can see the `tags` and `categories` buttons now.

### Add searching page
1. create `search.json` at project root, and add these lines:
```text
---
layout: none
permalink: /search.json
---
[
{% for post in site.posts %}
{
    "title"    : {{ post.title | escape | jsonify }},
    "category" : {{ post.category | jsonify }},
    "tags"     : "{{ post.tags | join: ', ' }}",
    "url"      : "{{ site.baseurl }}{{ post.url }}",
    "date"     : "{{ post.date }}",
    "content"  : {{ post.content | strip_html | strip_newlines | remove_chars | jsonify }}
} {% unless forloop.last %},{% endunless %}
{% endfor %}
]
```

2. create a new file `search.html`, and add these lines to head:
```html
---
layout: search
---
```

3. add change your `_config.yml` add a new page to `technia.pages`:
```yml
technia:
  pages:
    - name: tags
      path: /tags
    - name: categories
      path: /categories
    - name: search
      path: /search
```

## Change the skin
There are two skins: `silver` (default) and `obsidian`, you can switching between multiple skins by `_config.yml`:
```yml
technia:
  skin: obsidian
```
and rebuild or restart the dev server

## Multiple language
1. Create directory and file `__data/language/[lang].yml`(the `[lang]` is abbreviation of your language)

2. replace contents with another language, the following are the default values.

```yml
t:
  posts: posts
  tags_low: tags
  tags_up: Tags
  categories_low: categories
  categories_up: Categories
  about_low: about
  about_up: About
  search_low: search
  search_up: Search
  catalogue: Catalogue
  home: Home
  page: Page
  post_up: Post
  search_placeholder: input key words here...
  update_time: Update time
  trending_articles: Trending Articles
  trending_tags: Trending Tags
  show_more: show more
  catalogue_empty: Catalogue is empty
```

3 add your the `lang` item to your page files
```html
---
lang: [lang]
---
```

(the `[lang]` is abbreviation of your language)

- for posts page, you can change the defaults scope:
```yml
defaults:
  - scope:
      type: "posts"
    values:
      lang: [lang]  # the `[lang]` is abbreviation of your language
```

and rebuild or restart the dev server
