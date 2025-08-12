'use client';
import React, { Dispatch, ReactNode, useReducer, useContext } from 'react';

interface LayoutState {
  isSidebarOpened: boolean;
}
export enum LayoutActionType {
  TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR',
}

type LayoutAction = { type: LayoutActionType.TOGGLE_SIDEBAR };

const LayoutStateContext = React.createContext<LayoutState | undefined>(
  undefined
);
const LayoutDispatchContext = React.createContext<
  Dispatch<LayoutAction> | undefined
>(undefined);

function layoutReducer(state: LayoutState, action: LayoutAction): LayoutState {
  switch (action.type) {
    case LayoutActionType.TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(layoutReducer, {
    isSidebarOpened: true,
  });
  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

export function useLayoutState() {
  const context = useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error('useLayoutState must be used within a LayoutProvider');
  }
  return context;
}

export function useLayoutDispatch() {
  const context = useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error('useLayoutDispatch must be used within a LayoutProvider');
  }
  return context;
}
