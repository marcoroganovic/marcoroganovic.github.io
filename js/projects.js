App.module.define("projects", ["dom"], function(dom) {

  var PROJECTS = {
    abago: {
      name: "abago.com",
      description: "Platform for booking flight tickets and soon hotels. It's a single page applicatin built using modern JavaScript libraries. Specifically React, Redux, React Router and webpack for code transpiling and module bundling.",
      link: "https://abago.com"
    },

    codeplayer: {
      name: "CodePlayer",
      description: "In-browser front-end development enviroment where you can see results in real-time.",
      link: "https://code-player.surge.sh"
    },

    siteforge: {
      name: "SiteForge",
      description: "SiteForge is site where you can just drag-and-drop website components and export responsive HTML and CSS. However, this is still work in progress",
      link: "https://site-forge.herokuapp.com"
    }

  }

  var ACTIVE_PROJECT = "abago";

  // cache DOM elements
  var $featuredProj = dom.$(".featured-project");
  var $browserMockup = dom.$(".browser-mockup img");
  var $projTitle = dom.$(".featured-project-desc h3");
  var $projDesc = dom.$(".featured-project-desc p");
  var $projURL = dom.$(".featured-project-desc a");
  var $otherProjects = dom.$(".other-projects");

  // animation name
  var ANIMATION_NAME = "zoomIn";

  function animateFeaturedProject(el) {
    return new Promise(function(resolve, reject) {
      el.classList.remove(ANIMATION_NAME);
      setTimeout(function() {
        el.classList.add(ANIMATION_NAME);
        resolve();
      }, 100);
    });
  }

  $otherProjects.addEventListener("click", function(event) {
    if(event.target.nodeName.toLowerCase() === "img") {
      var id = event.target.dataset.projectId;
      if(id !== ACTIVE_PROJECT) {
        var project = PROJECTS[id];
        ACTIVE_PROJECT = id;
        animateFeaturedProject($featuredProj).then(function() {
          $browserMockup.src = event.target.src;
          $projTitle.textContent = project.name;
          $projDesc.textContent = project.description;
          $projDesc.innerHTML += "<br />";
          $projDesc.innerHTML += "<a class='ghost-btn' href='" + project.link + "' target='_blank'>Visit site</a>"
        });
      }
    }
  });

  return {};
});
