import React from 'react'
import Sidebar from './Sidebar'

class Form extends React.Component {
    constructor(){
        super()
        this.state ={
            age10:false,
            age20:false,
            age30:false,
            age40:false,
            age50:false,
            age60:false,
            age70:false,
            age80above:false,
            isFemale:false,
            isMale: false
        }
        
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                [name] : checked
            })
            : this.setState({
                [name]: value
            })
    }
    
    render(){
        return(
            <>
                <Sidebar
                    handleChange={this.handleChange}
                    data = {this.state}/>
            </>
        )
    }
}

export default Form