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
                    <label>
                        <input
                            type="checkbox"
                            name="isFemale"
                            onChange = {props.handleChange}
                            checked={props.data.isFemale}
                            /> Female
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="checkbox"
                            name="age10"
                            onChange = {props.handleChange}
                            checked={props.data.age10}
                            /> age 0-10
                    </label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="age20"
                            onChange={props.handleChange}
                            checked={props.data.age20}
                            /> age 11-20
                    </label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="age30"
                            onChange={props.handleChange}
                            checked={props.data.age30}
                            /> age 21-30
                    </label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="age40"
                            onChange = {props.handleChange}
                            checked={props.data.age40}
                            /> age 31-40
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="age50"
                            onChange={props.handleChange}
                            checked={props.data.age50}
                            /> age 41-50
                    </label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="age60"
                            onChange={props.handleChange}
                            checked={props.data.age60}
                            /> age 51-60
                    </label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="age70"
                            onChange={props.handleChange}
                            checked={props.data.age70}
                            /> age 61-70
                    </label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="age80"
                            onChange={props.handleChange}
                            checked={props.data.age80}
                            /> age 71-80
                    </label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="age80above"
                            onChange={props.handleChange}
                            checked={props.data.age80above}
                            /> age 80 and above
                    </label>
                    <br/>  
                </form>
            </>
        )
    }


export default Sidebar