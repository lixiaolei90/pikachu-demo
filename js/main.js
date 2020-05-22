!function() {
	function writeCode(pre, code, fn) {
		let container = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		console.log(code)
		let timer = setInterval(()=>{
			n += 1
			container.innerHTML = code.substring(0, n)
			styleTag.innerHTML = code.substring(0, n)
			if(n >= code.length){
			clearInterval(timer)
		}
		},200)
		

	}
	writeCode('', "123456")
}.call()