export const events = ()=>
{

	const singIn = document.getElementById("singIn");
	const singUp = document.getElementById("singUp");
	const forms = document.getElementById("Forms");
	
	

	

	


	singIn.addEventListener("click",()=>
	{
		singIn.classList.add("clickSing");
		singUp.classList.remove("clickSing");
		let codeHtml =`
						<form action="" class="flex-ctr-column p-0  li-p " id="singInForm">
							
							<li>
								<img src="images/usuario.png" alt="" class="img-min"><input type="text" class="input-v4" placeholder="Username">
							</li>
							<li>
								<img src="images/lock.png" alt="" class="img-min"><input type="password" class="input-v4" placeholder="Password">
							</li>
							<button type="submit" class="btn-v5">Sing in</button>
							
						</form>	`;
		forms.innerHTML = codeHtml;
		const singInForm = document.getElementById("singInForm");

		singInForm.classList.add("sing");
		

	});

	singUp.addEventListener("click",()=>
	{
		singUp.classList.add("clickSing");
		singIn.classList.remove("clickSing");
				let codeHtml =`
						<form action="" class="flex-ctr-column p-0  li-p " id="singUpForm">
							
							<li>
								<img src="images/usuario.png" alt="" class="img-min"><input type="text" class="input-v4" placeholder="Username">
							</li>
							<li>
								<img src="images/logotipo-de-gmail.png" alt="" class="img-min"><input type="text" class="input-v4" placeholder="Email">
							</li>
							<li>
								<img src="images/lock.png" alt="" class="img-min"><input type="password" class="input-v4" placeholder="Password" >
							</li>
							<button type="submit" class="btn-v5">Sing up</button>
							
						</form>	`;

		forms.innerHTML = codeHtml;
		const singUpForm = document.getElementById("singUpForm");
		singUpForm.classList.add("singL");
		
				
				
		
	});

}