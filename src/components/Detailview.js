import React from "react";
import Card from 'react-bootstrap/Card'
import { Nav } from 'reactstrap'

function Detailview (
    actual,
) {

    console.log(actual.actual);
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
            </Card.Header>
            <Card.Body>
                <Card.Title>Fehler ID: {actual.actual.id}</Card.Title>
                <Card.Text>
                    <p>Beschreibung: {actual.actual.properties.comment}</p>
                    <p>User: {actual.actual.properties.user}</p>
                    <p>Date: {actual.actual.properties.date}</p>
                    <p>Bearbeitungen: {actual.actual.properties.delete} gelöscht, {actual.actual.properties.modify} bearbeitet, {actual.actual.properties.create} hinzugefügt</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default (Detailview);
