import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { NavigateState } from '@/recoil/common/atom';

interface initNavigatorParam {
  header: string | React.ReactNode;
}

const useInitNavigator = (param: initNavigatorParam) => {
  const setNavigatorState = useSetRecoilState(NavigateState);

  useEffect(() => {
    setNavigatorState({
      header: param.header,
    });
  }, [param]);
};

export default useInitNavigator;
