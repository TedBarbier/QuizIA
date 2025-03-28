const questionsData = [
    {
        category: "Agents Intelligents",
        scenario: "Vous concevez un agent intelligent pour un aspirateur robot.",
        question: "Selon le cours, quelle propriété décrit un agent qui perçoit son environnement à travers des capteurs et agit sur lui via des effecteurs ?",
        options: [
            "Agent Rationnel",
            "Agent Autonome",
            "Agent Réflexe",
            "Agent Intelligent"
        ],
        correctAnswer: "Agent Intelligent",
        explanation: "Le cours définit un agent intelligent comme un agent qui perçoit son environnement via des capteurs et agit sur son environnement via des effecteurs."
    },
    {
        category: "Types d'Agents",
        scenario: "Vous devez implémenter un agent qui réagit immédiatement à son environnement sans historique.",
        question: "Quel type d'agent est le plus approprié pour cette tâche ?",
        options: [
            "Agent réflexe fondé sur des modèles",
            "Agent fondé sur des buts",
            "Agent réflexe simple",
            "Agent fondé sur l'utilité"
        ],
        correctAnswer: "Agent réflexe simple",
        explanation: "Un agent réflexe simple sélectionne ses actions en fonction des perceptions courantes, sans considérer l'historique des perceptions, ce qui correspond à la description."
    },
    {
        category: "Propriétés de l'Environnement",
        scenario: "Vous analysez l'environnement d'un jeu d'échecs pour un agent IA.",
        question: "Parmi les propriétés suivantes, laquelle décrit le mieux l'environnement du jeu d'échecs ?",
        options: [
            "Entièrement observable, Monoagent, Stochastique, Séquentiel, Dynamique, Discret",
            "Partiellement observable, Multiagent, Déterministe, Épisodique, Statique, Continu",
            "Entièrement observable, Multiagent, Déterministe, Séquentiel, Statique, Discret",
            "Partiellement observable, Monoagent, Stochastique, Épisodique, Dynamique, Continu"
        ],
        correctAnswer: "Entièrement observable, Multiagent, Déterministe, Séquentiel, Statique, Discret",
        explanation: "Le jeu d'échecs est entièrement observable, implique deux agents (Multiagent), est déterministe, séquentiel, statique pendant le tour d'un joueur et discret."
    },
    {
        category: "Algorithmes de Recherche",
        scenario: "Vous devez trouver le chemin le plus court dans un labyrinthe, en minimisant le coût total.",
        question: "Quel algorithme de recherche informé est le plus approprié pour garantir l'optimalité et minimiser le coût total ?",
        options: [
            "Recherche gloutonne par le meilleur d'abord",
            "Recherche en largeur d'abord (BFS)",
            "Recherche en profondeur d'abord (DFS)",
            "Recherche A*"
        ],
        correctAnswer: "Recherche A*",
        explanation: "La recherche A* est conçue pour minimiser le coût total et est optimale si la fonction heuristique est admissible, ce qui correspond à la description."
    },
    {
        category: "Descente de Gradient",
        scenario: "Vous implémentez une régression linéaire et utilisez l'algorithme de descente de gradient.",
        question: "Quel est le but principal de l'algorithme de descente de gradient dans ce contexte ?",
        options: [
            "Tracer la fonction h.",
            "Maximiser l'erreur quadratique.",
            "Minimiser l'erreur quadratique (fonction coût).",
            "Déterminer le nombre d'époques optimal."
        ],
        correctAnswer: "Minimiser l'erreur quadratique (fonction coût).",
        explanation: "L'algorithme de descente de gradient est utilisé pour minimiser la fonction coût 'erreur quadratique' dans le cadre d'une régression linéaire."
    },
    // Ajoutez beaucoup plus de questions ici, en vous inspirant de TOUS les cours et TD
];

export default questionsData;