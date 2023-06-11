import { useEffect, useState } from "react";
import anime from "animejs";

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      });
  };

  useEffect(() => {
    const timeOut = setTimeout(() => setIsMounted(true), 10);

    animate();

    return () => clearTimeout(timeOut);
  });

  return (
    <div
      className="flex h-screen items-center justify-center"
      isMounted={isMounted}
    >
      <img id="logo" src="/assets/Svg/My-Logo.svg" width="70px" height="70px" />
    </div>
  );
};

export default SplashScreen;
