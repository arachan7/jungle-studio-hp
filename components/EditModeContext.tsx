'use client';

import { createContext, useCallback, useContext, useRef, useState } from 'react';

export type Change = { type: 'text' | 'image'; value: string };

type EditModeContextType = {
  isEditMode: boolean;
  addChange: (eid: string, change: Change) => void;
  pendingChanges: Map<string, Change>;
  clearChanges: () => void;
};

const EditModeContext = createContext<EditModeContextType>({
  isEditMode: false,
  addChange: () => {},
  pendingChanges: new Map(),
  clearChanges: () => {},
});

export function EditModeProvider({
  isEditMode,
  children,
}: {
  isEditMode: boolean;
  children: React.ReactNode;
}) {
  // pendingChanges は ref で実体を保持しつつ、変更を UI に伝えるため state も併用
  const ref = useRef<Map<string, Change>>(new Map());
  const [, setTick] = useState(0);

  const addChange = useCallback((eid: string, change: Change) => {
    ref.current.set(eid, change);
    setTick((t) => t + 1);
  }, []);

  const clearChanges = useCallback(() => {
    ref.current.clear();
    setTick((t) => t + 1);
  }, []);

  return (
    <EditModeContext.Provider
      value={{
        isEditMode,
        addChange,
        pendingChanges: ref.current,
        clearChanges,
      }}
    >
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode(): EditModeContextType {
  return useContext(EditModeContext);
}
