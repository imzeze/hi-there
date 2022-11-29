import { atom } from 'recoil';

export const NavigateState = atom<{ header: string | React.ReactNode }>({
  key: 'navigateState',
  default: {
    header: 'HOME',
  },
});
