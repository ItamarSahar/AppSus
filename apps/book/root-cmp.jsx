import { BookApp } from './pages/book-app.jsx'
import { Home } from './pages/home.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { About } from './pages/about.jsx'
import { BookDetails } from './pages/book-details.jsx'
import { UserMsg } from './cmps/user-msg.jsx'
import {apiBookService } from './services/api-books-service'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
	apiBookService.ask()
	return (
		<Router>
			<section className="app">
				<AppHeader />
				<h1>BOOK STORE</h1>
				<main>
					<Switch>
						<Route path="/book/:bookId" component={BookDetails} />
						<Route path="/book" component={BookApp} />
						<Route path="/about" component={About} />
						<Route path="/" component={Home} />
					</Switch>
				</main>
				<UserMsg />
			</section>
		</Router>
	)
}
