(function() {
    "use struct"

    function post() {
    }

    post.prototype.getHeaders = function () {
        var articleArea = document.querySelector('article.text')
        return articleArea.querySelectorAll('h1, h2, h3, h4, h5, h6')
    }

    post.prototype.initStructure = function (structure) {
        var headers = this.getHeaders()
        headers.forEach(function (value) {
            var a = document.createElement('a')
            var li = document.createElement('li')
            a.href = '#' + value.id
            a.innerText = value.innerText
            li.className = value.nodeName.toLowerCase()
            li.appendChild(a)
            structure.appendChild(li)
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
