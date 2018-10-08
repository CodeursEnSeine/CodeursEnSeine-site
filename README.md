# Site pour la conférence [Codeurs en seine](http://www.codeursenseine.com)

![Logotype de Codeurs en Seine](images/legacy/logo-codeurs-en-seine-big.png)

Codeurs en Seine est une journée de conférences gratuite qui se déroule à Rouen,
pour découvrir, apprendre et partager autour du monde du développement.

### Execution en local
#### Requis
Pour installer jekyll : https://jekyllrb.com/docs/installation/#ubuntu

Installation des dépendances requises :

* ```gem install bundler```
* ```bundle```

#### Démarrage du site en local 
* ```jekyll serve --watch``` 

ou 

* ```bundle exec jekyll serve --watch```

Essayez cette commande si vous n'arrivez pas à lancer le site : `bundle update`

### Contribution

Vous trouvez que quelque chose manque au site ? ➡️ les pull requests sont les bienvenues !

#### Ajout de nouveaux orgas
Pull la dernière version du git
Modifier le fichier _data/edition2018/organisateurs.yml 
Ajouter la photo (même nom que défini avant dans le yml) en 100x100px dans images/edition2018/organisateurs
Puis commit et push sur la branche
