
function addRecommendation (){
	const name = document.getElementById("name").value
	const message = document.getElementById("message").value

	const recomContainer = document.getElementById("recomId")

	recomContainer.innerHTML += `<li>
	${message}
	${name !== ""? `<span>${name}</span>` : ""}
	</li>`

	openModal()
}


function openModal(){
	const mainDiv = document.getElementById("mainDiv")
	mainDiv.innerHTML += `<div class="modal">
		<img src="assets/checked.svg" alt="" srcset="">
		<p>Thanks for Leaving a recommendation</p>
		<button type="button" class="confirmButton" onclick="closeModal()">OK</button>
	</div>`
}

function closeModal(){
	const modal = document.querySelector(".modal")
	if(modal){
		modal.remove()
	}
}