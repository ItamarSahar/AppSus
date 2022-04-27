import { Home } from './pages/app-home.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { About } from './pages/app-about.jsx'
import { UserMsg } from './cmps/user-msg.jsx'
import { NoteApp } from './apps/keep/pages/note-app.jsx'
import { EmailApp } from './apps/mail/pages/email-app.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
	return (
		<Router>
			<section className="app">
				<AppHeader />
				<main>
					<Switch>
						<Route path="/email" component={EmailApp} />
						{/* <Route path="/book" component={Book} /> */}
						<Route path="/keep" component={NoteApp} />
						<Route path="/about" component={About} />

						<Route path="/" component={Home} />
					</Switch>
				</main>
				<UserMsg />
			</section>
		</Router>
	)
}
