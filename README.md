# Leikkipaikkojen melutasot  
ICT-Campin projekti  

## Perusvaatimukset työkaluista joita tarvitset

1. git: Asenna git https://git-scm.com/downloads
2. python: Asenna python(Hox! saatat tarvita eri kirjastoja, ne selitetään sovelluskohtaisissa ohjeissa): https://www.python.org/downloads/
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
Frontille ja backille omat kansiot  
master brachilla toistaiseksi toimivin toteutus  
develop branch josta jokainen kehittäjä tekee aina uuden branchin kun tekee uutta toiminnallisuutta  

## Muuta  
Linkki tuotteen toiminnan kuvaukseen: https://docs.google.com/presentation/d/1Occx07DRauU5S544Curdi1EFMcmJhN1ZxQm76jIDfd4/edit?usp=sharing  

## Frontendin pyörittäminen (windows)

1. Mene komentokehotteessa (cmd tai windows powershell tjsp) projektin \frontend\ hakemistoon (folder) 
2. Frontendin readmessa on lyhyet komennot ja selitykset sen ajamiseen.
3. Aja kuitenkin ensin komento "npm install"
4. Aja "npm start" selainikkuna frontendiin aukeaa
5. Kun haluat lopettaa, paina "ctrl-c" komentokehoitteessa ja sulje selainikkuna

## Backend Serverin pyörittäminen (Windows)

1. Navigoi tiesi \backend\ folderiin cmd:ssä. Komennolla "cd <dir name>" pääsee siirtymään.
2. Komennolla "python manage.py runserver" lähtee käytiin.
3. Kopioi cmd:n tarjoama url http://127.0.0.1:8000/

HUOM! Tällä hetkellä tuloksia taitaa löytyä vain välilehdelle /map/
