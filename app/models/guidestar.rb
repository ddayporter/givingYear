require 'net/http'
require 'uri'

class Guidestar
  attr_accessor :guidestar_response

  def initialize search_term, page
    @search_term = search_term
    @page = page
    uri = URI('https://quickstartdata.guidestar.org/v1/quickstartsearch.json?q=' + @search_term + "&p=" + @page)
    Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https', :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http|
      request = Net::HTTP::Get.new uri.request_uri
      request.basic_auth 'rachelandrewsporter@gmail.com', 'Dvcc626!'
      response = http.request request # Net::HTTPResponse object
      @guidestar_response = JSON.parse(response.body)
    end
  end
end
