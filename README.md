# Morph

Morph is a simple Jekyll theme for writers.

[Demo](http://alex-1900.github.io/jekyll-theme-morph/)

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
remote_theme: alex-1900/jekyll-theme-morph

permalink: /:year/:month/:day/:title.markdown
paginate: 5

plugins:
  - jekyll-paginate
  - jekyll-remote-theme
```

Remove any other `theme:` or `remote_theme:` lines.

4. Rename `index.md` to `index.html`. Without this, the `jekyll-paginate` gem will not work.

## Layouts

### Pinned articles
Add the `sticky` and `sticky_subtitle`(optional) field to post file, and you can find the article at pinned area.
```yml
---
sticky: true
sticky_subtitle: some words
---
```

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
morph:
  navigation:
    - name: tags
      path: /tags
    - name: categories
      path: /categories
```

and can see the `tags` and `categories` buttons now.

### Enable tags and categories sidebar
add these lines to your `_config.yml` in `morph` field:
```yml
morph:
  include:
    home_categories_bar:
      title: Top Categories
      path: /categories
    home_tags_bar:
      title: Top Tags
      path: /tags
```
certainly, you can change the `titles` and `paths`

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

3. add change your `_config.yml` add a new page to `morph.navigation`:
```yml
morph:
  navigation:
    - name: search
      path: /search
```

### custom the article excerpt length in home page
```yml
morph:
  excerpt_length: 150  # default is 200
```

## Change the skin
There are two skins: `silver` (default) and `obsidian`, you can switching between multiple skins by `_config.yml`:
```yml
morph:
  skin: obsidian
```
and rebuild or restart the dev server

#### Custom skin
create file `_sass/skink/skin_name.scss`, and enable in `_config.yml`:
```yaml
# _config.yml

sass:
  sass_dir:     _sass
  style:        compressed

morph:
  skin: skin_name
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
  pinned_articles: Pinned Articles
  top_tags: Top Tags
  top_categories: Top Categories
  show_more: show more
  catalogue_empty: Catalogue is empty
  previous_page: Previous
  next_page: Next
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
