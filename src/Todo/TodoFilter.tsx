import React, {ChangeEvent} from "react";
import "./todoFilter.css"

function TodoFilter(props: { setFilteredData: (event: ChangeEvent<HTMLInputElement>) => void }) {

    return (
        <div className="filterForm">
            <input
                className="inputFilter"
                placeholder="day"
                onChange={props.setFilteredData}
            />
        </div>
    )
}

export default TodoFilter;