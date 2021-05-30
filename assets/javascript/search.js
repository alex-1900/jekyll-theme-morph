(function() {
    "use struct"

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1)
        var vars = query.split("&")
        for (var i=0; i < vars.length; i++) {
            var pair = vars[i].split("=")
            if (pair[0] == variable){
                return pair[1]
            }
        }
        return null;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var pageSearch = document.getElementById('page-search')

        var searchInput = pageSearch.querySelector('#search-input')
        var searchButton = pageSearch.querySelector('#search-button')
        var searchContainer = pageSearch.querySelector('#search-results-container')
        var sjs = SimpleJekyllSearch({
            searchInput: pageSearch.querySelector('#search-input'),
            resultsContainer: searchContainer,
            json: '/search.json',
            searchResultTemplate: '<li>\
            <h2 class="title fw-normal"><a href="{url}">{title}</a></h2>\
            <p class="search-template-content">{content}</p>\
            <p class="tags color-secondary-light"><i class="fas fa-tags color-rang1" style="font-size:.8rem"></i> {tags}</p>\
        </li>',
            success: function (rv) {
                var words = getQueryVariable('words')
                if (words) {
                    searchContainer.innerText = 'Searching'
                    words = decodeURIComponent(words)
                    searchInput.value = words
                    setTimeout((function () {
                        this.search(words)
                    }).bind(this), 800)
                }
            }
        })

        searchButton.onclick = function (event) {
            event.preventDefault()
            if (searchInput.value && searchInput.value.length > 0) {
                sjs.search(searchInput.value)
            }
        }
    })
})()
