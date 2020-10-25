import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import ServantCard from "./ServantCard";


export default class Featured extends Component {
    render() {
        return (
            <Container className="mt-5">
                <h2>Featured Servants</h2>
                <div className="d-flex flex-wrap justify-content-between">
                {this.props.servantsList.map((servant, i) => {
                    if(i < 10) {
                        return <ServantCard key={i} servant={servant} />;
                    }
                })}
                </div>
            </Container>
        )
    }
}
