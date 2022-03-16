import {indexPage} from '../function.js';
let codeHtml = `
<div class="with70-center flex-ctr-wrap ">
			
	<div class="img-back-cover">
			
	</div>
			<div class="bkgrod-gray flex-ctr">


			<div class="backgrond-black flex-ctr-column" >
				<div class="flex-ctr flex-star tfm-Y-1 li-Di ">
					<div>
						<span class="nav-session__span bor-ra-0 mgn-1" id="singIn">Sing in</span>
					</div>
					<div>
						<span class="nav-session__span bor-ra-0 mgn-1" id="singUp">Sing up</span>
					</div>
				</div>				

				<div id="Forms" style="height: 70%;">

				</div>
						
			</div>	
			

			</div>

			
</div>
`;

export const main = ()=>  indexPage(codeHtml,"MAIN",'flex-ctr');