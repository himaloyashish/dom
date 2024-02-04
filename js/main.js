const milestonesData = JSON.parse(data).data;

function loadMileStones() {
 const milestones = document.querySelector('.milestones')

 milestones.innerHTML = `${milestonesData.map()}`

}
