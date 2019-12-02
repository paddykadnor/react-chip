import React, { Component } from "react"
import "./list.css"


class List extends Component {
    render() {
        const { list, selectChip } = this.props
        return (<React.Fragment>
            <ul>
                {
                    list.length > 0 ? list.map(item => {
                        return <li key={item.first_name.toString()} onClick={() => {
                            selectChip(item)
                        }}>{item.first_name}<span> {item.email} </span></li>
                    })
                        :
                        null

                }
            </ul>
        </React.Fragment>)
    }
}

export default List