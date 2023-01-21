import React from 'react'
export const DateContext = React.createContext()
const DateProviderContext = ({children}) => {
    
  const [sDate,setSDate] = React.useState(new Date().toLocaleDateString())
  const [eDate,setEDate] = React.useState(new Date().toLocaleDateString())
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(9);
  const [search , setSearch] = React.useState('')
  const [sort, setSort] = React.useState('')
  const [totalCar, setTotalNumberOfCar] = React.useState(0);
  const [auth,setAuth] = React.useState(false)
  const [user,setUser] = React.useState('')
  return (
		<DateContext.Provider
			value={{
				sDate,
				eDate,
				setSDate,
				setEDate,
				page,
				limit,
				setPage,
				setLimit,
				setSearch,
				search,
				sort,
				setSort,
				setTotalNumberOfCar,
				totalCar,
        auth,
        setAuth,
        user,
        setUser
			}}>
			{children}
		</DateContext.Provider>
  );
}

export default DateProviderContext
