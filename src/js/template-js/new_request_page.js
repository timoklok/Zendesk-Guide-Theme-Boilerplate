var field_data = {
  description: `
	
Licht het probleem kort toe. Is het een technisch probleem? Beantwoord dan ook de volgende vragen:

Op welk apparaat heb je het probleem gevonden?
  - Heb je een Apple-product? Geef dan aan welke macOS- of iOS-versie je gebruikt.
  - Of heb je een Android product? Geef dan aan welke Android-versie je gebruikt.
  - Welke browser gebruik je? En welke versie is dit?
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
});
