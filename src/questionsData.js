const questionsData = [
    {
        category: "Agents Intelligents",
        scenario: "Vous concevez un agent pour jouer à un jeu vidéo.",
        question: "Selon la définition du cours, quelle est la caractéristique fondamentale d'un agent intelligent ?",
        options: [
            "Sa capacité à résoudre tous les problèmes.",
            "Sa capacité à simuler l'intelligence humaine.",
            "Sa capacité à percevoir son environnement et à agir rationnellement pour atteindre ses objectifs.",
            "Sa capacité à apprendre de ses erreurs."
        ],
        correctAnswer: "Sa capacité à percevoir son environnement et à agir rationnellement pour atteindre ses objectifs.",
        explanation: "Un agent intelligent est défini par sa rationalité, c'est-à-dire sa capacité à choisir les actions qui maximisent ses performances en fonction de ses perceptions."
    },
    {
        category: "Rationalité",
        scenario: "Un agent rationnel doit prendre une décision.",
        question: "Qu'est-ce qui caractérise principalement la rationalité d'un agent ?",
        options: [
            "Choisir l'action qui mène toujours au succès.",
            "Choisir l'action qui maximise la performance espérée, compte tenu de ses connaissances.",
            "Choisir l'action la plus rapide.",
            "Choisir l'action la plus complexe."
        ],
        correctAnswer: "Choisir l'action qui maximise la performance espérée, compte tenu de ses connaissances.",
        explanation: "La rationalité ne garantit pas le succès (l'agent peut se tromper), mais vise à maximiser la performance *espérée* sur la base des informations disponibles et des connaissances de l'agent."
    },
    {
        category: "Types d'Environnements",
        scenario: "Dans un jeu d'échecs contre un ordinateur.",
        question: "Comment qualifier l'environnement de jeu d'échecs en termes d'agents ?",
        options: [
            "Monoagent",
            "Multiagent coopératif",
            "Multiagent compétitif (concurrentiel)",
            "Environnement sans agent"
        ],
        correctAnswer: "Multiagent compétitif (concurrentiel)",
        explanation: "Le jeu d'échecs implique deux agents (joueurs) qui sont en compétition directe, chacun cherchant à maximiser sa performance au détriment de l'autre."
    },
    {
        category: "Propriétés de l'Environnement",
        scenario: "Un agent aspirateur doit nettoyer une pièce. L'état de la pièce (propre ou sale) au prochain instant dépend uniquement de l'action de l'aspirateur.",
        question: "Comment qualifier l'environnement de l'aspirateur en termes de déterminisme ?",
        options: [
            "Stochastique",
            "Partiellement déterministe",
            "Déterministe",
            "Imprévisible"
        ],
        correctAnswer: "Déterministe",
        explanation: "Dans un environnement déterministe, le prochain état est complètement déterminé par l'état actuel et l'action exécutée par l'agent. L'action de l'aspirateur détermine directement si la case devient propre."
    },
    {
        category: "Types d'Agents",
        scenario: "Un agent doit conduire une voiture autonome.",
        question: "Pour la conduite autonome, quel type d'agent semble le plus adapté pour gérer la complexité et l'incertitude de l'environnement routier ?",
        options: [
            "Agent réflexe simple",
            "Agent réflexe basé sur un modèle",
            "Agent basé sur un but",
            "Agent basé sur l'utilité"
        ],
        correctAnswer: "Agent basé sur l'utilité",
        explanation: "Un agent basé sur l'utilité est capable de prendre des décisions complexes en considérant différents objectifs (sécurité, rapidité, confort) et en faisant des compromis, ce qui est essentiel pour la conduite autonome."
    },
    {
        category: "Algorithmes de Recherche",
        scenario: "Vous utilisez l'algorithme de recherche en profondeur d'abord (DFS).",
        question: "Quelle est la principale caractéristique de l'exploration de l'arbre de recherche par DFS ?",
        options: [
            "Explorer tous les nœuds à une profondeur donnée avant de passer à la profondeur suivante.",
            "Explorer un chemin en profondeur jusqu'à atteindre un état but ou une limite, puis revenir en arrière (backtracking).",
            "Explorer les nœuds les plus prometteurs en premier.",
            "Garantir de trouver le chemin le plus court."
        ],
        correctAnswer: "Explorer un chemin en profondeur jusqu'à atteindre un état but ou une limite, puis revenir en arrière (backtracking).",
        explanation: "DFS explore en profondeur en suivant un chemin jusqu'au bout avant de revenir explorer d'autres branches, utilisant une stratégie de backtracking."
    },
    {
        category: "Complexité des Algorithmes de Recherche",
        scenario: "Vous comparez BFS et DFS en termes de complexité spatiale.",
        question: "En général, quel algorithme a une complexité spatiale inférieure (consomme moins de mémoire) ?",
        options: [
            "Recherche en largeur d'abord (BFS)",
            "Recherche en profondeur d'abord (DFS)",
            "Les deux ont la même complexité spatiale.",
            "Cela dépend du problème."
        ],
        correctAnswer: "Recherche en profondeur d'abord (DFS)",
        explanation: "DFS a une complexité spatiale linéaire O(bm) car il ne garde en mémoire que le chemin courant, tandis que BFS garde toute la frontière, ce qui donne une complexité exponentielle O(b^d)."
    },
    {
        category: "Heuristiques",
        scenario: "Pour le problème du taquin (8-puzzle), vous utilisez l'heuristique 'nombre de pièces mal placées'.",
        question: "Cette heuristique est-elle admissible ?",
        options: [
            "Oui, car elle surestime toujours le nombre de mouvements restants.",
            "Non, car elle peut surestimer le nombre de mouvements restants.",
            "Oui, car elle ne surestime jamais le nombre de mouvements restants.",
            "L'admissibilité n'est pas pertinente pour cette heuristique."
        ],
        correctAnswer: "Oui, car elle ne surestime jamais le nombre de mouvements restants.",
        explanation: "L'heuristique 'nombre de pièces mal placées' est admissible car déplacer une pièce mal placée la rapproche au moins d'une position de sa position finale. Elle ne peut donc jamais surestimer le coût réel."
    },
    {
        category: "Algorithme Minimax",
        scenario: "Dans un jeu à somme nulle, si l'utilité pour MAX est de +1, quelle est l'utilité correspondante pour MIN ?",
        question: "Dans un jeu à somme nulle, quelle relation existe entre l'utilité de MAX et celle de MIN pour un état terminal ?",
        options: [
            "Utilité(MIN) = Utilité(MAX)",
            "Utilité(MIN) = -Utilité(MAX)",
            "Utilité(MIN) = 1 - Utilité(MAX)",
            "Il n'y a pas de relation directe."
        ],
        correctAnswer: "Utilité(MIN) = -Utilité(MAX)",
        explanation: "Dans un jeu à somme nulle, ce que MAX gagne, MIN le perd, et inversement. L'utilité pour l'un est donc l'opposé de l'utilité pour l'autre."
    },
    {
        category: "Élagage Alpha-Beta",
        scenario: "L'élagage alpha-beta est appliqué à l'algorithme Minimax.",
        question: "Quel est l'impact de l'élagage alpha-beta sur la solution trouvée par Minimax ?",
        options: [
            "Il trouve une solution potentiellement sous-optimale, mais plus rapidement.",
            "Il trouve toujours une solution optimale, mais plus lentement.",
            "Il trouve la même solution optimale que Minimax, mais potentiellement plus rapidement.",
            "Il ne trouve pas toujours de solution."
        ],
        correctAnswer: "Il trouve la même solution optimale que Minimax, mais potentiellement plus rapidement.",
        explanation: "L'élagage alpha-beta est une optimisation de Minimax. Il ne change pas la solution optimale, mais permet de la trouver plus rapidement en réduisant le nombre de nœuds explorés."
    },
    {
        category: "Apprentissage Supervisé",
        scenario: "Vous souhaitez prédire si un client va souscrire à un service (oui/non) en fonction de son profil.",
        question: "Quel type de problème d'apprentissage supervisé est-ce ?",
        options: [
            "Régression",
            "Clustering",
            "Classification",
            "Réduction de dimensionnalité"
        ],
        correctAnswer: "Classification",
        explanation: "Prédire une catégorie (oui/non, souscription/non-souscription) est un problème de classification binaire. La régression prédit une valeur continue."
    },
    {
        category: "Fonction Coût",
        scenario: "Dans un problème de régression linéaire, vous utilisez la fonction coût 'erreur quadratique'.",
        question: "Que mesure la fonction coût 'erreur quadratique' ?",
        options: [
            "Le nombre d'itérations de l'algorithme.",
            "La complexité du modèle.",
            "La somme des carrés des différences entre les prédictions et les valeurs réelles.",
            "La précision du modèle sur les données d'entraînement."
        ],
        correctAnswer: "La somme des carrés des différences entre les prédictions et les valeurs réelles.",
        explanation: "L'erreur quadratique est calculée en sommant les carrés des différences (erreurs) entre les valeurs prédites par le modèle et les valeurs cibles réelles."
    },
    {
        category: "Descente de Gradient",
        scenario: "L'algorithme de descente de gradient est utilisé pour minimiser une fonction coût.",
        question: "Dans quelle direction l'algorithme de descente de gradient met-il à jour les paramètres du modèle à chaque itération ?",
        options: [
            "Dans la direction opposée du gradient de la fonction coût.",
            "Dans la direction du gradient de la fonction coût.",
            "Dans une direction aléatoire.",
            "Dans la direction orthogonale au gradient."
        ],
        correctAnswer: "Dans la direction opposée du gradient de la fonction coût.",
        explanation: "La descente de gradient se déplace itérativement dans la direction opposée du gradient (la pente la plus raide) pour trouver le minimum de la fonction coût."
    },
    {
        category: "Apprentissage par Renforcement",
        scenario: "Un agent apprend à jouer à un jeu vidéo par renforcement.",
        question: "Dans l'apprentissage par renforcement, qu'est-ce que l'agent apprend principalement ?",
        options: [
            "Les règles du jeu.",
            "Une fonction de coût à minimiser.",
            "Une politique (stratégie) qui maximise les récompenses cumulées.",
            "Un modèle de l'environnement du jeu."
        ],
        correctAnswer: "Une politique (stratégie) qui maximise les récompenses cumulées.",
        explanation: "L'objectif de l'apprentissage par renforcement est d'apprendre une politique, c'est-à-dire une stratégie qui indique quelle action choisir dans chaque état pour maximiser les récompenses à long terme."
    },
    {
        category: "Exploration-Exploitation",
        scenario: "Dans l'apprentissage par renforcement, un agent doit choisir entre explorer de nouvelles actions ou exploiter les actions connues.",
        question: "Pourquoi l'exploration est-elle importante dans l'apprentissage par renforcement ?",
        options: [
            "Pour maximiser les récompenses immédiates.",
            "Pour trouver de meilleures stratégies à long terme, même si cela implique des récompenses immédiates plus faibles.",
            "Pour rendre l'apprentissage plus rapide.",
            "L'exploration n'est pas nécessaire, seule l'exploitation compte."
        ],
        correctAnswer: "Pour trouver de meilleures stratégies à long terme, même si cela implique des récompenses immédiates plus faibles.",
        explanation: "L'exploration est cruciale pour découvrir des actions potentiellement meilleures qui n'ont pas encore été essayées, même si l'exploitation des actions connues donne de meilleures récompenses immédiates. C'est un compromis nécessaire pour un apprentissage optimal."
    },
    {
        category: "Rationalité vs Omniscience",
        scenario: "On parle de rationalité en Intelligence Artificielle.",
        question: "La rationalité d'un agent implique-t-elle qu'il soit omniscient (qu'il connaisse tout) ?",
        options: [
            "Oui, un agent rationnel est toujours omniscient.",
            "Non, la rationalité et l'omniscience sont la même chose.",
            "Non, un agent rationnel prend des décisions avec les informations *disponibles*, pas nécessairement toutes les informations possibles.",
            "Oui, pour être rationnel, un agent doit connaître l'avenir."
        ],
        correctAnswer: "Non, un agent rationnel prend des décisions avec les informations *disponibles*, pas nécessairement toutes les informations possibles.",
        explanation: "La rationalité est limitée par les informations que l'agent possède au moment de la décision. Un agent rationnel n'est pas omniscient et peut prendre des décisions suboptimales si ses informations sont incomplètes ou imparfaites."
    },
    {
        category: "Types d'Agents",
        scenario: "Un agent doit diagnostiquer des maladies à partir de symptômes.",
        question: "Pour un système de diagnostic médical, quel type d'agent serait le plus pertinent, capable de raisonner sur des buts et d'utiliser des connaissances ?",
        options: [
            "Agent réflexe simple",
            "Agent réflexe basé sur un modèle",
            "Agent basé sur un but",
            "Agent basé sur l'utilité"
        ],
        correctAnswer: "Agent basé sur un but",
        explanation: "Un agent basé sur un but est capable de raisonner pour atteindre un objectif (diagnostiquer correctement), en utilisant des connaissances sur les symptômes et les maladies. Un agent réflexe serait trop limité pour un diagnostic complexe."
    },
    {
        category: "Propriétés de l'Environnement",
        scenario: "Dans un jeu de poker.",
        question: "Comment qualifier l'environnement du poker en termes d'observabilité ?",
        options: [
            "Entièrement observable",
            "Partiellement observable",
            "Déterministe",
            "Stochastique"
        ],
        correctAnswer: "Partiellement observable",
        explanation: "Au poker, les joueurs ne voient pas les cartes des autres joueurs, ce qui rend l'environnement partiellement observable.  Ils doivent prendre des décisions avec une information incomplète."
    },
    {
        category: "Algorithmes de Recherche",
        scenario: "Vous utilisez la recherche itérative en profondeur (IDS).",
        question: "Quel avantage principal offre IDS par rapport à la recherche en largeur d'abord (BFS) en termes de complexité spatiale ?",
        options: [
            "IDS est plus rapide que BFS.",
            "IDS est plus complet que BFS.",
            "IDS a une complexité spatiale linéaire, comme DFS.",
            "IDS est optimal, contrairement à BFS."
        ],
        correctAnswer: "IDS a une complexité spatiale linéaire, comme DFS.",
        explanation: "IDS combine les avantages de BFS (optimalité et complétude pour les coûts uniformes) et de DFS (faible complexité spatiale). Sa complexité spatiale est linéaire comme DFS, contrairement à BFS qui est exponentielle."
    },
    {
        category: "Heuristiques et Admissibilité",
        scenario: "Pour un problème de recherche de chemin, vous utilisez une heuristique qui calcule la distance à vol d'oiseau jusqu'au but.",
        question: "Est-ce que l'heuristique de distance à vol d'oiseau est généralement admissible pour la recherche de chemin sur une carte routière ?",
        options: [
            "Non, car elle surestime toujours la distance réelle.",
            "Oui, car elle ne surestime jamais la distance réelle.",
            "Cela dépend de la carte routière.",
            "L'admissibilité n'est pas pertinente pour cette heuristique."
        ],
        correctAnswer: "Oui, car elle ne surestime jamais la distance réelle.",
        explanation: "La distance à vol d'oiseau est une heuristique admissible pour la recherche de chemin car le chemin le plus court entre deux points est toujours une ligne droite. La distance réelle sur la route sera toujours supérieure ou égale."
    },
    {
        category: "Algorithme Minimax et Jeux",
        scenario: "Vous utilisez l'algorithme Minimax pour un jeu de Tic-Tac-Toe (Morpion).",
        question: "Pour quel type de jeux l'algorithme Minimax est-il principalement conçu ?",
        options: [
            "Jeux avec hasard (stochastiques).",
            "Jeux à information imparfaite (poker).",
            "Jeux déterministes à information parfaite (échecs, Tic-Tac-Toe).",
            "Jeux avec plus de deux joueurs."
        ],
        correctAnswer: "Jeux déterministes à information parfaite (échecs, Tic-Tac-Toe).",
        explanation: "Minimax est conçu pour les jeux déterministes (sans hasard) et à information parfaite (tous les joueurs voient tout l'état du jeu), comme les échecs, les dames, ou le Tic-Tac-Toe."
    },
    {
        category: "Élagage Alpha-Beta - Efficacité",
        scenario: "Vous appliquez l'élagage alpha-beta à un arbre de jeu.",
        question: "Dans le meilleur des cas, quelle réduction de complexité peut apporter l'élagage alpha-beta par rapport à Minimax ?",
        options: [
            "Réduction linéaire de la complexité.",
            "Réduction logarithmique de la complexité.",
            "Réduction exponentielle de la complexité, divisant par deux la profondeur de recherche.",
            "Aucune réduction de complexité."
        ],
        correctAnswer: "Réduction exponentielle de la complexité, divisant par deux la profondeur de recherche.",
        explanation: "Dans le meilleur des cas, l'élagage alpha-beta peut réduire la complexité de Minimax de O(b^m) à environ O(b^(m/2)), ce qui permet de doubler environ la profondeur de recherche pour un temps de calcul similaire."
    },
    {
        category: "Apprentissage Supervisé - Types",
        scenario: "Vous voulez prédire la température demain en fonction de données météorologiques passées.",
        question: "Quel type de tâche d'apprentissage supervisé est la prédiction de la température (valeur continue) ?",
        options: [
            "Classification",
            "Régression",
            "Clustering",
            "Détection d'anomalies"
        ],
        correctAnswer: "Régression",
        explanation: "La prédiction d'une valeur continue (comme la température) est un problème de régression. La classification vise à prédire une catégorie discrète."
    },
    {
        category: "Régression Linéaire - Modèle",
        scenario: "En régression linéaire simple, vous utilisez un modèle linéaire.",
        question: "Quelle est la forme générale de l'hypothèse (modèle) en régression linéaire simple (avec une seule variable d'entrée x) ?",
        options: [
            "y = w * x^2 + b",
            "y = w * log(x) + b",
            "y = w * x + b",
            "y = 1 / (1 + exp(-x))"
        ],
        correctAnswer: "y = w * x + b",
        explanation: "En régression linéaire simple, le modèle est une droite, représentée par l'équation y = w * x + b, où 'w' est la pente et 'b' est l'ordonnée à l'origine."
    },
    {
        category: "Descente de Gradient - Convergence",
        scenario: "Vous utilisez la descente de gradient pour minimiser une fonction coût.",
        question: "Que se passe-t-il si le taux d'apprentissage (η) est trop grand lors de la descente de gradient ?",
        options: [
            "L'algorithme converge plus rapidement vers le minimum.",
            "L'algorithme risque de diverger et de ne pas trouver le minimum.",
            "L'algorithme trouve un minimum plus précis.",
            "Le taux d'apprentissage n'a pas d'influence sur la convergence."
        ],
        correctAnswer: "L'algorithme risque de diverger et de ne pas trouver le minimum.",
        explanation: "Un taux d'apprentissage trop élevé peut faire que l'algorithme 'saute' par-dessus le minimum lors de la descente, et qu'il oscille ou diverge au lieu de converger vers la solution optimale."
    },
    {
        category: "Apprentissage par Renforcement - Récompenses",
        scenario: "Dans un jeu vidéo, vous définissez un système de récompenses pour un agent apprenant par renforcement.",
        question: "Quel est le rôle principal des récompenses dans l'apprentissage par renforcement ?",
        options: [
            "Définir l'état initial de l'agent.",
            "Guider l'agent en lui indiquant les actions souhaitables (récompenses positives) et indésirables (récompenses négatives).",
            "Mesurer la complexité de l'environnement.",
            "Accélérer la phase d'exploration."
        ],
        correctAnswer: "Guider l'agent en lui indiquant les actions souhaitables (récompenses positives) et indésirables (récompenses négatives).",
        explanation: "Les récompenses (et punitions) sont le signal de feedback essentiel dans l'apprentissage par renforcement. Elles indiquent à l'agent quelles actions sont bonnes (récompenses positives) et quelles actions sont mauvaises (récompenses négatives) par rapport à son objectif."
    },
    {
        category: "Exploration-Exploitation - Stratégie Epsilon-Greedy",
        scenario: "Vous implémentez une stratégie epsilon-greedy pour gérer l'exploration-exploitation en Q-Learning.",
        question: "Comment fonctionne la stratégie epsilon-greedy ?",
        options: [
            "Choisir toujours l'action qui maximise la Q-valeur.",
            "Choisir toujours une action aléatoire.",
            "Choisir avec une probabilité ε une action aléatoire (exploration) et avec une probabilité 1-ε l'action gloutonne (exploitation).",
            "Diminuer progressivement le taux d'apprentissage epsilon au cours du temps."
        ],
        correctAnswer: "Choisir avec une probabilité ε une action aléatoire (exploration) et avec une probabilité 1-ε l'action gloutonne (exploitation).",
        explanation: "La stratégie epsilon-greedy permet de trouver un compromis entre exploration et exploitation en choisissant majoritairement l'action gloutonne (exploitation), mais en laissant une petite probabilité ε pour choisir une action aléatoire (exploration)."
    },
    {
        category: "Agents Intelligents - Autonomie",
        scenario: "Un agent est dit autonome.",
        question: "Qu'est-ce que l'autonomie d'un agent intelligent signifie principalement selon le cours ?",
        options: [
            "Qu'il n'a pas besoin d'être programmé.",
            "Qu'il peut agir sans intervention humaine directe, en utilisant sa propre expérience et en s'adaptant.",
            "Qu'il peut agir de manière imprévisible.",
            "Qu'il est toujours rationnel."
        ],
        correctAnswer: "Qu'il peut agir sans intervention humaine directe, en utilisant sa propre expérience et en s'adaptant.",
        explanation: "L'autonomie d'un agent signifie qu'il peut prendre des décisions et agir par lui-même, sans intervention humaine constante, en se basant sur ses perceptions et son expérience, et en s'adaptant à l'environnement."
    },
    {
        category: "Rationalité - Mesure de Performance",
        scenario: "Vous évaluez la rationalité d'un agent.",
        question: "Quel facteur est essentiel pour évaluer la rationalité d'un agent ?",
        options: [
            "Sa vitesse de calcul.",
            "Sa capacité à réussir toutes les tâches.",
            "La mesure de performance qui définit le critère de succès de l'agent.",
            "Le type d'environnement dans lequel il évolue."
        ],
        correctAnswer: "La mesure de performance qui définit le critère de succès de l'agent.",
        explanation: "La rationalité d'un agent est toujours définie par rapport à une mesure de performance spécifique. C'est ce critère qui permet de juger si l'agent agit de manière rationnelle, c'est-à-dire s'il maximise ses performances selon cette mesure."
    },
    {
        category: "Types d'Environnements - Continu vs Discret",
        scenario: "Vous comparez un jeu d'échecs et la conduite automobile en termes de type d'environnement.",
        question: "Laquelle des affirmations suivantes décrit le mieux la différence entre ces environnements en termes de 'continu vs discret' ?",
        options: [
            "Les deux environnements sont discrets.",
            "Les deux environnements sont continus.",
            "Le jeu d'échecs est discret, la conduite automobile est continue.",
            "Le jeu d'échecs est continu, la conduite automobile est discrète."
        ],
        correctAnswer: "Le jeu d'échecs est discret, la conduite automobile est continue.",
        explanation: "Le jeu d'échecs a un nombre fini d'états discrets (positions sur l'échiquier) et d'actions discrètes (mouvements des pièces). La conduite automobile implique des états et des actions continus (vitesse, position, angle du volant, etc.)."
    },
    {
        category: "Algorithmes de Recherche - Complétude",
        scenario: "Vous considérez la complétude des algorithmes de recherche.",
        question: "Qu'est-ce que la 'complétude' d'un algorithme de recherche signifie principalement ?",
        options: [
            "L'algorithme trouve toujours une solution optimale.",
            "L'algorithme trouve une solution en un temps fini.",
            "L'algorithme garantit de trouver une solution s'il en existe une.",
            "L'algorithme explore tout l'espace de recherche."
        ],
        correctAnswer: "L'algorithme garantit de trouver une solution s'il en existe une.",
        explanation: "La complétude est la propriété d'un algorithme de recherche qui garantit qu'il trouvera une solution s'il en existe au moins une, même s'il ne trouve pas forcément la solution optimale ou le plus rapidement possible."
    },
    {
        category: "Heuristiques - Dominance",
        scenario: "Vous comparez deux heuristiques admissibles h1(n) et h2(n) pour l'algorithme A*.",
        question: "Si pour tout nœud n, h2(n) ≥ h1(n), laquelle des heuristiques est considérée comme 'dominante' et potentiellement plus efficace pour A* ?",
        options: [
            "h1(n) est dominante.",
            "h2(n) est dominante.",
            "Les deux heuristiques sont équivalentes.",
            "Cela dépend du problème."
        ],
        correctAnswer: "h2(n) est dominante.",
        explanation: "Si h2(n) est toujours supérieure ou égale à h1(n) (et que les deux sont admissibles), alors h2(n) est dite dominante. Elle est généralement plus efficace car elle fournit une meilleure estimation du coût réel, guidant A* plus directement vers le but."
    },
    {
        category: "Algorithme Minimax - Limites",
        scenario: "Vous utilisez Minimax pour un jeu complexe comme les échecs.",
        question: "Quelle est la principale limitation de l'algorithme Minimax pour les jeux complexes comme les échecs ?",
        options: [
            "Il ne trouve pas toujours la solution optimale.",
            "Il est trop lent à cause de la complexité exponentielle de l'arbre de jeu.",
            "Il ne peut pas gérer les jeux avec hasard.",
            "Il nécessite une heuristique pour fonctionner."
        ],
        correctAnswer: "Il est trop lent à cause de la complexité exponentielle de l'arbre de jeu.",
        explanation: "La complexité exponentielle de Minimax (O(b^m)) rend son application directe impossible pour les jeux complexes comme les échecs, où l'arbre de jeu est immense. Des techniques comme l'élagage alpha-beta et les fonctions d'évaluation sont nécessaires pour le rendre praticable."
    },
    {
        category: "Élagage Alpha-Beta - Conditions",
        scenario: "L'élagage alpha-beta est une optimisation de Minimax.",
        question: "L'élagage alpha-beta modifie-t-il la solution optimale trouvée par l'algorithme Minimax ?",
        options: [
            "Oui, il trouve une solution approximative.",
            "Non, il garantit de trouver exactement la même solution optimale.",
            "Oui, il peut parfois trouver une meilleure solution que Minimax.",
            "Cela dépend de l'heuristique utilisée."
        ],
        correctAnswer: "Non, il garantit de trouver exactement la même solution optimale.",
        explanation: "L'élagage alpha-beta est une technique d'optimisation qui ne modifie pas le résultat de Minimax. Il élague des branches de recherche inutiles, mais il explore toujours suffisamment l'arbre pour garantir de trouver la même solution optimale."
    },
    {
        category: "Apprentissage Supervisé - Exemples",
        scenario: "Parmi les exemples suivants, lequel relève de l'apprentissage supervisé ?",
        question: "Lequel des exemples suivants illustre le mieux un problème d'apprentissage supervisé ?",
        options: [
            "Regrouper des articles de presse en différentes catégories thématiques.",
            "Prédire la prochaine action d'un robot aspirateur.",
            "Détecter des anomalies dans des transactions bancaires.",
            "Reconnaître des chiffres manuscrits à partir d'images étiquetées."
        ],
        correctAnswer: "Reconnaître des chiffres manuscrits à partir d'images étiquetées.",
        explanation: "La reconnaissance de chiffres manuscrits à partir d'images étiquetées est un exemple typique d'apprentissage supervisé, où le modèle apprend à associer des entrées (images) à des sorties (chiffres) à partir d'exemples étiquetés."
    },
    {
        category: "Fonction d'Activation - Perceptron",
        scenario: "Vous utilisez un perceptron pour la classification.",
        question: "Quel type de fonction d'activation est typiquement utilisée dans un perceptron simple pour obtenir une sortie binaire ?",
        options: [
            "Sigmoïde",
            "Tangente Hyperbolique",
            "ReLU (Rectified Linear Unit)",
            "Fonction Échelon (Step Function)"
        ],
        correctAnswer: "Fonction Échelon (Step Function)",
        explanation: "Le perceptron utilise traditionnellement une fonction d'activation de type échelon (ou fonction seuil) pour produire une sortie binaire (0 ou 1) et effectuer une classification simple."
    },
    {
        category: "Q-Learning - Exploration",
        scenario: "En Q-Learning, vous devez gérer le compromis exploration-exploitation.",
        question: "Pourquoi l'exploration est-elle nécessaire en Q-Learning ?",
        options: [
            "Pour accélérer la convergence de l'algorithme.",
            "Pour s'assurer que l'agent découvre des stratégies potentiellement meilleures, et ne se contente pas d'une stratégie sous-optimale.",
            "Pour simplifier le calcul des Q-valeurs.",
            "L'exploration n'est pas toujours nécessaire en Q-Learning."
        ],
        correctAnswer: "Pour s'assurer que l'agent découvre des stratégies potentiellement meilleures, et ne se contente pas d'une stratégie sous-optimale.",
        explanation: "L'exploration est essentielle pour éviter que l'agent ne se retrouve piégé dans un optimum local (une stratégie sous-optimale). En explorant, il peut découvrir des actions et des états qui mènent à de meilleures récompenses à long terme."
    },
    {
        category: "Apprentissage par Renforcement - Applications",
        scenario: "Parmi les applications suivantes, laquelle relève typiquement de l'apprentissage par renforcement ?",
        question: "Laquelle des applications suivantes est un exemple typique de problème résolu par l'apprentissage par renforcement ?",
        options: [
            "La classification d'images.",
            "La prédiction de séries temporelles.",
            "Le contrôle de robots (robotique).",
            "La segmentation d'images."
        ],
        correctAnswer: "Le contrôle de robots (robotique).",
        explanation: "Le contrôle de robots, notamment pour la navigation, la manipulation d'objets ou la prise de décisions complexes dans des environnements interactifs, est un domaine d'application privilégié de l'apprentissage par renforcement."
    },
    {
        category: "Agents Intelligents - Environnement",
        scenario: "Un agent intelligent évolue dans un environnement.",
        question: "Selon le cours, qu'est-ce que l'environnement pour un agent intelligent ?",
        options: [
            "Uniquement le monde physique qui l'entoure.",
            "Tout ce qui est extérieur à l'agent et avec lequel il interagit.",
            "Uniquement les autres agents avec lesquels il interagit.",
            "L'ensemble des capteurs de l'agent."
        ],
        correctAnswer: "Tout ce qui est extérieur à l'agent et avec lequel il interagit.",
        explanation: "L'environnement pour un agent intelligent est défini comme tout ce qui est extérieur à l'agent lui-même, et avec lequel l'agent interagit en percevant et en agissant."
    },
    {
        category: "Rationalité - Facteurs",
        scenario: "La rationalité d'un agent dépend de plusieurs facteurs.",
        question: "Parmi les suivants, lequel n'est PAS un facteur de rationalité d'un agent, selon le cours ?",
        options: [
            "La mesure de performance définissant le critère de succès.",
            "La connaissance de l'historique acquis de l'environnement.",
            "Les actions réalisables par l'agent.",
            "La complexité algorithmique de l'agent."
        ],
        correctAnswer: "La complexité algorithmique de l'agent.",
        explanation: "La complexité algorithmique de l'agent n'est pas directement un facteur de rationalité. Les facteurs de rationalité sont liés à la performance, aux connaissances, aux actions possibles et aux perceptions de l'agent."
    },
    {
        category: "Types d'Environnements - Dynamique vs Statique",
        scenario: "Vous comparez le jeu d'échecs et la conduite automobile en termes de dynamisme de l'environnement.",
        question: "Laquelle des affirmations suivantes décrit le mieux la différence en termes de 'dynamique vs statique' ?",
        options: [
            "Les deux environnements sont statiques.",
            "Les deux environnements sont dynamiques.",
            "Le jeu d'échecs est statique, la conduite automobile est dynamique.",
            "Le jeu d'échecs est dynamique, la conduite automobile est statique."
        ],
        correctAnswer: "Le jeu d'échecs est statique, la conduite automobile est dynamique.",
        explanation: "Le jeu d'échecs est statique car l'environnement (l'échiquier) ne change pas pendant que l'agent (le joueur) délibère. La conduite automobile est dynamique car l'environnement change constamment, même pendant la prise de décision."
    },
    {
        category: "Algorithmes de Recherche - Optimalité",
        scenario: "Vous considérez l'optimalité des algorithmes de recherche.",
        question: "Qu'est-ce que l' 'optimalité' d'un algorithme de recherche signifie principalement ?",
        options: [
            "L'algorithme trouve une solution en un temps minimal.",
            "L'algorithme trouve toujours la première solution rencontrée.",
            "L'algorithme garantit de trouver la solution la moins coûteuse (optimale) parmi toutes les solutions possibles.",
            "L'algorithme explore l'espace de recherche de manière optimale."
        ],
        correctAnswer: "L'algorithme garantit de trouver la solution la moins coûteuse (optimale) parmi toutes les solutions possibles.",
        explanation: "L'optimalité signifie qu'un algorithme de recherche garantit de trouver la meilleure solution possible, c'est-à-dire celle qui minimise le coût du chemin ou maximise l'utilité, parmi toutes les solutions existantes."
    },
    {
        category: "Heuristiques - Exemples",
        scenario: "Pour le problème du voyageur de commerce, vous devez trouver un chemin optimal visitant toutes les villes une seule fois.",
        question: "Parmi les heuristiques suivantes, laquelle pourrait être admissible (bien que simplifiée) pour estimer le coût restant dans le problème du voyageur de commerce ?",
        options: [
            "Le nombre de villes non visitées.",
            "La distance totale déjà parcourue.",
            "La distance à vol d'oiseau jusqu'à la ville la plus proche non visitée.",
            "La somme des distances à vol d'oiseau jusqu'à toutes les villes non visitées."
        ],
        correctAnswer: "La distance à vol d'oiseau jusqu'à la ville la plus proche non visitée.",
        explanation: "La distance à vol d'oiseau jusqu'à la ville la plus proche non visitée peut être une heuristique admissible (simplifiée) car elle ne surestime généralement pas le coût réel restant. La somme des distances à toutes les villes non visitées pourrait aussi être admissible, mais est plus complexe."
    },
    {
        category: "Algorithme Minimax - Jeux Stochastiques",
        scenario: "Vous adaptez l'algorithme Minimax pour gérer les jeux stochastiques (avec hasard).",
        question: "Comment l'algorithme ExpectiMinimax étend-il Minimax pour gérer le hasard ?",
        options: [
            "En ignorant les nœuds de hasard.",
            "En remplaçant les nœuds MIN par des nœuds de hasard.",
            "En ajoutant des nœuds de 'chance' (hasard) dans l'arbre de jeu et en calculant l'espérance des valeurs minimax.",
            "En utilisant une heuristique pour estimer l'issue des événements aléatoires."
        ],
        correctAnswer: "En ajoutant des nœuds de 'chance' (hasard) dans l'arbre de jeu et en calculant l'espérance des valeurs minimax.",
        explanation: "ExpectiMinimax introduit des nœuds de 'chance' dans l'arbre de jeu pour représenter les événements aléatoires (lancer de dés, distribution de cartes). Pour ces nœuds, il calcule l'espérance mathématique des valeurs minimax des états suivants, pondérée par les probabilités des événements aléatoires."
    },
    {
        category: "Apprentissage Supervisé - Étiquettes",
        scenario: "Dans un problème d'apprentissage supervisé.",
        question: "Que représentent les 'étiquettes' (labels) dans les données d'entraînement supervisé ?",
        options: [
            "Les caractéristiques (features) des données.",
            "Les paramètres du modèle à apprendre.",
            "Les sorties correctes ou les réponses attendues pour chaque exemple d'entraînement.",
            "Le type d'algorithme d'apprentissage utilisé."
        ],
        correctAnswer: "Les sorties correctes ou les réponses attendues pour chaque exemple d'entraînement.",
        explanation: "Les étiquettes (ou labels) sont les 'vérités terrain' ou les réponses correctes que l'on souhaite que le modèle apprenne à prédire. En apprentissage supervisé, chaque exemple d'entraînement est un couple (entrée, étiquette)."
    },
    {
        category: "Fonction Coût - Régression",
        scenario: "Vous choisissez une fonction coût pour un problème de régression.",
        question: "Quel critère principal guide le choix d'une fonction coût appropriée pour un problème de régression ?",
        options: [
            "La complexité de la fonction.",
            "La rapidité de calcul du gradient.",
            "La capacité à mesurer adéquatement l'erreur de prédiction et à guider l'optimisation vers de bonnes solutions.",
            "La popularité de la fonction coût dans la littérature scientifique."
        ],
        correctAnswer: "La capacité à mesurer adéquatement l'erreur de prédiction et à guider l'optimisation vers de bonnes solutions.",
        explanation: "Le choix de la fonction coût est crucial. Elle doit être conçue pour mesurer l'erreur de prédiction de manière significative pour le problème considéré, et pour permettre à l'algorithme d'optimisation (comme la descente de gradient) de trouver de bons paramètres de modèle."
    },
    {
        category: "Descente de Gradient - Initialisation",
        scenario: "Vous initialisez les poids d'un modèle avant d'appliquer la descente de gradient.",
        question: "En général, comment initialise-t-on les poids d'un modèle avant de commencer l'entraînement par descente de gradient ?",
        options: [
            "Avec des valeurs nulles.",
            "Avec des valeurs très grandes.",
            "Avec des valeurs aléatoires petites.",
            "Avec des valeurs égales à 1."
        ],
        correctAnswer: "Avec des valeurs aléatoires petites.",
        explanation: "Il est courant d'initialiser les poids d'un modèle avec de petites valeurs aléatoires. L'initialisation à zéro peut poser des problèmes de symétrie, et des valeurs trop grandes peuvent rendre l'apprentissage instable."
    },
    {
        category: "Apprentissage par Renforcement - Exploration-Exploitation (ε)",
        scenario: "Vous utilisez une stratégie epsilon-greedy avec un paramètre ε.",
        question: "Si vous diminuez la valeur de ε dans une stratégie epsilon-greedy, quel est l'impact sur le comportement de l'agent ?",
        options: [
            "L'agent explore davantage.",
            "L'agent exploite davantage les actions connues.",
            "L'apprentissage devient plus rapide.",
            "L'apprentissage devient plus stable."
        ],
        correctAnswer: "L'agent exploite davantage les actions connues.",
        explanation: "Diminuer ε réduit la probabilité d'exploration (choisir une action aléatoire). L'agent a donc plus tendance à choisir l'action gloutonne, c'est-à-dire à exploiter les connaissances acquises pour maximiser les récompenses immédiates."
    },
    {
        category: "Agents Intelligents - Perceptions et Actions",
        scenario: "Un agent intelligent interagit avec un environnement.",
        question: "Comment un agent intelligent interagit-il avec son environnement, selon le cours ?",
        options: [
            "Uniquement en percevant l'environnement.",
            "Uniquement en agissant sur l'environnement.",
            "En percevant l'environnement via des capteurs et en agissant sur lui via des effecteurs.",
            "En observant passivement l'environnement."
        ],
        correctAnswer: "En percevant l'environnement via des capteurs et en agissant sur lui via des effecteurs.",
        explanation: "L'interaction d'un agent intelligent avec son environnement est bidirectionnelle : il perçoit l'environnement à travers des capteurs et agit sur lui à travers des effecteurs."
    },
    {
        category: "Rationalité - Agent Rationnel",
        scenario: "Vous concevez un agent rationnel.",
        question: "Que doit faire un agent rationnel pour chaque séquence de perceptions possibles, selon la définition du cours ?",
        options: [
            "Choisir l'action la plus rapide.",
            "Choisir l'action la plus complexe.",
            "Choisir une action aléatoire pour explorer.",
            "Choisir une action susceptible de maximiser sa mesure de performance, compte tenu de ses observations et connaissances."
        ],
        correctAnswer: "Choisir une action susceptible de maximiser sa mesure de performance, compte tenu de ses observations et connaissances.",
        explanation: "Un agent rationnel est défini par sa capacité à choisir, pour chaque situation (séquence de perceptions), l'action qui maximise sa performance attendue, en utilisant au mieux ses informations et ses connaissances."
    },
    {
        category: "Types d'Environnements - Episodique vs Séquentiel",
        scenario: "Vous comparez la détection de pièces défectueuses sur une chaîne de production et le jeu d'échecs en termes de type d'environnement.",
        question: "Laquelle des affirmations suivantes décrit le mieux la différence en termes de 'épisodique vs séquentiel' ?",
        options: [
            "Les deux environnements sont épisodiques.",
            "Les deux environnements sont séquentiels.",
            "La détection de pièces défectueuses est épisodique, le jeu d'échecs est séquentiel.",
            "La détection de pièces défectueuses est séquentielle, le jeu d'échecs est épisodique."
        ],
        correctAnswer: "La détection de pièces défectueuses est épisodique, le jeu d'échecs est séquentiel.",
        explanation: "La détection de pièces défectueuses est épisodique car chaque décision est indépendante des précédentes et futures. Le jeu d'échecs est séquentiel car chaque action influence l'état futur du jeu et les décisions suivantes."
    },
    {
        category: "Algorithmes de Recherche - Espace d'États",
        scenario: "Vous utilisez un algorithme de recherche pour résoudre un problème.",
        question: "Qu'est-ce que l' 'espace des états' dans le contexte des algorithmes de recherche ?",
        options: [
            "L'ensemble des actions possibles de l'agent.",
            "L'ensemble des récompenses possibles.",
            "L'ensemble de tous les états possibles que l'agent peut atteindre.",
            "L'ensemble des algorithmes de recherche disponibles."
        ],
        correctAnswer: "L'ensemble de tous les états possibles que l'agent peut atteindre.",
        explanation: "L'espace des états est l'ensemble de toutes les configurations possibles du problème ou de l'environnement dans lequel l'agent évolue et recherche une solution."
    },
    {
        category: "Heuristiques - Fonction d'Évaluation",
        scenario: "Dans l'algorithme A*, vous utilisez une fonction d'évaluation f(n) = g(n) + h(n).",
        question: "Que représente la composante g(n) dans la fonction d'évaluation f(n) de A* ?",
        options: [
            "L'estimation heuristique du coût restant jusqu'au but.",
            "Le coût du chemin déjà parcouru depuis l'état initial jusqu'au nœud n.",
            "Le coût total estimé du chemin passant par le nœud n.",
            "Le coût du chemin optimal jusqu'au but."
        ],
        correctAnswer: "Le coût du chemin déjà parcouru depuis l'état initial jusqu'au nœud n.",
        explanation: "g(n) représente le coût du chemin effectivement parcouru pour atteindre le nœud 'n' depuis l'état initial. Il s'agit d'une valeur exacte, contrairement à h(n) qui est une estimation heuristique."
    },
    {
        category: "Algorithme Minimax - États Terminaux",
        scenario: "L'algorithme Minimax explore un arbre de jeu.",
        question: "Que se passe-t-il lorsque Minimax atteint un état terminal (fin de partie) ?",
        options: [
            "Il continue à explorer les nœuds suivants.",
            "Il retourne une valeur heuristique estimant l'utilité de l'état.",
            "Il retourne l'utilité réelle de l'état terminal.",
            "Il arrête la recherche et retourne 'échec'."
        ],
        correctAnswer: "Il retourne l'utilité réelle de l'état terminal.",
        explanation: "Lorsque Minimax atteint un état terminal, il n'y a plus de coups possibles. Il retourne alors l'utilité réelle de cet état terminal, qui est définie par la fonction d'utilité du jeu (victoire, défaite, match nul)."
    },
    {
        category: "Élagage Alpha-Beta - Principes",
        scenario: "L'élagage alpha-beta repose sur deux valeurs seuils, alpha (α) et beta (β).",
        question: "Que représente la valeur alpha (α) dans l'élagage alpha-beta ?",
        options: [
            "Le seuil de coupure pour le joueur MIN.",
            "La valeur du meilleur choix (le plus élevé) trouvé jusqu'à présent par MAX le long du chemin courant.",
            "La profondeur maximale de recherche.",
            "Le taux d'élagage souhaité."
        ],
        correctAnswer: "La valeur du meilleur choix (le plus élevé) trouvé jusqu'à présent par MAX le long du chemin courant.",
        explanation: "Alpha (α) représente la meilleure valeur (la plus élevée) que MAX est assuré d'obtenir à ce niveau ou au-dessus. Si MIN trouve une option pire que alpha, MAX évitera cette branche et l'élagage se produit."
    },
    {
        category: "Apprentissage Supervisé - Fonction de Perte",
        scenario: "Vous entraînez un modèle d'apprentissage supervisé.",
        question: "Quel est le rôle principal de la fonction de perte (ou fonction coût) en apprentissage supervisé ?",
        options: [
            "Définir l'architecture du modèle.",
            "Mesurer la performance du modèle sur les données de test.",
            "Mesurer l'erreur entre les prédictions du modèle et les valeurs cibles, et guider l'optimisation.",
            "Accélérer la phase d'entraînement."
        ],
        correctAnswer: "Mesurer l'erreur entre les prédictions du modèle et les valeurs cibles, et guider l'optimisation.",
        explanation: "La fonction de perte quantifie la performance du modèle en mesurant l'écart entre ses prédictions et les valeurs correctes. Elle sert de guide pour l'algorithme d'optimisation afin d'ajuster les paramètres du modèle et de réduire cette erreur."
    },
    {
        category: "Descente de Gradient - Minimum Local",
        scenario: "Vous utilisez la descente de gradient pour minimiser une fonction coût non-convexe.",
        question: "Quel est un risque potentiel de la descente de gradient avec les fonctions coût non-convexes ?",
        options: [
            "Convergence trop rapide.",
            "Convergence vers un minimum local (sous-optimal) au lieu du minimum global.",
            "Divergence de l'algorithme.",
            "Complexité de calcul trop faible."
        ],
        correctAnswer: "Convergence vers un minimum local (sous-optimal) au lieu du minimum global.",
        explanation: "Avec les fonctions coût non-convexes, la descente de gradient peut se retrouver piégée dans un minimum local, qui n'est pas le meilleur minimum global possible. C'est une limitation de cette méthode d'optimisation."
    },
    {
        category: "Apprentissage par Renforcement - Facteur d'Escompte (γ) et Horizon",
        scenario: "Vous ajustez le facteur d'escompte (γ) en Q-Learning.",
        question: "Comment une valeur de facteur d'escompte (γ) proche de 0 influence-t-elle le comportement de l'agent ?",
        options: [
            "L'agent privilégie les récompenses futures à long terme.",
            "L'agent privilégie uniquement les récompenses immédiates.",
            "L'agent explore davantage.",
            "L'agent exploite davantage."
        ],
        correctAnswer: "L'agent privilégie uniquement les récompenses immédiates.",
        explanation: "Un facteur d'escompte γ proche de 0 rend l'agent myope : il ne valorise presque plus les récompenses futures et se concentre uniquement sur la maximisation des récompenses immédiates."
    },
    {
        category: "Agents Intelligents - Autonomie et Apprentissage",
        scenario: "Un agent autonome.",
        question: "Quel est le lien entre l'autonomie d'un agent et sa capacité d'apprentissage, selon le cours ?",
        options: [
            "L'autonomie et l'apprentissage sont indépendants.",
            "L'autonomie implique nécessairement l'apprentissage.",
            "L'apprentissage renforce l'autonomie de l'agent en lui permettant de s'adapter à son expérience.",
            "L'apprentissage réduit l'autonomie de l'agent en le rendant dépendant des données d'entraînement."
        ],
        correctAnswer: "L'apprentissage renforce l'autonomie de l'agent en lui permettant de s'adapter à son expérience.",
        explanation: "L'apprentissage est un mécanisme clé pour renforcer l'autonomie d'un agent. En apprenant de ses expériences, l'agent peut améliorer ses performances et s'adapter à des situations nouvelles sans intervention humaine constante."
    },
    {
        category: "Rationalité - Rationalité Limitée",
        scenario: "On parle de rationalité en IA.",
        question: "Pourquoi parle-t-on parfois de 'rationalité limitée' pour les agents intelligents ?",
        options: [
            "Parce que les agents ne sont pas toujours rationnels.",
            "Parce que la rationalité est un concept abstrait.",
            "Parce que les agents ont des ressources de calcul et des connaissances limitées, ce qui limite leur capacité à être parfaitement rationnels.",
            "Parce que la rationalité n'est pas toujours souhaitable."
        ],
        correctAnswer: "Parce que les agents ont des ressources de calcul et des connaissances limitées, ce qui limite leur capacité à être parfaitement rationnels.",
        explanation: "Le concept de rationalité limitée reconnaît que les agents réels (et les IA) ont des limitations en termes de temps de calcul, de mémoire, d'informations disponibles, etc. Ils doivent donc prendre des décisions rationnelles avec ces contraintes, ce qui peut les éloigner de la rationalité parfaite."
    },
    {
        category: "Types d'Environnements - Multiagent",
        scenario: "Dans un environnement multiagent.",
        question: "Quelle caractéristique principale distingue un environnement multiagent d'un environnement monoagent ?",
        options: [
            "La présence de plusieurs objectifs pour l'agent.",
            "La présence de plusieurs agents interagissant dans l'environnement.",
            "La complexité de l'environnement.",
            "Le caractère stochastique de l'environnement."
        ],
        correctAnswer: "La présence de plusieurs agents interagissant dans l'environnement.",
        explanation: "La caractéristique déterminante d'un environnement multiagent est la présence de plusieurs agents distincts qui interagissent entre eux et avec l'environnement. En monoagent, il n'y a qu'un seul agent qui agit dans l'environnement."
    },
    {
        category: "Algorithmes de Recherche - Exploration Aveugle vs Informée",
        scenario: "Vous comparez les algorithmes de recherche aveugles (non informés) et informés (heuristiques).",
        question: "Quelle est la principale différence entre les algorithmes de recherche aveugles et informés ?",
        options: [
            "Les algorithmes aveugles sont plus rapides, les algorithmes informés sont plus précis.",
            "Les algorithmes informés utilisent une fonction heuristique pour guider la recherche, les algorithmes aveugles non.",
            "Les algorithmes aveugles sont complets, les algorithmes informés non.",
            "Les algorithmes informés trouvent toujours la solution optimale, les algorithmes aveugles non."
        ],
        correctAnswer: "Les algorithmes informés utilisent une fonction heuristique pour guider la recherche, les algorithmes aveugles non.",
        explanation: "La différence clé est l'utilisation d'une heuristique par les algorithmes informés. L'heuristique est une connaissance supplémentaire sur le problème qui permet de guider la recherche de manière plus efficace vers les solutions potentielles, contrairement aux algorithmes aveugles qui explorent l'espace de recherche de manière systématique sans guidance."
    },
    {
        category: "Heuristiques - Consistance",
        scenario: "Vous utilisez une heuristique consistente dans l'algorithme A*.",
        question: "Quelle propriété supplémentaire apporte la consistance d'une heuristique (en plus de l'admissibilité) à l'algorithme A* ?",
        options: [
            "Garantir l'optimalité de A*.",
            "Accélérer la convergence de A* et éviter de ré-explorer des états.",
            "Simplifier le calcul de l'heuristique.",
            "Rendre A* complet."
        ],
        correctAnswer: "Accélérer la convergence de A* et éviter de ré-explorer des états.",
        explanation: "La consistance (ou monotonicité) d'une heuristique, en plus de l'admissibilité, garantit que A* explore les nœuds dans un ordre optimal et n'a jamais besoin de ré-explorer un état déjà visité, ce qui améliore significativement son efficacité."
    },
    {
        category: "Algorithme Minimax - Profondeur de Recherche",
        scenario: "Vous implémentez Minimax avec une profondeur de recherche limitée.",
        question: "Pourquoi est-il souvent nécessaire de limiter la profondeur de recherche de Minimax dans les jeux complexes ?",
        options: [
            "Pour garantir la complétude de l'algorithme.",
            "Pour réduire la complexité temporelle et rendre l'algorithme utilisable en temps raisonnable.",
            "Pour éviter les boucles infinies dans l'arbre de jeu.",
            "Pour simplifier l'implémentation de Minimax."
        ],
        correctAnswer: "Pour réduire la complexité temporelle et rendre l'algorithme utilisable en temps raisonnable.",
        explanation: "La limitation de la profondeur de recherche est une technique essentielle pour rendre Minimax applicable aux jeux complexes. Elle permet de contrôler la complexité exponentielle et d'obtenir des temps de réponse acceptables, même si cela implique de ne pas explorer l'arbre de jeu complet."
    },
    {
        category: "Élagage Alpha-Beta - Valeurs Alpha et Beta",
        scenario: "Vous utilisez l'élagage alpha-beta.",
        question: "Que représente la valeur beta (β) dans l'élagage alpha-beta ?",
        options: [
            "Le seuil de coupure pour le joueur MAX.",
            "La valeur du meilleur choix (le plus faible) trouvé jusqu'à présent par MIN le long du chemin courant.",
            "La profondeur minimale de recherche.",
            "Le facteur d'élagage."
        ],
        correctAnswer: "La valeur du meilleur choix (le plus faible) trouvé jusqu'à présent par MIN le long du chemin courant.",
        explanation: "Beta (β) représente la meilleure valeur (la plus faible) que MIN est assuré d'obtenir à ce niveau ou au-dessus. Si MAX trouve une option pire que beta, MIN évitera cette branche et l'élagage se produit."
    },
    {
        category: "Apprentissage Supervisé - Données d'Entraînement",
        scenario: "Vous constituez un ensemble de données d'entraînement pour l'apprentissage supervisé.",
        question: "Quelle est la caractéristique essentielle d'un bon ensemble de données d'entraînement supervisé ?",
        options: [
            "Être le plus petit possible pour accélérer l'apprentissage.",
            "Être non étiqueté pour permettre l'apprentissage non supervisé.",
            "Être représentatif du problème à résoudre et contenir des exemples variés et pertinents, avec des étiquettes correctes.",
            "Être biaisé pour forcer le modèle à apprendre des règles spécifiques."
        ],
        correctAnswer: "Être représentatif du problème à résoudre et contenir des exemples variés et pertinents, avec des étiquettes correctes.",
        explanation: "Un bon ensemble de données d'entraînement doit être représentatif de la tâche que le modèle doit apprendre, varié pour couvrir différents cas, pertinent pour le problème, et contenir des étiquettes (sorties correctes) de qualité."
    },
    {
        category: "Fonction Coût - Classification",
        scenario: "Pour un problème de classification binaire (deux classes), vous devez choisir une fonction coût.",
        question: "Quelle fonction coût est souvent utilisée pour les problèmes de classification binaire, en particulier avec la régression logistique ?",
        options: [
            "Erreur quadratique moyenne.",
            "Erreur absolue moyenne.",
            "Entropie croisée (Cross-Entropy Loss).",
            "Fonction de coût Hinge Loss."
        ],
        correctAnswer: "Entropie croisée (Cross-Entropy Loss).",
        explanation: "L'entropie croisée (ou Cross-Entropy Loss) est une fonction coût couramment utilisée pour les problèmes de classification, en particulier pour la classification binaire avec des modèles comme la régression logistique ou les réseaux neuronaux."
    },
    {
        category: "Descente de Gradient - Optimisation",
        scenario: "Vous utilisez la descente de gradient pour optimiser les paramètres d'un modèle.",
        question: "Quel est l'objectif principal de l'algorithme de descente de gradient en optimisation ?",
        options: [
            "Trouver le maximum global d'une fonction.",
            "Trouver le minimum local ou global d'une fonction.",
            "Rendre la fonction coût convexe.",
            "Accélérer le calcul du gradient."
        ],
        correctAnswer: "Trouver le minimum local ou global d'une fonction.",
        explanation: "L'algorithme de descente de gradient est une méthode d'optimisation qui vise à trouver un minimum (local ou global) d'une fonction, en se déplaçant itérativement dans la direction opposée du gradient."
    },
    {
        category: "Apprentissage par Renforcement - Horizon de Décision",
        scenario: "Le facteur d'escompte (γ) influence l'horizon de décision de l'agent en apprentissage par renforcement.",
        question: "Comment un facteur d'escompte (γ) proche de 1 affecte-t-il l'horizon de décision de l'agent ?",
        options: [
            "L'agent a un horizon de décision court, il se concentre sur les récompenses immédiates.",
            "L'agent a un horizon de décision long, il prend en compte les récompenses futures lointaines.",
            "Le facteur d'escompte n'influence pas l'horizon de décision.",
            "L'agent devient plus explorateur."
        ],
        correctAnswer: "L'agent a un horizon de décision long, il prend en compte les récompenses futures lointaines.",
        explanation: "Un facteur d'escompte γ proche de 1 donne plus de poids aux récompenses futures, ce qui allonge l'horizon de décision de l'agent. Il prendra des décisions en considérant les conséquences à long terme de ses actions."
    },
    {
        category: "Agents Intelligents - Réflexe vs Modèle",
        scenario: "Vous comparez un agent réflexe simple et un agent réflexe basé sur un modèle.",
        question: "Quelle est la principale différence entre un agent réflexe simple et un agent réflexe basé sur un modèle ?",
        options: [
            "L'agent réflexe simple est plus rapide.",
            "L'agent réflexe basé sur un modèle utilise un modèle interne de l'environnement pour prendre ses décisions.",
            "L'agent réflexe simple est plus rationnel.",
            "L'agent réflexe basé sur un modèle n'utilise pas de capteurs."
        ],
        correctAnswer: "L'agent réflexe basé sur un modèle utilise un modèle interne de l'environnement pour prendre ses décisions.",
        explanation: "L'agent réflexe basé sur un modèle se distingue par l'utilisation d'un modèle interne de l'environnement. Ce modèle lui permet de raisonner sur les conséquences de ses actions et de prendre des décisions plus complexes que le simple agent réflexe, qui se base uniquement sur les perceptions courantes."
    }
];

export default questionsData;