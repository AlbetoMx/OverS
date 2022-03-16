	import {indexPage} from './function.js';
	let codeHtml = `


	<section class="front-page">
			<div class="flex-ctr-column">
				<div class="text-1">
					<h1>Inscribete a un equipo</h1>
					<p><b>Compite </b>en los <b>mejores </b>torneos de <b>morelos </b></p>
				</div>
				<form action="" class="form-searchTeam">
						<input type="text"  class="front-searchTeam__input" placeholder="¿Buscas algun equipo?">
						<button class="searchTeam-button">Buscar</button>
				</form>
			</div>
	</section>

	<section class="box-ctr-boder">
		
			<div class="profile-grid">
				<div class="profile-box1">
					<h3 class="blue-">¿que es OverS?</h3>
					<p>Overs es una plataforma que se encaga se reunir a todos los equipos del estado de morelos para que esten a tu disposicion</p>
				</div>
				<div class="profile-img"><img src="images/jugador-de-futbol.png" alt=""></div>
				<div class="profile-box2">
					<span class="ben-title">Beneficios</span>
					<div class="js-ben">
					</div>
				</div>
				<span class="benAct"></span>

			</div>
	
	</section>

		<section class="stn-teams">
		<div class="flex-ctr-column margin-btn">
			<div class="profile-box1">
				<h3 class="blue-">equipos</h3>
			</div>
			<div class="tems-content flex-ctr-wrap">

			</div>
			
		</div>
		<a href="teams.html" class=" name-title button-n2">mas equipos</a>
	</section>


	`;
	export const main = ()=>  indexPage(codeHtml,"MAIN");