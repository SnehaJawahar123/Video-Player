import React, { Component } from 'react'

import {Paper, TextField} from '@material-ui/core'

export default class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    onChangeHandler = event => this.setState({searchTerm: event.target.value}) 

    onSubmitHandler = event =>{
        event.preventDefault();
        const {searchTerm} = this.state
        const {onFormSubmit} = this.props
        onFormSubmit(searchTerm)
    }

    render() {
        return (
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.onSubmitHandler}>
                    <TextField fullWidth label='Search...' onChange={this.onChangeHandler}/>
                </form>
            </Paper>
        )
    }
}