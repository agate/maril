// ==UserScript==
// @name         Maril
// @namespace    https://github.com/agate/maril
// @version      0.1.2
// @description  Marathon Application Run In Local
// @author       agate<agate.hao@gmail.com>
// @match        http://PUT.YOUR.MARATHON.DOMAIN.HERE/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
  'use strict';

  let currentAppId = null;

  const generateDockerCmd = () => {
    let url = `${location.origin}/v2/apps${currentAppId}`;
    GM_xmlhttpRequest({
      method: "GET",
      url: url,
      onload: function(response) {
        let app = JSON.parse(response.responseText).app;
        let cmd = [ "docker run --rm -it" ];

        for (var key in app.env) {
          cmd.push(`--env ${key}=${app.env[key]}`);
        }
        app.container.docker.parameters.forEach((parameter) => {
          cmd.push(`--${parameter.key} ${parameter.value}`);
        });
        app.container.docker.portMappings.forEach((mapping) => {
          cmd.push(`-p ${mapping.containerPort}:${mapping.containerPort}`);
        });
        cmd.push(app.container.docker.image);

        GM_setClipboard(cmd.join(" \\\n"));
        alert("Already saved the docker run command into your clipboard.");
      },
      onerror: (response) => {
        alert("error");
      }
    });
  };

  const attachButton = () => {
    let hash = window.location.hash.slice(1);
    if (hash.match(/^\/apps\/[^/]+$/)) {
      let appId = decodeURIComponent(hash.slice(6));
      if (currentAppId != appId) {
        currentAppId = appId;
        let parentEle = document.querySelector('.header-btn');
        let btn = document.createElement('a');
        let btnTxt = document.createTextNode("Generate Docker CMD");
        btn.setAttribute("class", "btn btn-lg btn-default");
        btn.style["margin-left"] = "5px";
        btn.appendChild(btnTxt);
        btn.addEventListener("click", generateDockerCmd, false);
        parentEle.appendChild(btn);
      }
    }
  };

  window.addEventListener("hashchange", attachButton, false);
  attachButton();
})();
