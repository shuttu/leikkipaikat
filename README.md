# Leikkipaikkojen melutasot  
ICT-Campin projekti  
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