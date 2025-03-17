import { createContext, useState  } from 'react';

export const CaptainDataContext = createContext();

// export const useCaptain = ()=>{
//     const context = useContext(CapatainContext);
//     if(!context){
//         throw new Error('useRider must be used within a RiderProvider')
//     }
// }
const CaptainContext = ({ children }) => {
    const [ captain, setCaptain ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;