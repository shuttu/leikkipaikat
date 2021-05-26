# Leikkipaikkojen melutasot  
ICT-Campin projekti  

## Perusvaatimukset työkaluista joita tarvitset

1. git: Asenna git https://git-scm.com/downloads
2. python: Asenna python(Hox! saatat tarvita eri kirjastoja, ne selitetään sovelluskohtaisissa ohjeissa, ja ruksi se chekbox että asenna PATH): https://www.python.org/downloads/
3. Node.js: https://nodejs.org/en/download/

## Kloonaus omalle koneelle  
Luo itsellesi HTTPS Git credentials for AWS CodeCommit  
AWS->hakuun IAM->Users->Oma nimi->Security credentials->HTTPS Git credentials Generate credentials ja ota talteen  
Omalla koneella komentoriviltä halutussa kansiossa seuraava komento:
```
git clone https://git-codecommit.eu-west-1.amazonaws.com/v1/repos/leikkipaikat  
```
Tämän jälkeen AWS kysyy kättäjänimeä ja salasanaa, jonne tulee juuri tuo äsken luomasi HTTPS tunnus ja salasana.
HOX! Kun ja jos copy pastaatte tuon, niin olkaa tarkkana ettei eteen tai perään jää välilyöntejä tms

## Rakenne ja käyttö  

Trello linkki dokumentaatioon: https://trello.com/b/t8mO80Gv/dokumentaatio-leikkipaikat-ja-melutaso

Frontille ja backille omat kansiot  
master brachilla toistaiseksi toimivin toteutus  
develop branch josta jokainen kehittäjä tekee aina uuden branchin kun tekee uutta toiminnallisuutta  

Oman feature branchin teko (tai workflow tjsp):

Linkki: https://docs.google.com/presentation/d/1zhPJOWPtG8_flHrIbqR049FGxzwZ8bcMKHlCeQ-kBuY/edit#slide=id.p

$git checkout develop

Tee oma

$git checkout -b <oma-branch> (tämä komento sekä luo uuden branchin että siirtyy siihen)

tai kahdella komennolla

$git branch <oman-branch>

$git checkout <oman-branch>

Tee tarvittavat muutokset ja testaan kun olet valmis

$ git commit -a -m 'muutoksia haaraan <oman-branch>'

Tässä vaiheessa pitäise tehdä se ”pull request siellä CodeCommitissa jotta joku tiimistä voi tarkistaa ehdotetut muutokset. HOX! muistakaa että muutokset tehdään develop-haaraan, ei masteriin
Kun pull request on hyväksytty voi mergen tehdä joko CodeCommitissa tai komentorivilla

$git checkout develop

$git pull (tällä komennolla uusimmat muutokset developista omaan lokaaliin)

$git merge oma <oman-branch>

Ja sitten kojaillaan mahdolliset merge konfliktit (edited) 

## Muuta  
Linkki tuotteen toiminnan kuvaukseen: https://docs.google.com/presentation/d/1Occx07DRauU5S544Curdi1EFMcmJhN1ZxQm76jIDfd4/edit?usp=sharing  

Frontendin pyörittäminen (windows)

Esivaatiumus: Asenna Node.js koneellesi osoitteesta https://nodejs.org/en/download/

1. Mene komentokehotteessa (cmd tai windows powershell tjsp) projektin \frontend\ hakemistoon (folder) 
2. Frontendin readmessa on lyhyet komennot ja selitykset sen ajamiseen. Aja kuitenkin ensin komento "npm install"
3. Aja "npm start" selainikkuna frontendiin aukeaa
4. Kun haluat lopettaa, paina "ctrl-c" komentokehoitteessa ja sulje selainikkuna

Backend Serverin pyörittäminen (Windows)

Perusvaatimus: Sinun tulee asentaa seuraavat python paketit (packages) komennolla: pip install <paketin nimi>

HOX! Meillä oli vaikeuksia windows powershellin kanssa, käyttäkää normaalia cmd komentutulkkia

Paketit:

django

folium

requests

django-cors-headers


1. Navigoi tiesi \backend\ folderiin cmd:ssä. Komennolla "cd <dir name>" pääsee siirtymään.
2. Komennolla "python manage.py runserver" lähtee käytiin.
3. Täältä löytyy sitten selaimessa lopputuotos: http://127.0.0.1:8000/map/


