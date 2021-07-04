import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export class MarkdownPreview extends Component {
    render() {
        return (
            <ReactMarkdown remarkPlugins={[gfm]}>{this.props.input}</ReactMarkdown>
        )
    }
}

export default MarkdownPreview
