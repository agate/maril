# Maril

Maril is abbreviation of "Marathon Application Run In Local". Which is a command line interface to generate `docker run` command from a marathon application configuration.

## Installation

Open your terminal and execute:

```
$ gem install maril
```

I also provide a greasemonkey userscript. It will add a button on your marathon application page. You just need to click it and the `docker run` command will be saved into your clipboard.

![image](https://user-images.githubusercontent.com/21731/28947741-3bc76082-7877-11e7-8564-fed827369626.png)

You can click [here](https://raw.githubusercontent.com/agate/maril/master/userscript/maril.user.js) to install it.

> Remember: You have to either change `@match` or add new `@match` in this userscript to match your marathon site. So that this button can show up.

## Usage

Open your terminal and run:

```
$ maril --host http://your.marathon.domain --id /your/application/id
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Release

```
$ rake build
$ rake release
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/agate/maril. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Maril project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/agate/maril/blob/master/CODE_OF_CONDUCT.md).
