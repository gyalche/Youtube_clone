import { useSelector } from './../../node_modules/react-redux/src/hooks/useSelector';
import { useDispatch } from './../../node_modules/react-redux/src/hooks/useDispatch';
import { AppDispatch, RootState } from './index';
import { TypedUseSelectorHook } from 'react-redux/es/types';
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
