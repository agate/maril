# coding: utf-8
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "maril/version"

Gem::Specification.new do |spec|
  spec.name          = "maril"
  spec.version       = Maril::VERSION
  spec.authors       = ["agate"]
  spec.email         = ["agate.hao@gmail.com"]

  spec.summary       = %q{Marathon Application Run In Local}
  spec.description   = %q{A command line tool to generate docker run command from a marathon application configuration}
  spec.homepage      = "https://github.com/agate/maril"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.15"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"

  spec.add_dependency "rest-client", "~> 2.0"
  spec.add_dependency "json", "~> 1.8"
end
