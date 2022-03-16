
export const menuEvent = ()=>{
const menuImg = document.querySelector(".menu-img");
const menuDesplegable = document.querySelector(".menu-desplegable");
menuImg.addEventListener("click",()=>
{
	
	if(menuDesplegable.style.display == 'block')
	{
		
		menuDesplegable.style.animation = 'memuDesplegableNone 1.5s forwards';
		setTimeout(()=>menuDesplegable.style.display = 'none',1400)
		menuImg.style.transform = 'rotate(0deg)' ;
		
		
		
	}
	else
	{
		
		menuDesplegable.style.display = 'block';
		menuDesplegable.style.animation = 'memuDesplegable 2s forwards'
		menuImg.style.transform = 'rotate(135deg)' ;

		

	}
	
})}
export const Events = ()=>{

let BeneficiosArr = [{
	img:"images/Beneficios/tem.png",
	text:"Encontrar un equipo",
},
{
	img:"images/Beneficios/trofeo.png",
	text:"Creacion de torneos",
},
{
	img:"images/Beneficios/equipo.png",
	text:"Diversidad de equipos",
}];
const bene = document.querySelector(".js-ben");

function Beneficios()
{
	for( let b in BeneficiosArr )
	{
		let ben = BeneficiosArr[b];
		let img = ben["img"];
		let text = ben["text"];
		let htmlCode = 
		`<div class="ben-item">
			<span class="ben-text">${text}</span>
			<img src="${img}" alt="" class="img-ben">	
		</div>`;
		bene.innerHTML+=htmlCode;


	}
}
const  jsBen = document.querySelectorAll(".js-ben");
const stnMain = document.querySelector(".benAct");
const vh = document.documentElement.clientHeight;
const teamsClass = document.querySelector(".tems-content").children;


function scrollBen ()
{


let scrollTop = document.documentElement.scrollTop + vh ;
beneficiosAct(scrollTop);
team(scrollTop,0);
team(scrollTop,1);
team(scrollTop,2);
team(scrollTop,3);




}
const teams = [
{
	title:"Real del puente",
	categories:"2004-2014",
	location:"Xochitepec",
	value:"150",
	img:"images/iconosFut/Ajax-Logo.png"
},
{
	title:"Fc Arm",
	categories:"2004-2008",
	location:"Cuernavaca",
	value:"300",
	img:"images/iconosFut/FcAm.png"


},
{
	title:"Alto impacto",
	categories:"2000-2005",
	location:"Juitepec",
	value:"250",
	img:"images/iconosFut/Altoimpacto.png"
},
{
	title:"Galacticos",
	categories:"2004-2012",
	location:"Temixco",
	value:"100",
	img:"images/iconosFut/Galacticos.png"
}
];

function teamsMain (img,title,categories,location,value,t) 
{
	return  `	
			<div class="team-item flex-ctr-column team${t}" >
				<div class="team-img"><img src="${img}" alt=""></div>
						<span class="name-title">${title}</span>
			
							<div class="flex-ctr-column info-item">
								<span class="title-vol5">Categorias</span>
								<span class="text-vol3">${categories}</span>
							</div>
					
							<div class="flex-ctr-column info-item">
								<span class="title-vol5">Ubicacion</span>
								<span class="text-vol3">${location}</span>
							</div>						
					
							<div class="flex-ctr-column info-item">
								<span class="title-vol5">Precios</span>
								<span class="text-vol3 green">${value}/mes</span>
							</div>	

			</div>`
	
}
function teamsAdd()
{
	const temscontent = document.querySelector(".tems-content");
	for(let t in teams)
	{
		let img = teams[t]["img"];
		let title = teams[t]["title"];
		let categories = teams[t]["categories"];
		let location = teams[t]["location"];
		let value = teams[t]["value"];

		
		temscontent.innerHTML+= teamsMain(img,title,categories,location,value,t);
	}

	
}
Beneficios();
teamsAdd();
window.addEventListener('scroll',scrollBen);

/*========================================
=            FUNCIONES SCROLL            =
========================================*/

function beneficiosAct (scrollTop)
{

	
	let rl = 1 ;
	let alturaContainerBen = stnMain.offsetTop;
	for(let  i = 0;  i < jsBen[0].children.length; i++)
	{
		
		if (alturaContainerBen < scrollTop) 
		{

			if (rl == 1) {jsBen[0].children[i].classList.add('animationLeft') ; rl = 0;}
			else if (rl == 0) {jsBen[0].children[i].classList.add('animationRigth'); rl = 1;}
				
		}

	}

}
const stnTeams = document.querySelector('.stn-teams').offsetTop;


function team (scrollTop,teamchild)
{
	let temScroll =  teamsClass[teamchild].offsetTop;

	if(((temScroll / 2 ) + temScroll + stnTeams) < scrollTop) {
	 teamsClass[teamchild].style.transform =`translateY(${teamchild+.5}rem)`;
	 teamsClass[teamchild].style.opacity = '1'
	}
	;
}
/*=====  End of FUNCIONES SCROLL  ======*/
}