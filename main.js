	function calculate(){
			var start = document.getElementById('start').value;
			var stop = document.getElementById('stop').value;

			var cost= 0;

			/*NORTH AVENUE*/

			if (start === "northavenue" && stop === "northavenue") {
			price = 0; }
			else if (start=== "northavenue" && stop === "quezonavenue") {
			price = 13; }
			else if (start === "northavenue" && stop === "kamuning") {
			price = 13; }
			else if (start === "northavenue" && stop === "araneta") {
			price = 16; }
			else if (start === "northavenue" && stop === "ortigas") {
			price = 20; }
			else if (start === "northavenue" && stop === "shaw") {
			price = 20; }
			else if (start === "northavenue" && stop === "boni") {
			price = 20; }
			else if (start === "northavenue" && stop === "buendia") {
			price = 24 }
			else if (start === "northavenue" && stop === "guadalupe") {
			price = 24; }
			else if (start === "northavenue" && stop === "ayala") {
			price = 24; }
			else if (start === "northavenue" && stop === "magallanes") {
			price = 28; }
			else if (start === "northavenue" && stop === "taft") {
			price = 28; }


			if (start==="quezonavenue" && stop === "northavenue") {
			price = 13; }
			else if (start=== "quezonavenue" && stop === "quezonavenue") {
			price = 0; }
			else if (start === "quezonavenue" && stop === "kamuning") {
			price = 13; }
			else if (start ==="quezonavenue" && stop === "araneta") {
			price = 13; }
			else if (start === "quezonavenue" && stop === "santolan") {
			prices = 13; }
			else if (start === "quezonavenue" && stop === "ortigas") {
			price = 16; }
			else if (start === "quezonavenue" && stop === "shaw") {
			price = 16; }
			else if (start === "quezonavenue" && stop === "boni") {
			price = 20; }
			else if (start ==="quezonavenue" && stop === "buendia") {
			price = 24 }
			else if (start === "quezonavenue" && stop === "guadalupe") {
			price = 20; }
			else if (start === "quezonavenue" && stop === "ayala") {
			price = 24; }
			else if (start === "quezonavenue" && stop === "magallanes") {
			price = 28; }
			else if (start === "quezonavenue" && destination === "taft") {
			price = 24; }

			if (start === "kamuning" && stop === "northavenue") {
			price = 13; }
			else if (start==="kamuning" && stop === "quezonavenue") {
			price = 13; }
			else if (start === "kamuning" && stop === "kamuning") {
			price = 0; }
			else if (start === "kamuning" && stop === "araneta") {
			price = 13 }
			else if (start ==="kamuning" && stop === "santolan") {
			price = 13 }
			else if (start === "kamuning" && stop === "ortigas") {
			price = 13; }
			else if (start === "kamuning" && stop === "shaw") {
			price = 16; }
			else if (start === "kamuning" && stop === "boni") {
			price = 20; }
			else if (start === "kamuning" && stop === "buendia") {
			price = 20; }
			else if (start === "kamuning" && stop === "guadalupe") {
			price = 20; }
			else if (start === "kamuning" && stop === "ayala") {
			price = 20; }
			else if (start === "kamuning" && stop === "magallanes") {
			price = 24; }
			else if (start === "kamuning" && stop === "taft") {
			price = 24; }

			if (start=== "araneta" && stop === "northavenue") {
			price = 16; }
			else if (start==="araneta" && stop === "quezonavenue") {
			price = 13; }
			else if (start === "araneta" && stop === "kamuning") {
			price = 13; }
			else if (start === "araneta" && stop === "araneta") {
			price = 0 }
			else if (start ==="araneta" && stop === "santolan") {
			price = 13 }
			else if (start === "araneta" && stop === "ortigas") {
			price = 13; }
			else if (start === "araneta" && stop === "shaw") {
			price = 16; }
			else if (start === "araneta" && stop === "boni") {
			price = 16; }
			else if (start === "araneta" && stop === "buendia") {
			price = 20 }
			else if (start === "araneta" && stop === "guadalupe") {
			price = 20; }
			else if (start === "araneta" && stop === "ayala") {
			price = 20; }
			else if (start === "araneta" && stop === "magallanes") {
			price = 24; }
			else if (start === "araneta" && stop === "taft") {
			price = 24; }

			if (start=== "santolan" && stop === "northavenue") {
			price = 16; }
			else if (start==="santolan" && stop === "quezonavenue") {
			price = 13; }
			else if (start === "santolan" && stop === "kamuning") {
			price = 13; }
			else if (start === "santolan" && stop === "araneta") {
			price = 13 }
			else if (start ==="santolan" && stop === "santolan") {
			price = 0 }
			else if (start === "santolan" && stop === "ortigas") {
			price = 13; }
			else if (start === "santolan" && stop === "shaw") {
			price = 16; }
			else if (start === "santolan" && stop === "boni") {
			price = 16; }
			else if (start === "santolan" && stop === "buendia") {
			price = 20 }
			else if (start === "santolan" && stop === "guadalupe") {
			price = 20; }
			else if (start === "santolan" && stop === "ayala") {
			price = 20; }
			else if (start === "santolan" && stop === "magallanes") {
			price = 20; }
			else if (start === "santolan" && stop === "taft") {
			price = 24; }

			if (start=== "ortigas" && stop === "northavenue") {
			price = 13; }
			else if (start==="ortigas" && stop === "quezonavenue") {
			price = 13; }
			else if (start === "ortigas" && stop === "kamuning") {
			price = 0; }
			else if (start === "ortigas" && stop === "araneta") {
			price = 13; }
			else if (start ==="ortigas" && stop === "santolan") {
			price = 13; }
			else if (start === "ortigas" && stop === "ortigas") {
			price = 13; }
			else if (start === "ortigas" && stop === "shaw") {
			price = 16; }
			else if (start === "ortigas" && stop === "boni") {
			price = 16; }
			else if (start === "ortigas" && stop === "buendia") {
			price = 16 }
			else if (start === "ortigas" && stop === "guadalupe") {
			price = 16; }
			else if (start === "ortigas" && stop === "ayala") {
			price = 20; }
			else if (start === "ortigas" && stop === "magallanes") {
			price = 24; }
			else if (start === "ortigas" && stop === "taft") {
			price = 24; }

			if (start=== "shaw" && stop === "northavenue") {
			price = 20; }
			else if (start==="shaw" && stop === "quezonavenue") {
			price = 20; }
			else if (start === "shaw" && stop === "kamuning") {
			price = 16; }
			else if (start === "shaw" && stop === "araneta") {
			price = 16; }
			else if (start ==="shaw" && stop === "santolan") {
			price = 13; }
			else if (start === "shaw" && stop === "ortigas") {
			price = 13; }
			else if (start === "shaw" && stop === "shaw") {
			price = 0; }
			else if (start === "shaw" && stop === "boni") {
			price = 13; }
			else if (start === "shaw" && stop === "buendia") {
			price = 13; }
			else if (start === "shaw" && stop === "guadalupe") {
			price = 16; }
			else if (start === "shaw" && stop === "ayala") {
			price = 16; }
			else if (start === "shaw" && stop === "magallanes") {
			price = 20; }
			else if (start === "shaw" && stop === "taft") {
			price = 20; }

			if (start === "boni" && stop === "northavenue") {
			price = 20; }
			else if (start==="boni" && stop === "quezonavenue") {
			price = 20; }
			else if (start === "boni" && stop === "kamuning") {
			price = 20; }
			else if (start === "boni" && stop === "araneta") {
			price = 16; }
			else if (start === "boni" && stop === "santolan") {
			price = 16; }
			else if (start === "boni" && stop === "ortigas") {
			price = 13; }
			else if (start === "boni" && stop === "shaw") {
			price = 13; }
			else if (start === "boni" && stop === "boni") {
			price = 0; }
			else if (start === "boni" && stop === "guadalupe") {
			price = 13; }
			else if (start === "boni" && stop === "buendia") {
			price = 13; }
			else if (start === "boni" && stop === "ayala") {
			price = 16; }
			else if (start === "boni" && stop === "magallanes") {
			price = 16; }
			else if (start === "boni" && stop === "taft ") {
			price = 16; }

			if (start=== "guadalupe" && stop === "northavenue") {
			price = 24; }
			else if (start==="guadalupe" && stop === "quezonavenue") {
			price = 20; }
			else if (start === "guadalupe" && stop === "kamuning") {
			price = 20; }
			else if (start === "guadalupe" && stop === "araneta") {
			price = 20; }
			else if (start ==="guadalupe" && stop === "santolan") {
			price = 16; }
			else if (start === "guadalupe" && stop === "ortigas") {
			price = 16; }
			else if (start === "guadalupe" && stop === "shaw") {
			price = 13; }
			else if (start === "guadalupe" && stop === "boni") {
			price = 13; }
			else if (start === "guadalupe" && stop === "guadalupe") {
			price = 0; }
			else if (start === "guadalupe" && stop === "ayala") {
			price = 13; }
			else if (start === "guadalupe" && stop === "magallanes") {
			price = 13; }
			else if (start === "guadalupe" && stop === "taft") {
			price = 16; }

			if (start=== "ayala" && stop === "northavenue") {
			price = 24; }
			else if (start==="ayala" && stop === "quezonavenue") {
			price = 24; }
			else if (start === "ayala" && stop === "kamuning") {
			price = 24; }
			else if (start === "ayala" && stop === "araneta") {
			price = 20 }
			else if (start ==="ayala" && stop === "santolan") {
			price = 20 }
			else if (start === "ayala" && stop === "ortigas") {
			price = 20; }
			else if (start === "ayala" && stop === "shaw") {
			price = 16; }
			else if (start === "ayala" && stop === "boni") {
			price = 16; }
			else if (start === "ayala" && stop === "guadalupe") {
			price = 13; }
			else if (start === "ayala" && stop === "buendia") {
			price = 13; }
			else if (start === "ayala" && stop === "ayala") {
			price = 0; }
			else if (start === "ayala" && stop === "magallanes") {
			price = 13; }
			else if (start === "ayala" && stop === "taft") {
			price = 13; }

			if (start=== "magallanes" && stop === "northavenue") {
			price = 28; }
			else if (start==="magallanes" && stop === "quezonavenue") {
			price = 24; }
			else if (start === "magallanes" && stop === "kamuning") {
			price = 24; }
			else if (start === "magallanes" && stop === "araneta") {
			price = 24 }
			else if (start ==="magallanes" && stop === "santolan") {
			price = 20 }
			else if (start === "magallanes" && stop === "ortigas") {
			price = 20; }
			else if (start === "magallanes" && stop === "shaw") {
			price = 20; }
			else if (start === "magallanes" && stop === "boni") {
			price = 16; }
			else if (start === "magallanes" && stop === "guadalupe") {
			price = 16; }
			else if (start === "magallanes" && stop === "buendia") {
			price = 13; }
			else if (start === "magallanes" && stop === "ayala") {
			price = 13; }
			else if (start === "magallanes" && stop === "magallanes") {
			price = 0; }
			else if (start === "magallanes" && stop === "taft") {
			price = 13; }


			if (start=== "taft" && stop === "northavenue") {
			price = 28; }
			else if (start==="taft" && stop === "quezonavenue") {
			price = 28; }
			else if (start === "taft" && stop === "kamuning") {
			price = 24; }
			else if (start === "taft" && stop === "araneta") {
			price = 24 }
			else if (start ==="taft" && stop === "santolan") {
			price = 24 }
			else if (start === "taft" && stop === "ortigas") {
			price = 20; }
			else if (start === "taft" && stop === "shaw") {
			price = 20; }
			else if (start === "taft" && stop === "boni") {
			price = 20; }
			else if (start === "taft" && stop === "guadalupe") {
			price = 16; }
			else if (start === "taft" && stop === "buendia") {
			price = 16; }
			else if (start === "taft" && stop === "ayala") {
			price = 13; }
			else if (start === "taft" && stop === "magallanes") {
			price = 13; }
			else if (start === "taft" && stop === "taft") {
			price = 0; }

			document.getElementById('change1').innerHTML=  ('P' + price);

			}

