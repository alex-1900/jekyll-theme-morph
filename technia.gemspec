# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "technia"
  spec.version       = "0.0.1"
  spec.authors       = ["Alex"]
  spec.email         = ["omytty@126.com"]

  spec.summary       = %q{Technia is a minimal Jekyll theme.}
  spec.homepage      = "https://github.com/alex-1900/technia"
  spec.license       = "MIT"

  spec.add_runtime_dependency "jekyll", "~> 4.0"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.7"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "webrick", "~> 1.7"
end
