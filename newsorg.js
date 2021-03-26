var datatable_dataset = [];

var request = new XMLHttpRequest();
request.open("GET","https://newsapi.org/v2/everything?q=bitcoin&apiKey=7b7861df0dbc49f6bb9101bbc2633a02");
request.send();
request.onload = () => {
	if (request.status == 200) {
		var apiResponse = JSON.parse(request.response);
		
		apiResponse.articles.forEach(element => {

			var temp_arr = [];
			temp_arr.push(element.source.id);
			temp_arr.push(element.source.name);
			temp_arr.push(element.author);
			temp_arr.push(element.publishedAt);

			datatable_dataset.push(temp_arr);

		});

		$('#example').DataTable( {
			data: datatable_dataset,
			columns: [
				{ title: "Source Id" },
				{ title: "Source Name" },
				{ title: "Author" },
				{ title: "Published At" }
			]
		} );

	} else{
		console.log(`error ${request.status} ${request.statustext}`)
	}
}