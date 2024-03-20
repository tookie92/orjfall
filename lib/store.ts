import { atom } from "jotai";

interface AnimationState {
    currentAnimation: string;
    animations: string[];
}


export const drehenanim = atom({
    currentAnimation:"hoch_chair",
    animations:["hoch_chair","drehen"]
})

export const animationPlayedAtom = atom<boolean>(true);