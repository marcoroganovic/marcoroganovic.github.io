App.module.define("projects", ["dom"], function(dom) {
  var PROJECTS = {
    abago: {
      name: "abago.com",
      description: "Platform for bookin flight tickets and soon hotels. It's a single page applicatin built using modern JavaScript libraries. Specifically React, Redux, React Router and webpack for code transpiling and module bundling.",
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
  
  var $browserMockup = dom.$(".browser-mockup img");
  var $projTitle = dom.$(".featured-project-desc h3");
  var $projDesc = dom.$(".featured-project-desc p");
  var $projURL = dom.$(".featured-project-desc a");
  var $otherProjects = dom.$(".other-projects");

  $otherProjects.addEventListener("click", function(event) {
    if(event.target.nodeName.toLowerCase() === "img") {
      var id = event.target.dataset.projectId;
      var project = PROJECTS[id];
      $browserMockup.src = event.target.src;
      $projTitle.textContent = project.name;
      $projDesc.textContent = project.description;
      $projURL.href = project.link; 
    }
  });

  return {};
});
