import React, { Component } from "react";
import "./chip.css"

class Chip extends Component {
    render() {
        const { chip, remove } = this.props
        return (<div className="chip">
            {
                chip.map(name => {
                    return (<p> <label key={name.ema}>
                        <span>{name.first_name}</span>  <span>{name.email}</span>
                    </label><button key={name.id} onClick={() => remove(name.id)}>x</button></p>)
                })
            }
        </div>)
    }
}
export default Chip