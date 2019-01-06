# Site pour la conférence [Codeurs en seine](http://www.codeursenseine.com)

![Logotype de Codeurs en Seine](images/codeurs-en-seine-logo.png)

Codeurs en Seine est une journée de conférences gratuite qui se déroule à Rouen,
pour découvrir, apprendre et partager autour du monde du développement.


## Contribution

Vous trouvez que quelque chose manque au site ? ➡️ les pull requests sont les bienvenues !

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

### Ajout de nouveaux orgas

- Pull la dernière version du git (branche `gh-pages`)
- Modifier le fichier `_data/edition2018/organisateurs.yml 
- Ajouter la photo (même nom que défini avant dans le yml) en 100x100px dans `images/edition2018/organisateurs`
- Puis commit et push sur la branche

### Ajout d'un meetup

- Pull la dernière version du git (branche `gh-pages`)
- Créer un fichier a la date du jour (important pour voir la publication) dans _posts/meetups en copiant/collant le fichier `2001-01-01-example-meetup.md`.   
Exemple: `2018-12-25-meetup.md`
- Modifier ce fichier `.md` avec les bonnes informations
- Ajouter la photo du speaker dans `images/meetups/speakers`
- Puis commit et push sur la branche

### Créer une version du site pour une nouvelle année

Chaque année on archive l'ancien site (toujours dispo en ligne) et on met en place une nouvelle version du site.

Dans les étapes suivantes, le `[prevYear]` et `[newYear]` sont à remplacer par l'année précédente et la nouvelle année. Exemple pour créer le site `2019`, `[prevYear]` est à remplacer par `2018` et `[newYear]` par `2019`.

##### Créer le nouveau layout
  - Dupliquer le fichier `_layouts/edition[prevYear].html` avec le nom `edition[newYear].html`.
  - Dupliquer le fichier `_layouts/edition[prevYear]-with-sponsors.html` avec le nom `edition[newYear]-with-sponsors.html`.
  - Remplacer `[prevYear]` par `[newYear]` dans les fichiers suivants :
      - `_layouts/edition[newYear].html`
      - `_layouts/edition[newYear]-with-sponsors.html`
      - `_layouts/devoxx4kids.html`
      - `_layouts/meetups.html`
  
#### Dupliquer les données
  - Dupliquer les dossier `edition[prevYear]` avec le nom `edition[newYear]` dans les dossiers suivants `_data`, `_includes`, `css`, `images`, `js`, `pages`
  - Remplacer `[prevYear]` par `[newYear]` dans les fichiers suivants :
    - `_includes/edition[newYear]/talks-panels.html`
    - `_includes/edition[newYear]/layout/navbar.html`
    - `_includes/edition[newYear]/layout/page-header.html`
    - `_includes/edition[newYear]/layout/topbar.html`
    - `css/edition[newYear]/billetweb.scss`
    - `css/edition[newYear]/style.scss`
    - `pages/edition[newYear]/*.html`

#### Editer la configuration
  - Dans le fichier `_config.yml`, éditer l'url :
```
...
url: https://www.codeursenseine.com/[newYear]
...
```

  - Dans le fichier `_config.yml`, ajouter l'édition [newYear] :
```
edition[newYear]:
  pretitle: "Rencontre de codeuses & codeurs à Rouen"
  title: "Édition [newYear]"
```
  
  - Editer le fichier `index.html` avec la ligne suivante : 
```
<meta http-equiv="refresh" content="0; url=/[newYear]">
```

#### Ajouter le lien vers la version précédente

  - Dans le fichier `_includes/edition[newYear]/layout/navbar.html` ajouter le lien vers la version [prevYear] dans la navigation.
```
<a href="/[prevYear]/" target="_blank">
  [prevYear]
</a>
```

#### Ajouter une information dans la version précédente du site

  - Dans le ficher `_includes/edition[prevYear]/layout/page-header.html` ajouter à la fin du fichier :
```
<div class="ces-c-card is-danger ces-h-mb-md">
  <div class="ces-l-grid is-middle is-auto">
    <div class="ces-l-grid__item">
      Vous visitez le site d'une <strong>édition précédente</strong>.
    </div>
    <div class="ces-l-grid__item is-push">
      <a href="/[newYear]" class="ces-c-button is-block">
        Voir l'édition [newYear]
      </a>
    </div>
  </div>
</div>
```

#### Nettoyer le nouveau site

- Masquer les pages non à jour en ajoutant `published: false` dans le header des pages suivantes :
  - `pages/edition[newYear]/agenda.html`
  - `pages/edition[newYear]/inscription.html`
  - `pages/edition[newYear]/speakers.html`
  - `pages/edition[newYear]/where.html`
  
- Mettre à jour la page d'accueil `pages/edition[newYear]/home.html`

- Supprimer les anciens sponsors dans le fichier `_data/edition[newYear]/sponsors.yml`
