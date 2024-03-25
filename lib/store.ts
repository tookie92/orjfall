import { atom } from "jotai";

interface AnimationState {
    currentAnimation: string;
    animations: string[];
}


export const drehenanim = atom({
    currentAnimation:"drehen",
    animations:["hoch_chair","drehen", "rien"]
})

export const animationPlayedAtom = atom<boolean>(false);