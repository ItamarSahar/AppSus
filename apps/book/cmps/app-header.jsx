const { NavLink, withRouter } = ReactRouterDOM

function _appHeader(props) {
	return (
		<header className="app-header">
			<h3>The amazing Book Shop</h3>
			<nav className="nav-header">
				<NavLink exact to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/book">Books</NavLink>
			</nav>
		</header>
	)
}

export const AppHeader = withRouter(_appHeader)
