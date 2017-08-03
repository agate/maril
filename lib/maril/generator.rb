module Maril
  class Generator
    def initialize(options={})
      @host = options[:host] || options['host']
      @id = options[:id] || options['id']
    end

    def generate
      app = fetch_app
      cmd = [ 'docker run' ]
      app['env'].each do |k, v|
        cmd << "-e #{k}=#{v}"
      end
      app['container']['docker']['parameters'].each do |parameter|
        cmd << "--#{parameter['key']} #{parameter['value']}"
      end
      app['container']['docker']['portMappings'].each do |mapping|
        cmd << "-p #{mapping['containerPort']}:#{mapping['containerPort']}"
      end
      cmd << app['container']['docker']['image']
      cmd << app['cmd'] if app['cmd']
      cmd.join(" \\\n")
    end

    private

    def fetch_app
      res = RestClient.get("#{@host}/v2/apps#{@id}")
      JSON.parse(res.body)['app']
    end
  end
end
