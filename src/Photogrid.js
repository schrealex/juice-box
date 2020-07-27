import React from 'react';
import './Photogrid.scss';

class Photogrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        const queryValue = 'Nintendo Switch';
        const clientId = 'JHPLOF4B3Blzwrct_HELneBP84ixtjNkg5Y87YDKFeY';
        const url = `https://api.unsplash.com/search/photos?&query=${queryValue}&client_id=${clientId}&per_page=12`;
        fetch(url)
        .then(res => res.json())
		.then(data => {
            console.log(data)
			this.setState({ 
                isLoaded: true,
                items: data.results
            });
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <img src={item.urls.regular} alt={item.alt_description}></img>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default Photogrid;