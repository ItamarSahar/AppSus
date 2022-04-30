import { Home } from './pages/app-home.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { About } from './pages/app-about.jsx'
import { UserMsg } from './cmps/user-msg.jsx'
import { NoteApp } from './apps/keep/pages/note-app.jsx'
import { MailApp } from './apps/mail/pages/email-app.jsx'
import { EditNote } from './apps/keep/pages/edit-note.jsx'
import { BookApp } from './apps/book/pages/book-app.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
	return (
		<Router>
			<section className="app">
				<AppHeader />
				<main>
					<Switch>
						<Route path="/email" component={MailApp} />
						<Route path="/book" component={BookApp} />
						<Route path="/keep/edit/:noteType?/:noteID?" component={EditNote} />
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
