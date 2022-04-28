const { NavLink, withRouter } = ReactRouterDOM
import { utilService } from '../services/util.service.js'

class _appHeader extends React.Component {
	state = {
		display: {
			menu: 'none',
			button: 'flex',
		},
	}

	openMenu = () => {
		let { menu, button } = this.state.display
		menu = menu === 'none' ? 'flex-colomun' : 'none'
		button = menu === 'none' ? 'flex' : 'none'
		this.setState({ display: { menu, button } })
	}

	render() {
		let { menu, button } = this.state.display
		return (
			<header className="app-header">		
						<NavLink exact to="/">
				<h3 className="logo">Appsus</h3>
		</NavLink>

				<i
					onClick={this.openMenu}
					className={`menu fa-solid fa-bars ${button}`}
				></i>

				<nav className={`nav-header  ${menu}`} onClick={this.openMenu}>
					<h3>MENU</h3>
					
					<NavLink exact to="/">
						Home
					</NavLink>
					<NavLink to="/email">Email</NavLink>
					<NavLink exact to="/book">
						Book
					</NavLink>
					<NavLink exact to="/Keep">
						Keep
					</NavLink>
					<NavLink to="/about">About</NavLink>
				</nav>
			</header>
		)
	}
}

export const AppHeader = withRouter(_appHeader)
