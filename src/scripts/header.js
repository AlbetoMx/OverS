	import {indexPage} from './function.js';
	let codeHtml = `
	<nav class="nav-flex">
	<div class = "flex-g2 flex-ctr">
	<a href="index.html" class="text-deco-no logo">OverS</a>
	
	</div>
			
			
			<ul class="nav-content">
				<li><a href="teams.html">Equipos</a></li>
				<li><a href="">Noticias</a></li>
				<li><a href="">FQA</a></li>
			</ul>
			<div class="nav-session">
				<a href="session.html"><span class="nav-session__span">Ingresar</span></a> 
			</div>
			<div class="nav-menu">
				<img src="images/menu.png" alt="" class="menu-img">
				<div class="menu-desplegable" id="menu-desplegable">
					<ul class=" visible nav-content">
						<li><a href="">Equipos</a></li>
						<li><a href="">Noticias</a></li>
						<li><a href="">FQA</a></li>
					</ul>
				<div class="visible nav-session">
				 	<a href=""><span class="nav-session__span">Ingresar</span></a> 
				</div>
				</div>
			</div>	
	</nav>
	 `;
	export const header = ()=>  indexPage(codeHtml,"HEADER");
