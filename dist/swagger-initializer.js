window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  const definition = document.getElementById("initializer").getAttribute("definition");
  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  console.log(definition)
  window.ui = SwaggerUIBundle({
    url: definition,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
