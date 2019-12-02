import React, { Component } from "react"
import "./input.css"


class Input extends Component {
    render() {
        const { searchString, onSearch } = this.props
        return (<React.Fragment>
            <input type="text" value={searchString} onChange={onSearch} placeholder="Enter search text" />
        </React.Fragment>)
    }
}

export default Input