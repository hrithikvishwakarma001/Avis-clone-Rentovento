import React from 'react'
export const DateContext = React.createContext()
const DateProviderContext = ({children}) => {
    
  const [sDate,setSDate] = React.useState(new Date().toLocaleDateString())
  const [eDate,setEDate] = React.useState(new Date().toLocaleDateString())
  
  return (
		<DateContext.Provider value={{sDate,eDate, setSDate, setEDate }}>
			{children}
		</DateContext.Provider>
  );
}

export default DateProviderContext
