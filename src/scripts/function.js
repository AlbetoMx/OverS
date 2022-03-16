export  function indexPage(code,element,clss) {
	

	let ips = document.getElementById("ips"); 
	const Page  = document.createElement(`${element}`);
	Page.innerHTML = code;
	if (clss !== undefined) Page.classList.add(clss);
	return body.insertBefore(Page,ips);
}
