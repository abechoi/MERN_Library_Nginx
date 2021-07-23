import React from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookList from "./pages/BookListPage";
import Homepage from "./pages/Homepage";
import BookPage from "./pages/BookPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:id" component={BookPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
