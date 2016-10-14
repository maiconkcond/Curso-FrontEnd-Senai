var botao = document.querySelector('#btnAbrirSideBar');

function abrirSidebar(){
	console.log("Abre ae")
	var sidebar = document.querySelector('#sidebar');
	sidebar.classList.add("active");
}

botao.onclick = abrirSidebar;