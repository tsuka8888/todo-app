import { Todos } from "./pages/Todos";
import { Container } from "@material-ui/core";
import { Header } from "./organisms/Header";

function App() {
    return (
        <>
            <Header></Header>
            <Container>
                <Todos></Todos>
            </Container>
        </>
    );
}

export default App;
