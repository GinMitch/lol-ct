import { removeUnnecessaryChallenges } from "./orderChallenges";
import { intToTier } from "../../func/tierFunctions";
import config from "../../config";

export default function statsCalculateTotalPoints(challenges) {

    challenges = removeUnnecessaryChallenges(challenges, { "gamemode": [], "type": [], "category": [] })

    let tiers = {}
    for (let i = 0; i < config.tiers.length; i++) {
        tiers[config.tiers[i]] = 0
    }

    // console.log("-----");

    for (let i = 0; i < challenges.length; i++) {
        const challenge = challenges[i];

        if (challenge[0] > 10
            && challenge[6].parent !== "0" // all legacy
            && challenge[8] !== 2022000 // 2022 capstone
            && challenge[8] !== 2023000 // 2023 capstone
            && challenge[8] !== 601000  // arena capstone
            && challenge[8] !== 2024100 // seasonal 2024 capstone
            && challenge[8] !== 2024200 // seasonal 2024 capstone
            && challenge[6].state === "ENABLED"
        ) {
            //console.log(challenge[8]);
            tiers[intToTier(challenge[1])] += 1

        } else {
            // console.log(challenge[0], challenge[6].state, challenge[6].translation.name, challenge[6].translation.description)
        }
    }
    return tiers

}