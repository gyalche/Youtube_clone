import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { AppDispatch, RootState } from './index';
import { TypedUseSelectorHook } from 'react-redux/es/types';
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
