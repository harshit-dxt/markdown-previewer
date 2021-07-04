import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';

export class MarkdownInput extends Component {
    render() {
        return (
            <Form className='form-container'>
                <Form.Group controlId="markdownInput">
                    {/* <Form.Label>Enter Markdown</Form.Label> */}
                    <Form.Control 
                      placeholder='Enter markdown to see magic.'
                      className='markdown-text-area' 
                      onChange={this.props.handleChange} 
                      as="textarea"
                />
                </Form.Group>
            </Form>
        )
    }
}

export default MarkdownInput

