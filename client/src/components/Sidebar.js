import React from 'react'

function Sidebar(props) {
        return(
            <>
                <form>
                    <input/> Needs
                    <br/>
                    <label>
                        <input 
                            type="checkbox"
                            name="isMale"
                            onChange={props.handleChange}
                            checked = {props.data.isMale}/> Male 
                    </label>
                    <br/>
                    
                    <label>
                        <input
                            type="checkbox"
                            name="isFemale"
                            onChange = {props.handleChange}
                            checked={props.data.isFemale}
                            /> Female
                    </label>
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="age10"
                            onChange = {props.handleChange}
                            checked={props.data.age10}
                            /> Age 1-10
                    </label>
                    <br/>
                </form>
            </>
        )
    }


export default Sidebar