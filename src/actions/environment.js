/**
 * Created by wukewei on 16/12/7.
 * @flow
 */

const changeWidthAndHeight = (height: number, width: number) => {
  return {
    type: 'CHANGE_WIDTH_AND_HEIGHT',
    height,
    width,
  };
};

export const initEnvironment = () => {
  return (dispatch: (action : Object) => void) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent);
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    }

    dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));

    window.onresize = () => {
      dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));
    };
  };
};
