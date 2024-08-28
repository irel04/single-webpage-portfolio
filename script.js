
function addRecommendation (e){
	const name = document.getElementById("name").value
	const message = document.getElementById("message").value

	const recomContainer = document.getElementById("recomId")

	recomContainer.innerHTML += `<li>
	${message}
	${name !== ""? `<span>${name}</span>` : ""}
	</li>`
}