import React from "react";
type UpdateStorageContextType = {
    updateStorage: object
    setUpdateStorage: (updateStorage: object) => void
}

export const UpdateStorageContext = React.createContext<UpdateStorageContextType | undefined>(undefined);