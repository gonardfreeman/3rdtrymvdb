import React from 'react'
import { Link } from 'react-router'

const FilterLink = ({ filter, children }) => (
	<Link
		to={filter === 'SHOW_POPULAR' ? '/' : filter }
		activeStyle={{
	      textDecoration: 'none',
	      color: 'black'
	    }}
	>
		{children}
	</Link>
);

export default FilterLink;