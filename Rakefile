require "bundler/gem_tasks"
require "rspec/core/rake_task"
require "erb"

RSpec::Core::RakeTask.new(:spec)

task :default => :spec

desc "Build maril.user.js"
task "build_userscript" do
  gemspec = Gem::Specification::load("maril.gemspec")
  src_path = "userscript/maril.user.js.erb"
  dis_path = "userscript/maril.user.js"
  content = ERB.new(File.read(src_path)).result(binding)
  File.write(dis_path, content)
end
