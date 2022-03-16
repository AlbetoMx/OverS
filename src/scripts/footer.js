import {indexPage} from './function.js';
let codeHtml = `

		 <div class="footer flex-ctr-wrap p-0 ">

		 	<div class="flex-ctr-wrap contact">
		 		<a href=""><img src="images/Contact/facebook.png" alt=""></a>
				<a href=""><img src="images/Contact/instagram.png" alt=""></a>
				<a href=""><img src="images/Contact/gmail.png" alt=""></a>
				<a href=""><img src="images/Contact/whatsapp.png" alt=""></a>
		 	</div>
		 	<div class="item span-t1">
		 		<span> @copyright OverS</span>
		 		<span>Marmolejo Valle Alberto</span>
		 	</div>
		 </div>


`;
export const footer = ()=>  indexPage(codeHtml,"FOOTER");