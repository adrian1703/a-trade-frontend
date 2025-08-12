'use client';
import Image from 'next/image';
import styles from './page.module.css';
import {
  LayoutActionType,
  useLayoutDispatch,
  useLayoutState,
} from '@/context/LayoutContext';

export default function Home() {
  const { isSidebarOpened } = useLayoutState();
  const dispatch = useLayoutDispatch();

  return (
    <>
      <button
        onClick={() => dispatch({ type: LayoutActionType.TOGGLE_SIDEBAR })}
        style={{ marginBottom: '1rem' }}
      >
        Toggle Sidebar (Currently: {isSidebarOpened ? 'Open' : 'Closed'})
      </button>
    </>
  );
}
