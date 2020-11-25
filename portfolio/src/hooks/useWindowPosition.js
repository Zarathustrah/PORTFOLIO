import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offetSetHeight = window.document.getElementById(id).offsetHeight;
      console.log('windpageOffset',window.pageYOffset,offetSetHeight)
      if (window.pageYOffset > offetSetHeight * 3) {
        setAnimation(true);
        console.log(setAnimation)
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);
  return animation;
}