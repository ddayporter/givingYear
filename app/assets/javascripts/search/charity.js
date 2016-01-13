angular
  .module("givingYear")
  .factory("Charity", [
    "$resource",
    function($resource){
      return $resource("https://quickstartdata.guidestar.org/v1/quickstartsearch.json?q=organization_name:" + ":orgName", {}, {
        query: { method: "GET", isArray: false },
        beforeSend: function(xhr){
          xhr.setRequestHeader("Authentication", "Basic" + hash("rachelandrewsporter@gmail.com:Dvcc626!"))
        }
      });
    }
  ])
