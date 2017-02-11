# TzenTzen
Projet WEB client et server side - SI5

## Présentation du sujet
Des équipes se promènent dans une zone géographique avec leurs smartphones et font tourner l’appli des “joueurs”. Elles doivent atteindre des lieux pour déclencher des énigmes, répondre aux questions ou remplir les conditions demandées, puis on leur donne une nouvelle destination qu’ils doivent atteindre, etc.
Les énigmes démarrent donc lorsqu’on entre dans une zone (cercle sur la carte). Les smartphones qui ont lancé l’application du jeu déclenchent alors des notifications et un nouvel écran affiche les étapes de l’énigme (la première étape active, les autres en grisé ou bien n’apparaissent pas encore). Par exemple, on affiche un fragment mystérieux de photo (ex: un bout de plaque d’un immeuble, un pied de statue, un panneau, etc.) et l’équipe doit localiser l’endroit et indiquer dans un champ de texte de quoi il s’agit, ou mieux, doit envoyer la photo de l’objet complet. Autre possibilité, une question avec plusieurs réponses possibles (nombre d’essais limités), il faut observer l’environnement pour répondre (de quelle couleur est le vieux sage qui a créé Sophia-Antipolis ?, la réponse est bleue car le créateur de Sophia Antipolis est le sénateur Lafitte, et vous êtes en ce moment sur la place Sophie Laffitte. Sur la place quelque part, figure un buste du Sénateur que des étudiants en Bizutage ont peint en bleu à ce moment là), etc…
L’application mobile permet aussi de chatter librement avec les “maîtres du jeu”, voir de les appeler au tel (le No est affiché) en cas de détresse (on comprend vraiment rien). On pourra aussi prévoir de l’affichage d’indice mais ça enlèvera des points à la fin, lors du calcul du score final. Cet aspect est optionnel, à vous de voir comment vous pensez qu’un jeu de piste doit se dérouler pour que cela soit fun ! Si vous avez d’autres idées, on en discutera. 

## Comment lancer notre application ?
Notre serveur est déployé sur Heroku (https://web-map-project-si5.herokuapp.com/). Sur ce serveur, on a la possibilité de :
<ul>
<li> Voir et valider les réponses des joueurs aux énigmes ; </li>
<li> Voir la liste des équipes participantes ; </li>
<li> Ajouter une énigme ; </li>
<li> Chatter avec les joueurs, afin de pouvoir leur donner des indices si ils sont en difficulté. </li>
</ul>
<br />
Notre client est codé avec la technologie ionic et est donc cross-platform. On peut le déployer sur un web-browser (si on ne souhaite pas le déployer sur son téléphonne) avec la commande `ionic serve`. Si on souhaite le déployer sur son téléphone, il suffit d'effectuer la commande suivante :
<br />
`ionic run android` pour un téléphonne sous Android. <br />
Pour un téléphonne sous iOS, il faut créer un compte <i>Apple Developer</i>(cela est cependant payant et coûte $99 par an).

## Points forts et points faibles
### Points forts
<ul>
<li> Ajout d'énigme avec image que le client peut voir. </li>
<li> Localisation GPS du client en utilisant les capteurs du téléphonne. </li>
<li> Chat utilisant les web socket pour une communication en temps réel. </li>
<li> Possibilité d'upload des images du téléphonne vers le serveur. </li>
<li> Un serveur web avec une interface responsive. </li>
<li> Un client cross-platform. </li>
</ul>
### Points faibles
