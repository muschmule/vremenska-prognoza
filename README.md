# vremenska-prognoza


Zavrsni rad:
Vremenska prognoza

Tema zavrsnog rada je vremenska prognoza koja na osnovu pretrage po imenu grada prikazuje vremensku prognozu za 5 dana. 

Parametri koje prognoza prikazuje su sledeci:

-Grad i drzava
-trenutna temperatura (°C) 
-jacina vetra (m/s)
-opis vremenskih prilika 
-minimalna i maksimalna temperatura za naredna 4 dana

U procesu razvoja su korisceni:

- API sa https://openweathermap.org za temperaturu, jacinu vetra i opis vremenskih prilika
- API sa https://opencagedata.com/ u cilju prikazivanja minimalne i maksimalne dnevne temperature.

Struktura:

-HTML
-CSS
-JS

Opis:

Za ovaj projekat je koriscen JSON, kao tekstualna forma za razmenu podataka, u sklopu JavaScripta, u vidu metode $.getJSON() cime bi kao odgovor sa servera dobili Objekat sa svim potrebnim podacima za vremensku prognozu.

Funkcije koriscene u ovom projektu se nalaze unutar dogadjaja na klik (onclick Event) i njihovim izvrsavanjem se hvataju podaci iz Objekta dobijenog sa servera i smestaju u HTML elemente. Takodje, jednom od funkcija (kToC()) se vrsi konvertovanje temperature izrazene u Kelvinima u stepene Celzijusa, kao i formatiranje prikaza dana u nedelji funkcijom dayOfTheWeek(timestamp).

Prikaz sajta je responsive, prilagodjen za 3 razlicite velicine ekrana: 

-desktop 
-tablet 
-mobilni telefon
