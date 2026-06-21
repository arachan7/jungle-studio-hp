'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

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
  const [pendingChanges, setPendingChanges] = useState<Map<string, Change>>(new Map());

  const addChange = useCallback((eid: string, change: Change) => {
    setPendingChanges((prev) => {
      const next = new Map(prev);
      next.set(eid, change);
      return next;
    });
  }, []);

  const clearChanges = useCallback(() => {
    setPendingChanges(new Map());
  }, []);

  const value = useMemo(
    () => ({
      isEditMode,
      addChange,
      pendingChanges,
      clearChanges,
    }),
    [addChange, clearChanges, isEditMode, pendingChanges],
  );

  return <EditModeContext.Provider value={value}>{children}</EditModeContext.Provider>;
}

export function useEditMode(): EditModeContextType {
  return useContext(EditModeContext);
}
