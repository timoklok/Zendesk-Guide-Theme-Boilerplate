var field_data = {
  description: `
	
Licht het probleem kort toe. Is het een technisch probleem? Beantwoord dan ook de volgende vragen:

Meld je een probleem met een website? Ga dan naar https://www.whatsmybrowser.org/ en plak hier de link zodat we weten op welk systeem je de website bekijkt. 
...

Hoe heb je het probleem ontdekt?
...

Welk resultaat had je verwacht?
...

En welk resultaat kreeg je?
...

(Voeg indien mogelijk een screenshot toe in de bijlage.)`, // description
};

jQuery(function ($) {
  if (!$("#new_request")) return;

  for (var k in field_data) {
    $("#request_" + k).val(field_data[k]);
  }

  $("#upload-dropzone span").html(
    "<a>Klik hier om bestanden toe te voegen</a> of sleep bestanden hier naartoe"
  );
});
