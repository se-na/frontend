import React from "react";
import Card from 'react-bootstrap/Card'
import { Nav } from 'reactstrap'

function Detailview () {
    return (
        <Card>
            <Card.Header class="HeaderCard">
                {/*<Nav variant="tabs" defaultActiveKey="#übersicht">
                    <Nav.Item>
                        <Nav.Link href="#übersicht">Übersicht</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Weitere Links</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#diskussion">Diskussion</Nav.Link>
                    </Nav.Item>
                </Nav>*/}
                <p>Übersicht</p>
            </Card.Header>
            <Card.Body>
                <Card.Title>Lala</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default (Detailview);
