const milestonesData = JSON.parse(data).data;


function loadMileStones() {
  const milestones = document.querySelector('.milestones')

  milestones.innerHTML = `${milestonesData.map(function (milestone) {
    return `<div class="milestone border-b">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" /></div>
      <div onclick="openModule(this)">
        <p>
          ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel show">
      ${milestone.modules.map(function (module) {

      return `<div class="module border-b ">
        <p>${module.name}</p>
      </div>`
    }).join("")}
    </div>
  </div>`
  }).join("")}`

}

function openModule(moduleElement) {
  const moduleNode = moduleElement.parentNode.NextElementSibling;
}

loadMileStones()