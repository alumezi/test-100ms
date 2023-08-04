import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children, initialRoomId, initialRole }) {
  const [view, setView] = useState("preview");
  const [roomId, setRoomId] = useState(initialRoomId);
  const [role, setRole] = useState(initialRole);

  const goToRoot = () => setView("/");
  const goToMeeting = () => setView("meeting");
  const goToStreaming = () => setView("streaming");
  const goToPreview = () => setView("preview");
  const leaveMeeting = () => setView("leave");

  const setAppRoomId = id => setRoomId(id);
  const setAppRole = role => setRole(role);

  return (
    <AppContext.Provider
      value={{
        view,
        roomId,
        role,
        goToRoot,
        goToMeeting,
        goToStreaming,
        goToPreview,
        leaveMeeting,
        setAppRoomId,
        setAppRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}
