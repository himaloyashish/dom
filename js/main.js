const milestonesData = JSON.parse(data).data;


function loadMileStones() {
  const milestones = document.querySelector('.milestones')

  milestones.innerHTML = `${milestonesData.map(function (milestone) {
    return `<div class="milestone border-b">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" /></div>
      <div onclick="openModule(this, ${milestone._id})">
        <p>
          ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel ">
      ${milestone.modules.map(function (module) {

      return `<div class="module border-b ">
        <p>${module.name}</p>
      </div>`
    }).join("")}
    </div>
  </div>`
  }).join("")}`

}

function openModule(moduleElement, id) {
  const currentPanel = moduleElement.parentNode.nextElementSibling;
  const shownPanel = document.querySelector('.show');
  const active = document.querySelector('.active');

  // first remove previous active class [if any other than the clicked one]
  if (active && !moduleElement.classList.contains('active')) {
    active.classList.remove('active')
  };

  // toggle the active class
  moduleElement.classList.toggle('active')

  // first remove show class [if other than the clicked one]
  if (!currentPanel.classList.contains('show') && shownPanel)
    shownPanel.classList.remove('show');


  // toggle the active
  currentPanel.classList.toggle('show');

  shownMilestone(id)


}

function shownMilestone(id) {
  const milestoneImage = document.querySelector(".milestoneImage");
  const name = document.querySelector(".title");
  const details = document.querySelector(".details")

  milestoneImage.src = milestonesData[id].image;
  name.innerText = milestonesData[id].name;
  details.innerText = milestonesData[id].description;

}

loadMileStones();