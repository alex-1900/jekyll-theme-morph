(function() {
    "use struct"

    function createStructureItem(element) {
        var a = document.createElement('a')
        var li = document.createElement('li')
        a.href = '#' + element.id
        a.innerText = element.innerText
        li.className = element.nodeName.toLowerCase()
        li.appendChild(a)

        a.onclick = function (event) {
            event.preventDefault()
            element.scrollIntoView({behavior: "smooth"})
        }

        return li
    }

    function post(title) {
        this.title = title
    }

    post.prototype.getHeaders = function () {
        var articleArea = document.querySelector('article.text')
        return articleArea.querySelectorAll('h1, h2, h3, h4, h5, h6')
    }

    post.prototype.initStructure = function (structure) {
        var headers = this.getHeaders()
        headers.forEach(function (value) {
            structure.appendChild(createStructureItem(value))
        })
    }

    post.prototype.addAnchorToHeaders = function () {
        var headers = this.getHeaders()
        headers.forEach(function (value) {
            var a = document.createElement('a')
            var i = document.createElement('i')
            i.className = 'fas fa-link header-anchor color-link-light'
            a.href = '#' + value.id
            a.appendChild(i)
            value.appendChild(a)
        })
    }

    window.PostPage = post;
})()
