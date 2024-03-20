import { useAtom } from "jotai";
import { animationPlayedAtom, drehenanim } from "@/lib/store";

const useSetCurrentAnimation = () => {
  const [, setCurrentAnimation] = useAtom(drehenanim);
 
  const setAnimation = (anim: string) => {
    setCurrentAnimation((prev) => ({
      ...prev,
      currentAnimation: anim
    }));
  };

  return setAnimation;
};

export default useSetCurrentAnimation;