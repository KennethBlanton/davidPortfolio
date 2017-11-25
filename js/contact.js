let content
let formContent = document.querySelector('form').children;


// document.querySelector('form').addEventListener('submit', (e)=> {
//   e.preventDefault();

//   for (var i = formContent.length - 1; i >= 0; i--) {
//   	if(formContent[i].value){
//     	content += "|"+ formContent[i].value + '|';
//   	}
//   }

//   console.log(content)
// 	fetch('http://circuslabs.net/~kenneth.blanton/portfoliov3/processRequests.php', {
// 	  method: 'post',
// 	  headers: {
// 	    'Content-Type': 'application/json'
// 	  },
// 	  body: content
// 	}) 
// 	.then(response => response.json())
//   	.then(data => console.log('data is', data))
// })
