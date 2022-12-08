 
const icons = [
{img:"images/iconosFut/Ajax-Logo.png",
 name:"La Islita",
 cad:"2000-2014",
 fundation:"2010",
 port:"https://estaticos-cdn.prensaiberica.es/clip/b8ef939c-db8d-415b-b73b-4c1fd43bb148_16-9-aspect-ratio_default_0.jpg"},
{img:"images/iconosFut/AltoImpacto.png",
 name:"Alto Impacto",
 cad:"2001-2014",
 fundation:"2018",
 port:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSW5qBDoLZb51P6l08P2RBMLuakP0Kwhr4OJOoUKDEtsGTEJ8ld7WqTLLXJK-ikhMTg8c&usqp=CAU"},
{img:"images/iconosFut/FcAm.png",
 name:"Fc Arm",
 cad:"2000-2014",
 fundation:"2015",
 port:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbb3jOJziNfvv6hWeJ-UB3iDrHoQuhJcraQ&usqp=CAU"},
{img:"images/iconosFut/FcAm.png",
 name:"Fc Arm",
 cad:"2000-2014",
 fundation:"2015",
 port:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qk3MdX23tz4-PhBJoSZoClNr_mDhcUTjnQ&usqp=CAU"},
{img:"images/iconosFut/Ajax-Logo.png",
 name:"La Islita",
 cad:"2000-2014",
 fundation:"2010",
 port:"https://estaticos-cdn.prensaiberica.es/clip/b8ef939c-db8d-415b-b73b-4c1fd43bb148_16-9-aspect-ratio_default_0.jpg"},
{img:"images/iconosFut/AltoImpacto.png",
 name:"Alto Impacto",
 cad:"2001-2014",
 fundation:"2018",
 port:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSW5qBDoLZb51P6l08P2RBMLuakP0Kwhr4OJOoUKDEtsGTEJ8ld7WqTLLXJK-ikhMTg8c&usqp=CAU"},
{img:"images/iconosFut/FcAm.png",
 name:"Fc Arm",
 cad:"2000-2014",
 fundation:"2015",
 port:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbb3jOJziNfvv6hWeJ-UB3iDrHoQuhJcraQ&usqp=CAU"},
{img:"images/iconosFut/FcAm.png",
 name:"Fc Arm",
 cad:"2000-2014",
 fundation:"2015",
 port:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqv50q6gmTKyzRnKdBrhN32DNBaozasABEF0Uz2QiqrzKwSp3voMIsWrTzI_8aT5fFT9Q&usqp=CAU"},
{img:"images/iconosFut/Galacticos.png",
 name:"Galacticos",
 cad:"2005-2010",
 fundation:"2005",
 port:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qk3MdX23tz4-PhBJoSZoClNr_mDhcUTjnQ&usqp=CAU"}];

 const clubs =(img,name,cad,fundation,port,i)=>
{
	let codeHtml = `
	<li class="wrap-item">	
			<a href="" class="flex-ctr">
				<div class="flex-ctr-column	 jus-ctr-not p-0 wrap-cont colrs${i}">
					
					
					<div class="flex-ctr-column p-0  bavk-white ">
						<label class="text-v6 pdg-1 colrs-text${i}">${name}</label>
						<label class="text-v3 colrs-text2${i}">${cad}</label>

					</div>
					<div class="img-club">
						<canvas id="canvas${i}" ></canvas>
					</div>
					<div class="flex-ctr"><span class="text-v4-funt  ">Fundacion ${fundation}</span></div>
					

				</div>
				<div class="flex-ctr circle"> 
						<img src="${img}" alt="" class="img-club-50">
				</div>
			</a>
	</li>`;
			return codeHtml;
}





export const fracmentClubs=()=>
{


	cicloClub();
}
  






const cicloClub = async()=>
{
	const canvas=[];
	const colrs=[];
	const colrsText=[];
	const colrsText2=[];
	const ctx=[];
	const image=[];
	const backArray=[];
	const items = [];

let contentClubs = document.getElementById("content-clubs");



	
	for(let i in icons )
	{
		

		
	items[i] =  await club(i,contentClubs,canvas,colrs,ctx,image,backArray,colrsText,colrsText2); 
	


	
		
		// colrs.style.backgroundColor = renderPokemon(icons[i]["port"],ctx,canvas,image);
		
	}
	

 console.log(items)

}




const club =(i,contentClubs,canvas,colrs,ctx,image,backArray,colrsText,colrsText2)=> 
{

	return new Promise((resolve,reject)=>
				{
			
			

		contentClubs.innerHTML += clubs(icons[i]["img"],icons[i]["name"],icons[i]["cad"],icons[i]["fundation"],icons[i]["port"],i);

		

	
    	canvas[i] = document.getElementById(`canvas${i}`);

		colrs[i] = document.querySelector(`.colrs${i}`);
		colrsText[i] = document.querySelector(`.colrs-text${i}`);
		colrsText2[i] = document.querySelector(`.colrs-text2${i}`);

		ctx[i] = canvas[i].getContext('2d');
	
    	
    	 

    	back(icons[i]["port"],ctx[i],canvas[i],image[i]).then((resul)=>{backArray[i] = resul;

    		

    		let colorRgb = `rgb(${backArray[i][0][0]}, ${backArray[i][0][1]}, ${backArray[i][0][2]})`
    	
    		colrs[i].style.backgroundColor =colorRgb;
    		colrsText[i].style.color =colorRgb;
    		colrsText2[i].style.color =colorRgb;

    		canvas[i].style.background = `url("${icons[i]["port"]}")`
    		canvas[i].style.backgroundSize = 'cover';
    		resolve("complet")
    	});

				})
}





const back = async(imgCod,ctx,canvas,image)=> 
{

    	let ack = await renderPokemon(imgCod,ctx,canvas,image);
    	return ack;
		
}


    const  renderPokemon = (imgCod,ctx,canvas,image)=> {
    
      return new Promise((resolve,reject)=>
	{
			image = new Image();

    	image.setAttribute('crossOrigin', 'anonymous');
		image.setAttribute('src', imgCod)
     	image.addEventListener('load', () => {
      
        ctx.drawImage(image,0, 0, canvas.width, canvas.height)
          
        
        	    resolve(getColorPalette(ctx,canvas));
      
    

      });

	})

    }



    function getColorPalette(ctx,canvas) {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const quality = 90;
      const coloresTotales=[];
      
      let contador = 0 ;

      for (let i = 0; i < canvas.width * canvas.height; i = i + quality) {
        const offset = i * 4
        const alpha = imgData[offset + 3]
        if (alpha > 0) {
          const red = imgData[offset];
          const green = imgData[offset + 1];
          const blue = imgData[offset + 2];
         	const colors =[];
          colors.push(red);
          colors.push(green);
          colors.push(blue);
      
         coloresTotales.push(colors);
        
          
           
        
          
        }
      }
     
       

      let CDP = 0 ; 
      let colorDomin = [];
       for (let i of coloresTotales)
       {

     	let totalAc = 0 ;
     		for(let x of coloresTotales)
     		{



     			
     			if(i[0] == x[0] && i[1] == x[1] &&i[2] == x[2] )
     			{
     				totalAc += 1 ; 
     				
     					

     			}

     		}
     		if(totalAc > CDP)
     		{
     			CDP = totalAc;
     			colorDomin[0] = i;
     		}

       }
       console.log(colorDomin[0])

   			
      // console.log('%c color', `background: rgba(${colors[0]["red"]}, ${colors[0]["green"]}, ${colors[0]["blue"]})`)
      
      return colorDomin
    }

