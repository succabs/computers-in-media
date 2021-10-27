import React from 'react';
import  Result  from './Result';

class Results extends React.Component {
    render() {
    return (
<ul>
        {this.props.results.map(result => (
        <Result key={result.id} results={result} />
))}
        </ul>
)    
}
}

export default Results

