# technia

technia is a simple Jekyll theme for writers.

![show1](https://user-images.githubusercontent.com/49949411/120296585-db318400-c2fa-11eb-9558-30701229d467.png)

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
