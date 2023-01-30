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
  const [user,setUser] = React.useState({})
	const [book,setBook] = React.useState({})
	const [userData,setUserData] = React.useState({})
	const [adminAuth, setAdminAuth] = React.useState(false);
  const [bookData, setBookData] = React.useState([])
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
				setUser,
				book,
				setBook,
				userData,
				setUserData,
				adminAuth,
				setAdminAuth,
				bookData,
				setBookData
			}}>
			{children}
		</DateContext.Provider>
  );
}

export default DateProviderContext
