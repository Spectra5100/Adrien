<?php
$file = 'visites.txt';

// Lire le compteur actuel
if(file_exists($file)){
    $visites = (int)file_get_contents($file);
}else{
    $visites = 0;
}

// Incrémenter le compteur
$visites++;

// Sauvegarder le nouveau compteur
file_put_contents($file, $visites);

// Afficher le compteur
echo $visites;
?>
