function request(options) {
  var httpRequest = new XMLHttpRequest();
  var settings = Object.assign({
    url: '/',
    method: 'GET',
    data: '',
    contentType: 'application/json;charset=UTF-8',
    load: function load(response) {
      if (settings.success !== undefined && typeof settings.success === 'function') {
        if (response.explicitOriginalTarget !== undefined) {
          settings.success(response.explicitOriginalTarget.response);
        } else if (response.currentTarget) {
          settings.success(response.currentTarget.response);
        }
      }

      ;
    },
    error: function error(response) {
      console.warn(response);
    }
  }, options);
  httpRequest.addEventListener("load", settings.load);
  httpRequest.addEventListener("error", settings.error);
  httpRequest.open(settings.method, settings.url);
  httpRequest.setRequestHeader('x-requested-with', "XMLHttpRequest");
  httpRequest.setRequestHeader('Content-Type', settings.contentType);
  httpRequest.send(settings.data);
}

;
module.exports = request;